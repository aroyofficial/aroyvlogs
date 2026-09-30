// Add `Places` to your existing commons import if it isn't there already:
import {
	Places,
	TransitMedium,
	getPinLocation,
	getRouteCenter,
} from "./commons.js";

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
	// Skip gracefully when leaflet-rotate isn't loaded for this map — without
	// the plugin setBearing/getBearing don't exist and the dial can't work.
	if (
		!map ||
		typeof map.setBearing !== "function" ||
		typeof map.getBearing !== "function"
	) {
		console.warn(
			"addRotateControl: map has no rotation support " +
				"(is the leaflet-rotate script loaded before map.js?). Skipping dial.",
		);
		return;
	}

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

/* Fullscreen toggle that makes the map container 100% of the screen.
   Restores the original inline width/height on exit. */
const addFullscreenControl = (map, position = "topright") => {
	const mapContainer = map.getContainer();
	const originalWidth = mapContainer.style.width;
	const originalHeight = mapContainer.style.height;
	const fullscreenControl = L.control({ position });

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
};

/**
 * Adds an "Export" button to capture ONLY the tight rectangle defined by
 * the stop coordinates — nothing outside that bounding box.
 *
 * Strategy:
 *  1. Fit map to the stops bounds (no padding) and wait for tiles + moveend.
 *  2. Capture the full map canvas via the screenshoter plugin.
 *  3. Convert the lat/lng corner points to pixel positions and crop a canvas
 *     to exactly that rectangle.
 *  4. Download the cropped PNG and restore the previous view.
 */
