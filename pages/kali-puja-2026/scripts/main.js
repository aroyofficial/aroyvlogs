import { chaturthi as barasatData } from "./barasat.js";
import { panchami as naihatiData } from "./naihati.js";
import { Area, showCountdownPopup, Zone } from "./commons.js";
import { showPujaRadar } from "./map.js";

let data = {
	barasat: barasatData,
	naihati: naihatiData,
};

let WALKING_PACE_METERS_PER_MINUTE;
let TransitMedium;
let renderLunch;
let renderDinner;
let renderPandal;
let renderTransit;

function renderItinerary(routeData) {
	const { stops, transits, lunchStop, dinnerStop } = routeData;
	const list = document.querySelector(".route-list");
	if (!list) return;

	list.innerHTML = stops
		.map(
			(stop) =>
				`<li class="itinerary-stop" data-stop-order="${stop.order}">${renderPandal(stop, routeData)}</li>`,
		)
		.join("");

	const renderTransitMarkup = (transitIndex) => {
		const transit = transits.find((item) => item.index === transitIndex);
		return transit
			? `<li class="itinerary-transit">${renderTransit(transit)}</li>`
			: "";
	};

	list.querySelectorAll("[data-stop-order]").forEach((slot) => {
		const stop = stops.find(
			(item) => item.order === Number(slot.dataset.stopOrder),
		);
		if (!stop) return;

		if (stop.isPreviousTransit && stop.transit !== undefined) {
			slot.insertAdjacentHTML("beforebegin", renderTransitMarkup(stop.transit));
		}

		const stopTransitMarkup =
			!stop.isPreviousTransit && stop.transit !== undefined
				? renderTransitMarkup(stop.transit)
				: "";
		const lunchMarkup = stop.lunch && lunchStop ? renderLunch(lunchStop) : "";
		const lunchTransitMarkup =
			stop.lunch && lunchStop?.transit !== undefined
				? renderTransitMarkup(lunchStop.transit)
				: "";
		const dinnerMarkup =
			stop.dinner && dinnerStop ? renderDinner(dinnerStop) : "";
		const dinnerTransitMarkup =
			stop.dinner && dinnerStop?.transit !== undefined
				? renderTransitMarkup(dinnerStop.transit)
				: "";
		const afterStopMarkup =
			stopTransitMarkup +
			lunchMarkup +
			lunchTransitMarkup +
			dinnerMarkup +
			dinnerTransitMarkup;

		if (afterStopMarkup) {
			slot.insertAdjacentHTML("afterend", afterStopMarkup);
		}
	});
}

function setupPandalExpansions() {
	document.querySelectorAll(".pandal").forEach((card) => {
		card.addEventListener("click", (event) => {
			if (event.target.closest("a")) return;
			if (card.dataset.emptyExpansion === "true") return;
			const open = card.getAttribute("aria-expanded") === "true";
			document
				.querySelectorAll('.pandal[aria-expanded="true"]')
				.forEach((other) => {
					if (other === card) return;
					other.setAttribute("aria-expanded", "false");
					const panel = other.querySelector(".itinerary-item-expansion-panel");
					if (panel) {
						panel.classList.remove("is-open");
						panel.setAttribute("aria-hidden", "true");
					}
				});
			card.setAttribute("aria-expanded", String(!open));
			const panel = card.querySelector(".itinerary-item-expansion-panel");
			if (panel) {
				panel.classList.toggle("is-open", !open);
				panel.setAttribute("aria-hidden", String(open));
			}
		});
	});
}

