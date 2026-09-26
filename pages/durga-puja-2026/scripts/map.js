// Add `Places` to your existing commons import if it isn't there already:
import { Places, TransitMedium, getPinLocation } from "./commons.js";

/* ──────────────────────────────────────────────────────────────────────────
   STOP MARKER CONFIG  —  ✏️  EDIT ICONS / COLOURS / LABELS HERE
   ---------------------------------------------------------------------------
   `icon`  → any Font Awesome 6 solid class (without the "fa-solid" prefix)
   `pin`   → gradient [from, to] used for the marker pin & popup accents
   `label` → the category text shown on the map tooltip + popup pill
────────────────────────────────────────────────────────────────────────── */
export const STOP_MARKER_CONFIG = {
	RAIL: {
		label: "Railway Station",
		icon: "fa-train",
		pin: ["#ffa94d", "#e8590c"],
	},
	BUS: {
		label: "Bus Stop",
		icon: "fa-bus-simple",
		pin: ["#9775fa", "#6741d9"],
	},
	METRO: {
		label: "Metro Station",
		icon: "fa-train-subway",
		pin: ["#38d9a9", "#087f5b"],
	},
	MEETUP: {
		label: "Meetup Point",
		icon: "fa-people-group",
		pin: ["#69db7c", "#2b8a3e"],
	},
	LUNCH: {
		label: "Lunch Stop",
		icon: "fa-utensils",
		pin: ["#ff8787", "#c92a2a"],
	},
	PANDAL: {
		label: "Puja Pandal",
		icon: null, // numbered pin — renders the stop order instead
		pin: ["#74c0fc", "#1864ab"],
	},
	DEFAULT: {
		label: "Transit Point",
		icon: "fa-location-dot",
		pin: ["#adb5bd", "#495057"],
	},
};