const addExportControl = (map, allPoints) => {
	// The plugin registers as L.simpleMapScreenshoter (factory) and
	// L.Control.SimpleMapScreenshoter (class). Check both ways.
	const hasPlugin =
		typeof L.simpleMapScreenshoter === "function" ||
		typeof L.Control?.SimpleMapScreenshoter === "function";

	if (!hasPlugin) {
		console.warn(
			"Export unavailable: leaflet-simple-map-screenshoter not loaded. " +
				'Add <script src="https://cdn.jsdelivr.net/npm/leaflet-simple-map-screenshoter@0.5.0/dist/leaflet-simple-map-screenshoter.js"></script> after leaflet.js.',
		);
		return;
	}

	// Build the tight bounding box from the extreme coordinates of all stops:
	// farthest north (max lat), farthest south (min lat),
	// farthest east (max lng), farthest west (min lng).
	const lats = allPoints.map(([lat]) => lat);
	const lngs = allPoints.map(([, lng]) => lng);
	const minLat = Math.min(...lats);
	const maxLat = Math.max(...lats);
	const minLng = Math.min(...lngs);
	const maxLng = Math.max(...lngs);
	const stopsBounds = L.latLngBounds(
		L.latLng(minLat, minLng), // SW corner
		L.latLng(maxLat, maxLng), // NE corner
	);

	// Pad (px) added around the rectangle both for the zoom and the crop
	const CROP_PADDING = 100;

	const screenshoter = L.simpleMapScreenshoter({
		hidden: true,
		cropImageByInnerWH: true,
		preventDownload: true, // we handle download ourselves after cropping
		hideElementsWithSelectors: [".leaflet-control-container"],
		mimeType: "image/png",
		screenName: "puja-radar",
	}).addTo(map);

	// Fully wait for moveend + all tiles rendered before resolving
	const waitForMapReady = () =>
		new Promise((resolve) => {
			let moveOk = false;
			let tilesOk = false;

			const tryResolve = () => {
				if (moveOk && tilesOk) resolve();
			};

			map.once("moveend", () => {
				moveOk = true;
				// After move ends, wait one more rAF tick so Leaflet repositions panes
				requestAnimationFrame(() => {
					// Now wait for tiles — poll every 150 ms until no tile is loading
					const pollTiles = () => {
						if (!map._loading) {
							tilesOk = true;
							tryResolve();
						} else {
							setTimeout(pollTiles, 150);
						}
					};
					pollTiles();
				});
			});

			// Safety net: resolve after 4 s regardless
			setTimeout(() => {
				moveOk = true;
				tilesOk = true;
				tryResolve();
			}, 4000);
		});

	// After the map has settled at the new view, convert the stopsBounds corners
	// to container pixels, add CROP_PADDING, clamp to the canvas, and crop.
	const cropImage = (base64Image) =>
		new Promise((resolve, reject) => {
			const img = new Image();

			img.onload = () => {
				const mapSize = map.getSize(); // logical px { x, y }
				// Scale factor: captured canvas may be bigger than CSS pixels (retina)
				const sx = img.width / mapSize.x;
				const sy = img.height / mapSize.y;

				// Convert the EXACT bounding-box corners to container (CSS) pixels
				const nwPx = map.latLngToContainerPoint(stopsBounds.getNorthWest());
				const sePx = map.latLngToContainerPoint(stopsBounds.getSouthEast());

				// Apply padding in CSS pixels, then convert to canvas pixels
				const rawX = (nwPx.x - CROP_PADDING) * sx;
				const rawY = (nwPx.y - CROP_PADDING) * sy;
				const rawW = (sePx.x - nwPx.x + CROP_PADDING * 2) * sx;
				const rawH = (sePx.y - nwPx.y + CROP_PADDING * 2) * sy;

				// Clamp so we never read outside the image
				const x = Math.max(0, Math.round(rawX));
				const y = Math.max(0, Math.round(rawY));
				const w = Math.min(img.width - x, Math.round(rawW));
				const h = Math.min(img.height - y, Math.round(rawH));

				console.debug("[export] img size:", img.width, "x", img.height);
				console.debug("[export] mapSize:", mapSize.x, "x", mapSize.y);
				console.debug("[export] scale:", sx, sy);
				console.debug("[export] nwPx:", nwPx, "sePx:", sePx);
				console.debug("[export] crop rect:", { x, y, w, h });

				if (w <= 0 || h <= 0) {
					reject(
						new Error(
							`Crop region is zero/negative (x=${x} y=${y} w=${w} h=${h}). ` +
								"The bounds rectangle may be outside the current viewport.",
						),
					);
					return;
				}

				const canvas = document.createElement("canvas");
				canvas.width = w;
				canvas.height = h;
				canvas.getContext("2d").drawImage(img, x, y, w, h, 0, 0, w, h);
				resolve(canvas.toDataURL("image/png"));
			};

			img.onerror = () =>
				reject(new Error("Failed to decode captured map image."));
			img.src = base64Image;
		});

	const control = L.control({ position: "bottomright" });
	control.onAdd = () => {
		const wrapper = L.DomUtil.create("div", "leaflet-bar leaflet-control");
		const button = L.DomUtil.create("button", "", wrapper);
		button.type = "button";
		button.title = "Export stops map as PNG";
		button.setAttribute("aria-label", "Export stops map as PNG");
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
		button.innerHTML = `<i class="fa-solid fa-camera" aria-hidden="true"></i>`;

		L.DomEvent.disableClickPropagation(wrapper);
		L.DomEvent.disableScrollPropagation(wrapper);

		L.DomEvent.on(button, "click", async (e) => {
			L.DomEvent.stop(e);

			const origColor = button.style.color;
			const origIcon = button.innerHTML;
			button.style.color = "#1a73e8";
			button.innerHTML = `<i class="fa-solid fa-spinner fa-spin" aria-hidden="true"></i>`;
			button.disabled = true;

			// Remember where the user was
			const prevCenter = map.getCenter();
			const prevZoom = map.getZoom();

			try {
				// 1. Fit exactly to the stops bounding box + CROP_PADDING so every
				//    pin is visible and there is guaranteed whitespace around them.
				//    animate:false so moveend fires synchronously on the next tick.
				map.fitBounds(stopsBounds, {
					animate: false,
					paddingTopLeft: [CROP_PADDING, CROP_PADDING],
					paddingBottomRight: [CROP_PADDING, CROP_PADDING],
				});

				// 2. Wait for the map to fully settle (moveend + tiles loaded)
				await waitForMapReady();

				// 3. Capture the entire map viewport as base64 PNG
				const fullImage = await screenshoter.takeScreen("image");

				// 4. Crop to the precise pixel rectangle that maps to stopsBounds
				//    (with CROP_PADDING around it)
				const cropped = await cropImage(fullImage);

				// 5. Download
				const a = document.createElement("a");
				a.download = "puja-radar.png";
				a.href = cropped;
				document.body.appendChild(a);
				a.click();
				document.body.removeChild(a);
			} catch (err) {
				console.error("Map export failed:", err);
			} finally {
				// 6. Restore the previous view
				map.setView(prevCenter, prevZoom, { animate: false });
				button.style.color = origColor;
				button.innerHTML = origIcon;
				button.disabled = false;
			}
		});

		return wrapper;
	};
	control.addTo(map);
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
	const coords = getRouteCenter(routeData);

	const map = L.map(containerId, {
		zoomDelta: 0.1,
		zoomSnap: 0.1,
		wheelPxPerZoomLevel: 120,
		rotate: true,
		bearing: 45,
		rotateControl: false, // built-in tri-state control replaced by addRotateControl below
		center: coords ? [coords.latitude, coords.longitude] : [22.5726, 88.3639], // fallback initial view (Kolkata)
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

	// Fullscreen toggle (expand to 100vw × 100vh and back)
	addFullscreenControl(map);

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
		const pinCoords = getPinLocation(gmapsUrl);
		if (pinCoords) {
			const { latitude, longitude } = pinCoords;
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

/* ══════════════════════════════════════════════════════════════════════════
   PUJA RADAR  —  all days' pandal stops on a single map (#puja-radar)
   ---------------------------------------------------------------------------
   Everything below is self-contained: it does not read from or modify any of
   the helpers/logic above. Only `stops[]` pin locations are plotted.
   Includes the compass rotation dial + fullscreen button on the radar map.
══════════════════════════════════════════════════════════════════════════ */

/* One colour per day — add/adjust freely. Keys are matched case-insensitively
   against the keys of the `data` object passed to showPujaRadar().          */
export const RADAR_DAY_COLORS = {
	chaturthi: { label: "Chaturthi", pin: ["#ffa94d", "#e8590c"] },
	panchami: { label: "Panchami", pin: ["#f783ac", "#a61e4d"] },
	shashthi: { label: "Shashthi", pin: ["#9775fa", "#5f3dc4"] },
	saptami: { label: "Saptami", pin: ["#74c0fc", "#1864ab"] },
	astami: { label: "Astami", pin: ["#38d9a9", "#087f5b"] },
	navami: { label: "Navami", pin: ["#ffd43b", "#e67700"] },
	dashami: { label: "Dashami", pin: ["#ff8787", "#c92a2a"] },
};

const RADAR_FALLBACK_PINS = [
	["#adb5bd", "#495057"],
	["#4dabf7", "#1971c2"],
	["#da77f2", "#862e9c"],
	["#63e6be", "#0ca678"],
];

// Radar-only styles (separate <style> id so it never clashes with the above)
const ensurePujaRadarStyles = () => {
	if (document.getElementById("puja-radar-styles")) return;
	const style = document.createElement("style");
	style.id = "puja-radar-styles";
	style.textContent = `
		.radar-map-icon { background: transparent; border: none; }
		.radar-pin {
			position: relative; width: 30px; height: 38px;
			display: flex; flex-direction: column; align-items: center;
			box-sizing: border-box; transform-origin: 50% 85%;
			transition: transform .18s ease;
		}
		.radar-map-icon:hover .radar-pin { transform: scale(1.18); }
		.radar-pin .rp-head {
			z-index: 1; width: 26px; height: 26px; border-radius: 50%;
			background: linear-gradient(135deg, var(--c1) 0%, var(--c2) 100%);
			border: 2px solid #ffffff; box-sizing: border-box;
			box-shadow: 0 2px 6px rgba(0,0,0,.35), inset 0 -2px 4px rgba(0,0,0,.18);
			display: flex; align-items: center; justify-content: center;
			color: #fff; font-size: 10px; font-weight: 800; line-height: 1;
			font-variant-numeric: tabular-nums;
		}
		.radar-pin .rp-tip {
			width: 0; height: 0; margin-top: -3px;
			border-left: 5px solid transparent; border-right: 5px solid transparent;
			border-top: 9px solid var(--c2);
		}
		.radar-pin .rp-shadow {
			position: absolute; bottom: 0; left: 50%; transform: translateX(-50%);
			width: 13px; height: 4px; border-radius: 50%; background: rgba(0,0,0,.25);
		}
		.radar-tooltip {
			background: #1f2933; color: #fff; border: none; border-radius: 10px;
			padding: 7px 11px; font-size: 12px; line-height: 1.45;
			box-shadow: 0 6px 18px rgba(0,0,0,.28);
		}
		.leaflet-tooltip-top.radar-tooltip::before { border-top-color: #1f2933; }

		.radar-legend {
			background: rgba(255,255,255,.96); border-radius: 10px; padding: 8px 10px;
			box-shadow: 0 4px 14px rgba(0,0,0,.25); font-size: 12px; line-height: 1.4;
			max-height: 260px; overflow-y: auto; min-width: 140px;
		}
		.radar-legend h6 {
			margin: 0 0 6px 0; font-size: 10px; font-weight: 800; letter-spacing: .5px;
			text-transform: uppercase; color: #868e96;
		}
		.radar-legend label {
			display: flex; align-items: center; gap: 7px; cursor: pointer;
			padding: 2px 0; user-select: none; font-weight: 600; color: #343a40;
		}
		.radar-legend input { cursor: pointer; margin: 0; }
		.radar-legend .rl-swatch {
			width: 12px; height: 12px; border-radius: 50%; flex: 0 0 auto;
			border: 1.5px solid #fff; box-shadow: 0 0 0 1px rgba(0,0,0,.15);
		}
		.radar-legend .rl-count { margin-left: auto; font-size: 10px; color: #868e96; font-weight: 700; }
	`;
	document.head.appendChild(style);
};

// Radar marker pin (numbered, coloured per day)
const createRadarPinHtml = (pin, label) => `
	<div class="radar-pin" style="--c1:${pin[0]};--c2:${pin[1]};">
		<div class="rp-head">${label}</div>
		<div class="rp-tip"></div>
		<div class="rp-shadow"></div>
	</div>`;

const radarSafe = (value) =>
	String(value ?? "").replace(
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

// Per-day checkbox legend that toggles each day's layer group on/off
const addRadarLegend = (map, dayLayers) => {
	const legend = L.control({ position: "topright" });
	legend.onAdd = () => {
		const box = L.DomUtil.create("div", "leaflet-control radar-legend");
		box.innerHTML = `<h6>Days</h6>`;

		dayLayers.forEach(({ label, pin, layer, count }) => {
			const row = L.DomUtil.create("label", "", box);
			row.innerHTML = `
				<input type="checkbox" checked />
				<span class="rl-swatch" style="background:linear-gradient(135deg, ${pin[0]}, ${pin[1]});"></span>
				<span>${radarSafe(label)}</span>
				<span class="rl-count">${count}</span>`;
			const checkbox = row.querySelector("input");
			L.DomEvent.on(checkbox, "change", () => {
				if (checkbox.checked) map.addLayer(layer);
				else map.removeLayer(layer);
			});
		});

		L.DomEvent.disableClickPropagation(box);
		L.DomEvent.disableScrollPropagation(box);
		return box;
	};
	legend.addTo(map);
};

// Keeps one radar map per container so repeat calls don't throw "already initialized"
const radarInstances = new Map();

/**
 * Renders every day's pandal stops on one map inside #puja-radar.
 *
 * @param {Object} data  e.g. { chaturthi: routeData, panchami: routeData, ... }
 * @param {string} containerId  defaults to "puja-radar"
 * @returns {L.Map|null} the created map instance
 */
export function showPujaRadar(data, containerId = "puja-radar") {
	ensurePujaRadarStyles();
	ensureMapMarkerStyles(); // compass dial styles live in this stylesheet

	const container = document.getElementById(containerId);
	if (!container) {
		console.warn(`showPujaRadar: #${containerId} not found in the DOM.`);
		return null;
	} else {
		console.log("#puja-radar found");
	}

	// Tear down a previous radar on the same container before rebuilding
	const previous = radarInstances.get(containerId);
	if (previous) {
		previous.remove();
		radarInstances.delete(containerId);
	}

	// leaflet-rotate requires a real center+zoom BEFORE any fitBounds call, so
	// pre-scan every day's stops to compute the map's initial center first.
	const allLatLngs = [];
	Object.entries(data || {}).forEach(([, routeData]) => {
		(routeData?.stops || []).forEach((stop) => {
			const coords = stop ? getPinLocation(stop.gmapsUrl) : null;
			if (!coords) return;
			const lat = Number(coords.latitude); // getPinLocation returns strings
			const lng = Number(coords.longitude);
			if (Number.isFinite(lat) && Number.isFinite(lng)) {
				allLatLngs.push([lat, lng]);
			}
		});
	});

	const initialCenter = allLatLngs.length
		? [
				(Math.min(...allLatLngs.map(([lat]) => lat)) +
					Math.max(...allLatLngs.map(([lat]) => lat))) /
					2,
				(Math.min(...allLatLngs.map(([, lng]) => lng)) +
					Math.max(...allLatLngs.map(([, lng]) => lng))) /
					2,
			]
		: [22.5726, 88.3639];

	const map = L.map(containerId, {
		zoomDelta: 0.1,
		zoomSnap: 0.1,
		wheelPxPerZoomLevel: 120,
		rotate: true,
		bearing: 45,
		rotateControl: false, // custom compass dial added below instead
		center: initialCenter,
		zoom: 12,
	});

	L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
		maxZoom: 19,
		crossOrigin: true, // Required for image capture/canvas exports
		attribution:
			'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	}).addTo(map);

	const allPoints = [];
	const dayLayers = [];
	let fallbackIndex = 0;

	Object.entries(data || {}).forEach(([dayKey, routeData]) => {
		const stops = routeData?.stops || [];
		if (!stops.length) return;

		const preset = RADAR_DAY_COLORS[String(dayKey).toLowerCase()];
		const pin =
			preset?.pin ??
			RADAR_FALLBACK_PINS[fallbackIndex++ % RADAR_FALLBACK_PINS.length];
		const label =
			preset?.label ??
			routeData?.title ??
			dayKey.charAt(0).toUpperCase() + dayKey.slice(1);

		const layer = L.layerGroup();
		let plotted = 0;

		stops.forEach((stop) => {
			const coords = getPinLocation(stop?.gmapsUrl);
			if (!coords) return;

			const latitude = Number(coords.latitude);
			const longitude = Number(coords.longitude);
			if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) return;

			const orderText = String(stop.order ?? "").padStart(2, "0");

			const marker = L.marker([latitude, longitude], {
				icon: L.divIcon({
					className: "radar-map-icon",
					html: createRadarPinHtml(pin, orderText),
					iconSize: [30, 38],
					iconAnchor: [15, 32],
					popupAnchor: [0, -30],
				}),
				riseOnHover: true,
			});

			marker.bindTooltip(
				`<div style="text-align:center;">
					<strong>${orderText}. ${radarSafe(stop.title)}</strong><br>
					<span style="color:${pin[0]}; font-size:10px; font-weight:700; letter-spacing:.4px; text-transform:uppercase;">${radarSafe(label)}</span>
				</div>`,
				{
					direction: "top",
					offset: [0, -32],
					className: "radar-tooltip",
					opacity: 1,
				},
			);

			marker.bindPopup(
				`<div class="pandal-map-popup">
					<div style="font-size:10px; font-weight:800; letter-spacing:.4px; text-transform:uppercase; color:${pin[1]};">${radarSafe(label)}</div>
					<h6 style="margin:4px 0 0 0; font-size:15px;"><strong>${orderText}. ${radarSafe(stop.title)}</strong></h6>
					${stop.area ? `<div style="margin-top:4px; font-size:12px; color:#868e96;">${radarSafe(stop.area).replace(",", ", ")}</div>` : ""}
				</div>`,
				{ maxWidth: 260, minWidth: 180 },
			);

			marker.addTo(layer);
			allPoints.push([latitude, longitude]);
			plotted++;
		});

		if (plotted) {
			layer.addTo(map);
			dayLayers.push({ label, pin, layer, count: plotted });
		}
	});

	if (dayLayers.length) addRadarLegend(map, dayLayers);

	/* Optional controls — added AFTER pins + legend and wrapped individually,
	   so a missing dependency can never remove the pins or the day checkboxes. */
	try {
		addRotateControl(map); // self-skips when leaflet-rotate is not loaded
	} catch (error) {
		console.warn("Puja radar: rotate dial unavailable:", error);
	}
	try {
		addFullscreenControl(map, "bottomright");
	} catch (error) {
		console.warn("Puja radar: fullscreen control unavailable:", error);
	}

	if (allPoints.length) {
		map.fitBounds(allPoints, { padding: [40, 40] });
	}

	// Export button (Screenshot of the stops bounding box)
	// Added after fitBounds so the map has a valid view when the control initializes
	if (allPoints.length) {
		try {
			addExportControl(map, allPoints);
		} catch (error) {
			console.warn("Puja radar: export control unavailable:", error);
		}
	}

	// Containers that start hidden need a size recalc once they're visible
	setTimeout(() => map.invalidateSize(), 100);

	radarInstances.set(containerId, map);
	return map;
}