function calculateRouteSummary(routeData) {
	const { stops, transits, lunchStop, dinnerStop } = routeData;
	const orderedTransits = [...transits].sort((a, b) => a.index - b.index);
	const firstTransitStep = orderedTransits[0]?.steps[0];
	const lastTransit = orderedTransits[orderedTransits.length - 1];
	// const lastTransitStep = lastTransit?.steps[lastTransit.steps.length - 1];
	const maxStopOrder = Math.max(...stops.map((s) => s.order));
	const maxStopTransit = stops.find((s) => s.order === maxStopOrder)?.transit;
	const maxStopTransitSteps = orderedTransits.find(
		(t) => t.index === maxStopTransit,
	)?.steps;
	const lastTransitStep = maxStopTransitSteps
		? maxStopTransitSteps[maxStopTransitSteps.length - 1]
		: undefined;
	const areas = [...new Set(stops.map((stop) => stop.area[0]))];
	const itinerary = [
		firstTransitStep?.src?.name,
		...areas,
		lastTransitStep?.dest?.name,
	].filter(Boolean);
	const linkedTransitIndexes = new Set([
		...stops.map((stop) => stop.transit).filter((index) => index !== undefined),
		...(stops.some((stop) => stop.lunch) && lunchStop?.transit !== undefined
			? [lunchStop.transit]
			: []),
		...(stops.some((stop) => stop.dinner) && dinnerStop?.transit !== undefined
			? [dinnerStop.transit]
			: []),
	]);
	const transitWalkingDistance = transits
		.filter((transit) => linkedTransitIndexes.has(transit.index))
		.flatMap((transit) => transit.steps)
		.filter((step) => step.medium === TransitMedium.WALK)
		.reduce((total, step) => total + step.distance, 0);
	const pandalWalkingDistance = stops.reduce(
		(total, stop) => total + stop.distance,
		0,
	);
	const lunchWalkingDistance = stops.some((stop) => stop.lunch)
		? lunchStop?.distance || 0
		: 0;
	const dinnerWalkingDistance = stops.some((stop) => stop.dinner)
		? dinnerStop?.distance || 0
		: 0;
	const totalWalkingMeters =
		pandalWalkingDistance +
		transitWalkingDistance +
		lunchWalkingDistance +
		dinnerWalkingDistance;
	const totalWalkingMinutes = Math.ceil(
		totalWalkingMeters / WALKING_PACE_METERS_PER_MINUTE,
	);
	const hours = Math.floor(totalWalkingMinutes / 60);
	const minutes = totalWalkingMinutes % 60;
	const duration = hours
		? `${hours} hour${hours === 1 ? "" : "s"} ${minutes} min`
		: `${minutes} min`;
	const zones = [...new Set(stops.map((stop) => stop.area[1]))];

	return {
		itinerary: itinerary.join(" &rarr; "),
		totalWalkingDistance: `${totalWalkingMeters} m ~ ${(totalWalkingMeters / 1000).toFixed(1)} km (approx ${duration})`,
		totalPandals: stops.length,
		zones: zones.join(", "),
	};
}

function getMeetupPlaceClass(place, Places) {
	if (Object.values(Places.BUS_STOPS).includes(place)) {
		return "place-chip--bus";
	}
	if (Object.values(Places.METRO_STATIONS).includes(place)) {
		return "place-chip--metro";
	}
	if (Object.values(Places.RAIL_STATIONS).includes(place)) {
		return "place-chip--rail";
	}
	return "";
}

function renderMain(routeData, Places) {
	const mainRoot = document.getElementById("puja-day-main-root");
	if (!mainRoot || !routeData) return;

	const { title, dateLabel, meetup } = routeData;
	const meetupPlaceClass = getMeetupPlaceClass(meetup.place, Places);
	const { itinerary, totalWalkingDistance, totalPandals, zones } =
		calculateRouteSummary(routeData);
	mainRoot.outerHTML = `<main id="puja-day-main"><section class="section"><span class="eyebrow">${dateLabel}</span><h1 class="puja-day display-3 mt-3">${title}</h1><p class="lead text-secondary">Meet-up: ${meetup.time} &middot; <a class="route-location-link meetup-place-chip ${meetupPlaceClass}" target="_blank" rel="noopener" href="${meetup.place.gmapsUrl}"><span>${meetup.place.name}</span></a></p><!-- <div class="route-summary">&#128256; <strong>Itinerary:</strong> ${itinerary}</div> --> <div class="route-summary mt-3">&#128694; <strong>Total Walking Distance:</strong> ${totalWalkingDistance}</div><div class="route-summary mt-3">&#127917; <strong>Total Pandals:</strong> ${totalPandals}</div> <!-- <div class="route-summary mt-3">&#128506;&#65039; <strong>Zones Covered:</strong> ${zones}</div> --> <div class="mt-4 mb-3"><button id="toggle-map-btn" class="btn btn-outline-dark">Show Map View</button></div><div id="map-view-container" style="display: none; height: 500px; width: 100%; margin-bottom: 20px; z-index: 1;"></div><ol class="route-list"></ol></section></main>`;
	renderItinerary(routeData);
	setupPandalExpansions();
}

function renderHeader() {
	const headerRoot = document.getElementById("page-header-root");
	if (!headerRoot) return;

	headerRoot.outerHTML = `<header class="site-header"><div class="site-header-inner"><a class="brand" href="../../"><span class="brand-icon">&#10022;</span><span><strong>Vlogs with Arijit</strong><small>Kali Puja 2026</small></span></a><a class="btn btn-dark rounded-pill" href="index.html">&lt; Festival guide</a></div></header>`;
}

function renderFooter(routeData) {
	const footerRoot = document.getElementById("page-footer-root");
	if (!footerRoot) return;

	footerRoot.outerHTML = `<footer class="site-footer"><div><strong>Vlogs with Arijit</strong><span>Kali Puja 2026 &middot; ${routeData.title}</span></div><a class="text-link" href="index.html">Festival guide</a></footer>`;
}