// Injects the marker/tooltip/compass styles once (idempotent)
const ensureMapMarkerStyles = () => {
	if (document.getElementById("route-map-marker-styles")) return;
	const style = document.createElement("style");
	style.id = "route-map-marker-styles";
	style.textContent = `
		.custom-map-icon { background: transparent; border: none; }
		.map-pin {
			position: relative; width: 32px; height: 40px; margin: 0; padding: 0;
			display: flex; flex-direction: column; align-items: center;
			box-sizing: border-box;
			transform-origin: 50% 85%;
			transition: transform .18s ease;
		}
		.custom-map-icon:hover .map-pin { transform: scale(1.15); }
		.map-pin .mp-head {
			z-index: 1; width: 28px; height: 28px; border-radius: 50%;
			background: linear-gradient(135deg, var(--c1) 0%, var(--c2) 100%);
			border: 2px solid #ffffff;
			box-shadow: 0 2px 6px rgba(0,0,0,.35), inset 0 -2px 4px rgba(0,0,0,.18);
			display: flex; align-items: center; justify-content: center;
			color: #ffffff; font-size: 12px; line-height: 1;
			box-sizing: border-box;
		}
		.map-pin .mp-num { font-weight: 800; font-size: 11px; letter-spacing: .3px; }
		.map-pin .mp-tip {
			width: 0; height: 0; margin-top: -3px;
			border-left: 6px solid transparent;
			border-right: 6px solid transparent;
			border-top: 9px solid var(--c2);
		}
		.map-pin .mp-shadow {
			position: absolute; bottom: 0; left: 50%;
			transform: translateX(-50%);
			width: 14px; height: 5px; border-radius: 50%;
			background: rgba(0,0,0,.25);
		}
		.map-stop-tooltip {
			background: #1f2933; color: #ffffff; border: none;
			border-radius: 10px; padding: 7px 11px;
			font-size: 12px; line-height: 1.45;
			box-shadow: 0 6px 18px rgba(0,0,0,.28);
		}
		.leaflet-tooltip-top.map-stop-tooltip::before { border-top-color: #1f2933; }

		/* ── Compass rotate control ─────────────────────────────────────── */
		.map-rotate-control {
			display: flex; flex-direction: column; align-items: center; gap: 6px;
			background: transparent;
		}
		.map-rotate-control .mrc-dial {
			position: relative; width: 64px; height: 64px; border-radius: 50%;
			background: radial-gradient(circle at 50% 32%, #ffffff 0%, #e9ecef 100%);
			border: 2px solid rgba(0,0,0,.18);
			box-shadow: 0 2px 8px rgba(0,0,0,.30);
			cursor: grab; touch-action: none; user-select: none;
		}
		.map-rotate-control .mrc-dial:active { cursor: grabbing; }
		.map-rotate-control .mrc-card {
			position: absolute; font-size: 9px; font-weight: 800; line-height: 1;
			color: #868e96; pointer-events: none; font-family: inherit;
		}
		.map-rotate-control .mrc-n { top: 4px; left: 50%; transform: translateX(-50%); color: #c92a2a; }
		.map-rotate-control .mrc-e { right: 5px; top: 50%; transform: translateY(-50%); }
		.map-rotate-control .mrc-s { bottom: 4px; left: 50%; transform: translateX(-50%); }
		.map-rotate-control .mrc-w { left: 5px; top: 50%; transform: translateY(-50%); }
		.map-rotate-control .mrc-needle {
			position: absolute; inset: 12px; pointer-events: none;
			will-change: transform;
		}
		.map-rotate-control .mrc-needle::before {
			content: ""; position: absolute; left: 50%; top: 0;
			transform: translateX(-50%);
			border-left: 5px solid transparent; border-right: 5px solid transparent;
			border-bottom: 14px solid #e03131;
			filter: drop-shadow(0 1px 1px rgba(0,0,0,.25));
		}
		.map-rotate-control .mrc-needle::after {
			content: ""; position: absolute; left: 50%; bottom: 0;
			transform: translateX(-50%);
			border-left: 5px solid transparent; border-right: 5px solid transparent;
			border-top: 14px solid #adb5bd;
			filter: drop-shadow(0 1px 1px rgba(0,0,0,.25));
		}
		.map-rotate-control .mrc-hub {
			position: absolute; left: 50%; top: 50%; width: 10px; height: 10px;
			transform: translate(-50%, -50%); border-radius: 50%;
			background: #fff; border: 2px solid #495057; pointer-events: none;
			box-sizing: border-box;
		}
		.map-rotate-control .mrc-deg {
			font-size: 10px; font-weight: 700; color: #495057; line-height: 1.4;
			background: rgba(255,255,255,.92); border-radius: 999px; padding: 1px 8px;
			box-shadow: 0 1px 4px rgba(0,0,0,.2); pointer-events: none;
			font-variant-numeric: tabular-nums;
		}
		.map-rotate-control .mrc-actions { display: flex; gap: 6px; }
		.map-rotate-control .mrc-btn {
			width: 30px; height: 30px; display: flex; align-items: center;
			justify-content: center; background: #fff; color: #1f2937;
			border: 0; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,.28);
			cursor: pointer; font-size: 13px; padding: 0;
			transition: background .15s ease, transform .15s ease;
		}
		.map-rotate-control .mrc-btn:hover { background: #f1f3f5; transform: translateY(-1px); }
		.map-rotate-control .mrc-btn:active { transform: translateY(0); }

		/* ── Live location blue dot ─────────────────────────────────────── */
		.live-loc-icon { background: transparent; border: none; }
		.live-loc-icon .lld-dot {
			position: absolute; inset: 3px; border-radius: 50%;
			background: #1a73e8; border: 2.5px solid #ffffff;
			box-shadow: 0 0 6px rgba(0,0,0,.4);
			box-sizing: border-box;
		}
		.live-loc-icon .lld-pulse {
			position: absolute; inset: -10px; border-radius: 50%;
			background: rgba(26,115,232,.3);
			animation: lldPulse 2s ease-out infinite;
		}
		@keyframes lldPulse {
			0% { transform: scale(.35); opacity: .9; }
			100% { transform: scale(1.4); opacity: 0; }
		}
	`;
	document.head.appendChild(style);
};

