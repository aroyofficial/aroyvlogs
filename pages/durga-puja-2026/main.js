import {
	WALKING_PACE_METERS_PER_MINUTE,
	TransitMedium,
	renderLunch,
	renderPandal,
	renderTransit,
} from "./commons.js";
import { chaturthi } from "./chaturthi.js";
import { panchami } from "./panchami.js";

const pageData = { chaturthi, panchami };

function renderItinerary(routeData) {
	const { stops, transits, lunchStop } = routeData;
	const list = document.querySelector(".route-list");
	if (!list) return;

	list.innerHTML = stops
		.map(
			(stop) =>
				`<li class="itinerary-stop" data-stop-order="${stop.order}">${renderPandal(stop, routeData)}</li>`,
		)
		.join("");

	list.querySelectorAll("[data-stop-order]").forEach((slot) => {
		const stop = stops.find(
			(item) => item.order === Number(slot.dataset.stopOrder),
		);
		if (!stop) return;

		if (stop.transit !== undefined) {
			const transit = transits.find((item) => item.index === stop.transit);
			if (transit) {
				const markup = `<li class="itinerary-transit">${renderTransit(transit)}</li>`;
				slot.insertAdjacentHTML(
					stop.isPreviousTransit ? "beforebegin" : "afterend",
					markup,
				);
			}
		}

		if (stop.lunch && lunchStop) {
			slot.insertAdjacentHTML("afterend", renderLunch(lunchStop));
		}
	});
}

function calculateRouteSummary(routeData) {
	const { stops, transits, lunchStop } = routeData;
	const orderedTransits = [...transits].sort((a, b) => a.index - b.index);
	const firstTransitStep = orderedTransits[0]?.steps[0];
	const lastTransit = orderedTransits[orderedTransits.length - 1];
	const lastTransitStep = lastTransit?.steps[lastTransit.steps.length - 1];
	const areas = [...new Set(stops.map((stop) => stop.area[0]))];
	const itinerary = [
		firstTransitStep?.src?.name,
		...areas,
		lastTransitStep?.dest?.name,
	].filter(Boolean);
	const linkedTransitIndexes = new Set(
		stops.map((stop) => stop.transit).filter((index) => index !== undefined),
	);
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
	const totalWalkingMeters =
		pandalWalkingDistance + transitWalkingDistance + lunchWalkingDistance;
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

function renderMain(routeData) {
	const mainRoot = document.getElementById("puja-day-main-root");
	if (!mainRoot || !routeData) return;

	const { title, dateLabel, meetup } = routeData;
	const { itinerary, totalWalkingDistance, totalPandals, zones } =
		calculateRouteSummary(routeData);
	mainRoot.outerHTML = `<main id="puja-day-main"><section class="section"><span class="eyebrow">${dateLabel}</span><h1 class="puja-day display-3 mt-3">${title}</h1><p class="lead text-secondary">Meet-up: ${meetup.time} &middot; <a class="route-location-link" target="_blank" rel="noopener" href="${meetup.place.gmapsUrl}">${meetup.place.name}</a></p><div class="route-summary">&#128256; <strong>Itinerary:</strong> ${itinerary}</div><div class="route-summary mt-3">&#128694; <strong>Total Walking Distance:</strong> ${totalWalkingDistance}</div><div class="route-summary mt-3">&#127917; <strong>Total Pandals:</strong> ${totalPandals}</div><div class="route-summary mt-3">&#128506;&#65039; <strong>Zones Covered:</strong> ${zones}</div><ol class="route-list"></ol></section></main>`;
	renderItinerary(routeData);
}

function renderHeader() {
	const headerRoot = document.getElementById("page-header-root");
	if (!headerRoot) return;

	headerRoot.outerHTML = `<header class="site-header"><div class="site-header-inner"><a class="brand" href="../../"><span class="brand-icon">&#10022;</span><span><strong>Vlogs with Arijit</strong><small>Durga Puja 2026</small></span></a><a class="btn btn-dark rounded-pill" href="index.html">&#8592; Puja days</a></div></header>`;
}

function renderFooter(routeData) {
	const footerRoot = document.getElementById("page-footer-root");
	if (!footerRoot) return;

	footerRoot.outerHTML = `<footer class="site-footer"><div><strong>Vlogs with Arijit</strong><span>Durga Puja 2026 &middot; ${routeData.title}</span></div><a class="text-link" href="index.html">All Puja days</a></footer>`;
}

const pageRoot = document.getElementById("puja-day-main-root");
const requestedPage = new URLSearchParams(window.location.search).get("day");
const pageKey = requestedPage || pageRoot?.dataset.page || "chaturthi";
const routeData = pageData[pageKey.toLowerCase()];

if (routeData) {
	document.title = `${routeData.title} · Durga Puja 2026`;
	renderHeader();
	renderMain(routeData);
	renderFooter(routeData);
} else {
	window.location.replace("../../404.html");
}