function initializePujaAudio() {
	let audio = document.getElementById("kali-puja-bgm");
	if (!audio) {
		audio = document.createElement("audio");
		audio.id = "kali-puja-bgm";
		audio.src = "assets/bgm.mp3";
		audio.loop = true;
		audio.preload = "auto";
		audio.setAttribute("aria-hidden", "true");
		audio.style.display = "none";
		document.body.appendChild(audio);
	}

	const playAudio = () => audio.play().catch(() => {});
	playAudio();
	["pointerdown", "keydown", "touchstart"].forEach((eventName) =>
		document.addEventListener(eventName, playAudio, {
			once: true,
			passive: true,
		}),
	);
}

function renderSelectedPage(pageRoot) {
	Promise.all([import("./commons.js"), import("./map.js")])
		.then(([commons, map]) => {
			WALKING_PACE_METERS_PER_MINUTE = commons.WALKING_PACE_METERS_PER_MINUTE;
			TransitMedium = commons.TransitMedium;
			renderLunch = commons.renderLunch;
			renderDinner = commons.renderDinner;
			renderPandal = commons.renderPandal;
			renderTransit = commons.renderTransit;

			const requestedHub = new URLSearchParams(window.location.search).get(
				"hub",
			);
			const hubKey = (
				requestedHub ||
				pageRoot.dataset.page ||
				"barasat"
			).toLowerCase();
			const routeData = { barasat: barasatData, naihati: naihatiData }[hubKey];

			if (!routeData) {
				window.location.replace("index.html");
				return;
			}

			const hubTitle =
				hubKey === "naihati" ? "Naihati Kali Puja" : "Barasat Kali Puja";
			document.title = `${hubTitle} · Kali Puja 2026`;
			renderHeader();
			renderMain(routeData, commons.Places);
			renderFooter({ ...routeData, title: hubTitle });
			map.register(routeData);
			showCountdownPopup(
				routeData.countdown.title,
				routeData.countdown.subtitle,
				routeData.countdown.targetDate,
			);
		})
		.catch((ex) => {
			console.error(ex);
			window.alert("Oops! Something went wrong. Try reloading the page.");
			window.location.replace("../../404.html");
		});
}

function renderCounts() {
	console.log(data);
	let keys = Object.keys(data);
	keys.forEach((k) => {
		let dt = JSON.parse(JSON.stringify(data[k]));
		let totalStopDistance = dt.stops.reduce((acc, st) => acc + st.distance, 0);
		let totalTransitDistance = dt.transits
			.map((tr) => tr.steps)
			.flat()
			.filter((s) => s.hasOwnProperty("distance"))
			.reduce((acc, st) => acc + st.distance, 0);
		let lunchStopDistance = dt?.lunchStop?.distance ?? 0;
		let totalDistance =
			totalStopDistance + totalTransitDistance + lunchStopDistance;
		data[k].total = {
			pandals: dt.stops.length,
			distance: totalDistance,
			time: Math.ceil(totalDistance / 50),
		};
	});
	data.total = {
		pandals: keys
			.map((k) => data[k].total.pandals)
			.reduce((acc, p) => acc + p, 0),
	};
	let daywisePandalCountEls = document.querySelectorAll(
		".daywise-total-pandal-count",
	);
	let pandalCountSummaryEls = document.querySelectorAll(
		".pandal-count-summary",
	);
	let overallPandalCountEls = document.querySelectorAll(
		".overall-pandal-count",
	);
	let totalDaysEl = document.querySelector(".total-days");
	totalDaysEl.innerText = keys.length;
	overallPandalCountEls.forEach((el) => (el.innerText = data.total.pandals));
	keys.forEach((k, index) => {
		if (daywisePandalCountEls && daywisePandalCountEls[index]) {
			daywisePandalCountEls[index].innerText = data[k].total.pandals;
		}
		if (pandalCountSummaryEls && pandalCountSummaryEls[index]) {
			pandalCountSummaryEls[index].innerText = data[k].total.pandals;
		}
	});
}

function renderZones() {
	let zoneKeys = Object.keys(Zone);
	let areaKeys = Object.keys(Area);
	let targetingZonesEl = document.getElementById("targeting-zones");
	zoneKeys.forEach((z) => {
		let areas = areaKeys
			.map((a) => Area[a])
			.filter((a) => a[1] === Zone[z])
			.map((a) => a[0]);
		let anchorEl = document.createElement("a");
		let spanEl = document.createElement("span");
		spanEl.innerHTML = `${Zone[z]}<small>${areas.sort().join(", ")}</small>`;
		anchorEl.href = "#";
		anchorEl.appendChild(spanEl);
		targetingZonesEl.appendChild(anchorEl);
	});
}

function calculateStats() {
	renderCounts();
	renderZones();
}

initializePujaAudio();

const pageRoot = document.getElementById("puja-day-main-root");
if (pageRoot) {
	renderSelectedPage(pageRoot);
} else {
	calculateStats();
	showPujaRadar(data);
	showCountdownPopup(
		"Mahalaya",
		"The ultimate festive madness is here!",
		new Date("2026-10-10"),
	);
}