/* Custom compass rotator for leaflet-rotate.
   - Drag around the dial to rotate the map (needle tracks the pointer)
   - ◀ / ▶ buttons rotate in `step` degree increments
   - Reset button snaps back to north-up
   - Stays in sync with shift+wheel / touch gestures via the map "rotate" event */
const addRotateControl = (map, step = 15) => {
	const normalize = (deg) => ((deg % 360) + 360) % 360;

	const control = L.control({ position: "topright" });
	control.onAdd = () => {
		const wrapper = L.DomUtil.create(
			"div",
			"leaflet-control map-rotate-control",
		);

		const dial = L.DomUtil.create("div", "mrc-dial", wrapper);
		dial.title = "Drag to rotate the map";
		dial.setAttribute("role", "slider");
		dial.setAttribute("aria-label", "Map rotation");
		dial.innerHTML = `
			<span class="mrc-card mrc-n">N</span>
			<span class="mrc-card mrc-e">E</span>
			<span class="mrc-card mrc-s">S</span>
			<span class="mrc-card mrc-w">W</span>
			<div class="mrc-needle"></div>
			<div class="mrc-hub"></div>`;

		const degEl = L.DomUtil.create("div", "mrc-deg", wrapper);
		const actions = L.DomUtil.create("div", "mrc-actions", wrapper);

		const needle = dial.querySelector(".mrc-needle");

		const syncCompass = () => {
			const bearing = map.getBearing();
			needle.style.transform = `rotate(${bearing}deg)`;
			degEl.textContent = `${Math.round(normalize(bearing))}°`;
			dial.setAttribute(
				"aria-valuenow",
				String(Math.round(normalize(bearing))),
			);
		};

		map.on("rotate", syncCompass);
		syncCompass();

		const createActionButton = (iconClass, title, onClick) => {
			const btn = L.DomUtil.create("button", "mrc-btn", actions);
			btn.type = "button";
			btn.title = title;
			btn.setAttribute("aria-label", title);
			btn.innerHTML = `<i class="fa-solid ${iconClass}"></i>`;
			L.DomEvent.on(btn, "click", (e) => {
				L.DomEvent.stop(e);
				onClick();
			});
			return btn;
		};

		createActionButton("fa-rotate-left", `Rotate ${step}° left`, () =>
			map.setBearing(map.getBearing() - step),
		);
		createActionButton("fa-arrow-up", "Reset north up", () =>
			map.setBearing(0),
		);
		createActionButton("fa-rotate-right", `Rotate ${step}° right`, () =>
			map.setBearing(map.getBearing() + step),
		);

		// Drag-to-rotate on the dial (needle tracks the pointer exactly)
		let draggingDial = false;
		let startAngle = 0;
		let startBearing = 0;

		const angleFromPointer = (e) => {
			const rect = dial.getBoundingClientRect();
			const dx = e.clientX - (rect.left + rect.width / 2);
			const dy = e.clientY - (rect.top + rect.height / 2);
			return (Math.atan2(dx, -dy) * 180) / Math.PI; // 0 = top, clockwise +
		};

		dial.addEventListener("pointerdown", (e) => {
			e.preventDefault();
			draggingDial = true;
			startAngle = angleFromPointer(e);
			startBearing = map.getBearing();
			dial.setPointerCapture(e.pointerId);
			if (map.dragging) map.dragging.disable();
		});
		dial.addEventListener("pointermove", (e) => {
			if (!draggingDial) return;
			map.setBearing(startBearing + (angleFromPointer(e) - startAngle));
		});
		const stopDialDrag = () => {
			if (!draggingDial) return;
			draggingDial = false;
			if (map.dragging) map.dragging.enable();
		};
		dial.addEventListener("pointerup", stopDialDrag);
		dial.addEventListener("pointercancel", stopDialDrag);

		// Keep the map itself from receiving any of the control's events
		L.DomEvent.disableClickPropagation(wrapper);
		L.DomEvent.disableScrollPropagation(wrapper);
		L.DomEvent.on(wrapper, "pointerdown", L.DomEvent.stopPropagation);

		map.once("unload", () => map.off("rotate", syncCompass));

		return wrapper;
	};
	control.addTo(map);
};

/* Live device location (Google Maps-style blue dot).
   - Crosshair button toggles geolocation watching on/off
   - First fix centers the map on the user; updates then only move the dot
   - Shows a pulsing blue dot + accuracy circle; stops watching on map unload
   NOTE: requires HTTPS (or localhost) and the user's location permission. */
const addLiveLocationControl = (map) => {
	let watching = false;
	let dot = null;
	let halo = null;

	const dotIcon = L.divIcon({
		className: "live-loc-icon",
		html: `<div class="lld-pulse"></div><div class="lld-dot"></div>`,
		iconSize: [22, 22],
		iconAnchor: [11, 11],
	});

	const onLocationFound = (e) => {
		if (!dot) {
			dot = L.marker(e.latlng, {
				icon: dotIcon,
				zIndexOffset: 2000, // always above the other pins
				interactive: false,
			}).addTo(map);
			halo = L.circle(e.latlng, {
				radius: e.accuracy,
				color: "rgba(26,115,232,.35)",
				weight: 1,
				fillColor: "rgba(26,115,232,.12)",
			}).addTo(map);
			map.setView(e.latlng, Math.max(map.getZoom(), 16)); // first fix: jump to user
		} else {
			dot.setLatLng(e.latlng);
			halo.setLatLng(e.latlng).setRadius(e.accuracy);
			// For a "follow mode" that re-centers on every update, also call:
			// map.panTo(e.latlng);
		}
	};

	const onLocationError = (e) => console.warn("Location error:", e.message);

	const control = L.control({ position: "topright" });
	control.onAdd = () => {
		const wrapper = L.DomUtil.create("div", "leaflet-bar leaflet-control");
		const btn = L.DomUtil.create("button", "", wrapper);
		btn.type = "button";
		btn.title = "Show my live location";
		btn.setAttribute("aria-label", "Show my live location");
		btn.setAttribute("aria-pressed", "false");
		Object.assign(btn.style, {
			width: "34px",
			height: "34px",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			background: "#fff",
			color: "#1f2937",
			border: "0",
			borderRadius: "4px",
			cursor: "pointer",
			fontSize: "16px",
		});
		btn.innerHTML = `<i class="fa-solid fa-location-crosshairs" aria-hidden="true"></i>`;

		L.DomEvent.disableClickPropagation(wrapper);
		L.DomEvent.disableScrollPropagation(wrapper);

		L.DomEvent.on(btn, "click", (e) => {
			L.DomEvent.stop(e);
			if (!watching) {
				map.locate({ watch: true, enableHighAccuracy: true });
				btn.style.color = "#1a73e8";
				btn.setAttribute("aria-pressed", "true");
				watching = true;
			} else {
				map.stopLocate();
				if (dot) {
					map.removeLayer(dot);
					dot = null;
				}
				if (halo) {
					map.removeLayer(halo);
					halo = null;
				}
				btn.style.color = "#1f2937";
				btn.setAttribute("aria-pressed", "false");
				watching = false;
			}
		});
		return wrapper;
	};
	control.addTo(map);

	map.on("locationfound", onLocationFound);
	map.on("locationerror", onLocationError);
	map.once("unload", () => {
		map.stopLocate();
		map.off("locationfound", onLocationFound);
		map.off("locationerror", onLocationError);
	});
};

// Builds the teardrop pin (gradient head + tip + ground shadow)
const createPinHtml = (pin, innerContent) => `
	<div class="map-pin" style="--c1:${pin[0]};--c2:${pin[1]};">
		<div class="mp-head">${innerContent}</div>
		<div class="mp-tip"></div>
		<div class="mp-shadow"></div>
	</div>`;

// Popup header: icon chip + place name + category pill
const createPlacePopupHtml = (name, cfg) => `
	<div class="pandal-map-popup">
		<div style="display:flex; align-items:center; gap:10px;">
			<div style="flex:0 0 auto; width:34px; height:34px; border-radius:10px; background:linear-gradient(135deg, ${cfg.pin[0]}, ${cfg.pin[1]}); display:flex; align-items:center; justify-content:center; color:#fff; font-size:15px; box-shadow:0 2px 5px rgba(0,0,0,.25);">
				<i class="fa-solid ${cfg.icon}"></i>
			</div>
			<div style="min-width:0;">
				<div style="font-size:14px; font-weight:700; line-height:1.3;">${name}</div>
				<div style="margin-top:3px; display:inline-block; font-size:10px; font-weight:700; letter-spacing:.4px; text-transform:uppercase; color:${cfg.pin[1]}; background:${cfg.pin[0]}26; padding:2px 8px; border-radius:999px;">${cfg.label}</div>
			</div>
		</div>
	</div>`;

// Hover label shown directly on the map: place name + category
const createTooltipHtml = (name, cfg) => `
	<div style="text-align:center;">
		<strong>${name}</strong><br>
		<span style="color:${cfg.pin[0]}; font-size:10px; font-weight:700; letter-spacing:.4px; text-transform:uppercase;">${cfg.label}</span>
	</div>`;

/* Reverse lookup: gmapsUrl → which Places collection(s) the stop belongs to.
   Supports both "RAIL_STOPS" and "RAIL_STATIONS" naming in commons.js.     */
const buildStopKindLookup = () => {
	const lookup = new Map();
	const register = (kind, collection) => {
		Object.values(collection || {}).forEach((place) => {
			if (place && place.gmapsUrl) {
				const kinds = lookup.get(place.gmapsUrl) || [];
				kinds.push(kind);
				lookup.set(place.gmapsUrl, kinds);
			}
		});
	};
	register("RAIL", Places.RAIL_STOPS ?? Places.RAIL_STATIONS);
	register("BUS", Places.BUS_STOPS);
	register("METRO", Places.METRO_STATIONS);
	return lookup;
};

export function renderMapView(routeData, containerId = "map-view-container") {
	ensureMapMarkerStyles();

	const map = L.map(containerId, {
		rotate: true,
		bearing: 45,
		rotateControl: false, // built-in tri-state control replaced by addRotateControl below
		center: [22.5726, 88.3639], // required initial view (Kolkata)
		zoom: 12,
	});

	L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
		maxZoom: 19,
		attribution:
			'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	}).addTo(map);

	// Custom compass rotator (drag dial / step buttons / reset to north)
	addRotateControl(map);

	// Live device location toggle (Google Maps-style blue dot)
	addLiveLocationControl(map);

	const mapContainer = map.getContainer();
	const originalWidth = mapContainer.style.width;
	const originalHeight = mapContainer.style.height;
	const fullscreenControl = L.control({ position: "topright" });

	fullscreenControl.onAdd = () => {
		const wrapper = L.DomUtil.create("div", "leaflet-bar leaflet-control");
		const button = L.DomUtil.create("button", "", wrapper);
		button.type = "button";
		button.title = "Enter fullscreen";
		button.setAttribute("aria-label", "Enter fullscreen");
		button.setAttribute("aria-pressed", "false");
		Object.assign(button.style, {
			width: "34px",
			height: "34px",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			background: "#fff",
			color: "#1f2937",
			border: "0",
			borderRadius: "4px",
			cursor: "pointer",
			fontSize: "16px",
		});
		const icon = L.DomUtil.create("i", "fa-solid fa-expand", button);
		icon.setAttribute("aria-hidden", "true");

		L.DomEvent.disableClickPropagation(wrapper);
		L.DomEvent.disableScrollPropagation(wrapper);
		L.DomEvent.on(button, "click", async () => {
			try {
				if (document.fullscreenElement === mapContainer) {
					await document.exitFullscreen();
				} else {
					await mapContainer.requestFullscreen();
				}
			} catch (error) {
				console.error("Unable to toggle map fullscreen:", error);
			}
		});

		const syncFullscreen = () => {
			const active = document.fullscreenElement === mapContainer;
			mapContainer.style.width = active ? "100vw" : originalWidth;
			mapContainer.style.height = active ? "100vh" : originalHeight;
			button.title = active ? "Exit fullscreen" : "Enter fullscreen";
			button.setAttribute("aria-label", button.title);
			button.setAttribute("aria-pressed", String(active));
			icon.className = active ? "fa-solid fa-compress" : "fa-solid fa-expand";
			requestAnimationFrame(() => map.invalidateSize());
		};

		document.addEventListener("fullscreenchange", syncFullscreen);
		map.once("unload", () =>
			document.removeEventListener("fullscreenchange", syncFullscreen),
		);
		return wrapper;
	};
	fullscreenControl.addTo(map);

	const markerBounds = [];

	// Utility to safely escape HTML characters
	const safe = (value) =>
		String(value).replace(
			/[&<>"']/g,
			(char) =>
				({
					"&": "&amp;",
					"<": "&lt;",
					">": "&gt;",
					'"': "&quot;",
					"'": "&#39;",
				})[char],
		);

	const addMarker = (
		gmapsUrl,
		iconHtml,
		popupHtml,
		zIndexOffset = 0,
		tooltipHtml = null,
	) => {
		const coords = getPinLocation(gmapsUrl);
		if (coords) {
			const { latitude, longitude } = coords;
			const icon = L.divIcon({
				className: "custom-map-icon",
				html: iconHtml,
				iconSize: [32, 40],
				iconAnchor: [16, 34],
				popupAnchor: [0, -32],
			});

			const marker = L.marker([latitude, longitude], {
				icon,
				zIndexOffset,
				riseOnHover: true,
			}).addTo(map);
			marker.bindPopup(popupHtml, { maxWidth: 300, minWidth: 220 });

			if (tooltipHtml) {
				marker.bindTooltip(tooltipHtml, {
					direction: "top",
					offset: [0, -34],
					className: "map-stop-tooltip",
					opacity: 1,
				});
			}

			markerBounds.push([latitude, longitude]);
		}
	};

	/* ── 1. Process Transit & Meetup Locations ────────────────────────────── */

	const stopKindByUrl = buildStopKindLookup();

	// Decide the kind (RAIL / BUS / METRO) from the Places collection the stop
	// actually belongs to; fall back to the transit-step medium, then DEFAULT.
	const resolveStopKind = (gmapsUrl, kindHint) => {
		const kinds = stopKindByUrl.get(gmapsUrl);
		if (kinds) {
			if (kindHint && kinds.includes(kindHint)) return kindHint;
			return kinds[0];
		}
		return kindHint || "DEFAULT";
	};

	const transitPlaces = new Map();
	const addTransitPlace = (place, kindHint) => {
		if (place && place.gmapsUrl && !transitPlaces.has(place.gmapsUrl)) {
			transitPlaces.set(place.gmapsUrl, {
				name: place.name,
				kind: resolveStopKind(place.gmapsUrl, kindHint),
			});
		}
	};

	if (routeData.meetup?.place) {
		const { name, gmapsUrl } = routeData.meetup.place;
		if (gmapsUrl) transitPlaces.set(gmapsUrl, { name, kind: "MEETUP" });
	}

	if (routeData.transits) {
		routeData.transits.forEach((transit) => {
			transit.steps.forEach((step) => {
				let kindHint = null;
				if (step.medium === TransitMedium.BUS) kindHint = "BUS";
				if (step.medium === TransitMedium.METRO) kindHint = "METRO";
				if (step.medium === TransitMedium.TRAIN) kindHint = "RAIL";

				addTransitPlace(step.src, kindHint);
				addTransitPlace(step.dest, kindHint);
			});
		});
	}

	transitPlaces.forEach((data, gmapsUrl) => {
		const cfg = STOP_MARKER_CONFIG[data.kind] || STOP_MARKER_CONFIG.DEFAULT;

		addMarker(
			gmapsUrl,
			createPinHtml(cfg.pin, `<i class="fa-solid ${cfg.icon}"></i>`),
			createPlacePopupHtml(safe(data.name), cfg),
			0,
			createTooltipHtml(safe(data.name), cfg),
		);
	});

	/* ── 2. Process Lunch Stop ────────────────────────────────────────────── */

	if (routeData.lunchStop) {
		const cfg = STOP_MARKER_CONFIG.LUNCH;
		addMarker(
			routeData.lunchStop.gmapsUrl,
			createPinHtml(cfg.pin, `<i class="fa-solid ${cfg.icon}"></i>`),
			createPlacePopupHtml(safe(routeData.lunchStop.title), cfg),
			500,
			createTooltipHtml(safe(routeData.lunchStop.title), cfg),
		);
	}

	/* ── 3. Process Puja Stops (numbered pins, unchanged popups) ──────────── */

	if (routeData.stops?.length) {
		const LinkTypeIcons = {
			1: "facebook",
			2: "instagram",
			3: "chrome",
			4: "youtube",
			5: "x-twitter",
			6: "phone",
			7: "envelope",
		};

		const pandalCfg = STOP_MARKER_CONFIG.PANDAL;

		routeData.stops.forEach((stop) => {
			const orderText = String(stop.order).padStart(2, "0");

			let linksHtml = "";
			if (stop.links && stop.links.length > 0) {
				const links = stop.links
					.map(({ type, value }) => {
						const href =
							type === 6
								? `tel:${value}`
								: type === 7
									? `mailto:${value}`
									: value;
						const style = type === 6 || type === 7 ? "solid" : "brands";
						return `<a href="${safe(href)}" target="_blank" rel="noopener" style="margin-right:12px; font-size:18px; color:#007bff; text-decoration:none;"><i class="fa-${style} fa-${LinkTypeIcons[type]}"></i></a>`;
					})
					.join("");
				linksHtml = `<div style="margin-top:12px; padding-top:10px; border-top:1px solid #eee;">${links}</div>`;
			}

			// Do NOT use safe() on stop.htmlDesc so bolding and em tags render properly in the popup
			const popupHtml = `
                <div class="pandal-map-popup">
                    <h6 style="margin:0 0 8px 0; font-size:15px;"><strong>${orderText}. ${safe(stop.title)}</strong></h6>
                    <div style="font-size:13px; color:#555; max-height:160px; overflow-y:auto; line-height:1.5;">
                        ${stop.htmlDesc || ""}
                    </div>
                    ${linksHtml}
                </div>`;

			// zIndexOffset: 1000 ensures Puja numbered pins always render on top of transit pins
			addMarker(
				stop.gmapsUrl,
				createPinHtml(
					pandalCfg.pin,
					`<span class="mp-num">${orderText}</span>`,
				),
				popupHtml,
				1000,
				`<strong>${orderText}. ${safe(stop.title)}</strong>`,
			);
		});
	}

	if (markerBounds.length > 0) {
		map.fitBounds(markerBounds, { padding: [40, 40] });
	} else {
		map.setView([22.5726, 88.3639], 12);
	}

	return map;
}

export function register(routeData) {
	let mapInstance = null;
	const mapContainer = document.getElementById("map-view-container");
	const toggleBtn = document.getElementById("toggle-map-btn");
	const routeList = document.querySelector(".route-list");

	toggleBtn?.addEventListener("click", () => {
		if (mapContainer.style.display === "none") {
			mapContainer.style.display = "block";
			routeList.style.display = "none";
			toggleBtn.innerText = "Show List View";

			if (!mapInstance) {
				mapInstance = renderMapView(routeData);
			}

			setTimeout(() => {
				mapInstance?.invalidateSize();
			}, 100);
		} else {
			mapContainer.style.display = "none";
			routeList.style.display = "block";
			toggleBtn.innerText = "Show Map View";
		}
	});
}
