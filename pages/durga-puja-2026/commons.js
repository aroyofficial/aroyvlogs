export const ItemType = {
	PANDAL: 1,
	LUNCH: 2,
	TRANSIT: 3,
};

export const Zone = {
	NORTH: "North Kolkata",
	SOUTH: "South Kolkata",
	EAST: "East Kolkata",
	WEST: "West Kolkata",
	PORT: "Port Area",
	SOUTHWEST: "South West Kolkata",
	CENTRAL: "Central Kolkata",
};

export const Area = {
	BELGACHIA: ["Belgachia", Zone.NORTH],
	TALA: ["Tala", Zone.NORTH],
	MUDIALI: ["Mudiali", Zone.SOUTH],
	RABINDRA_SAROBAR: ["Rabindra Sarobar", Zone.SOUTH],
	BALLYGUNGE: ["Ballygunge", Zone.SOUTH],
	NEW_ALIPORE: ["New Alipore", Zone.SOUTH],
	CHETLA: ["Chetla", Zone.SOUTH],
	ALIPORE: ["Alipore", Zone.SOUTH],
	KALIGHAT: ["Kalighat", Zone.SOUTH],
	HAZRA: ["Hazra", Zone.SOUTH],
	BHOWANIPORE: ["Bhowanipore", Zone.SOUTH],
	BHOWANIPOPRE: ["Bhowanipopre", Zone.SOUTH],
	PARK_STREET: ["Park Street", Zone.CENTRAL],
	COLLEGE_STREET: ["College Street", Zone.CENTRAL],
	BOWBAZAR: ["Bowbazar", Zone.CENTRAL],
	ENTALLY: ["Entally", Zone.CENTRAL],
	BOSEPUKUR: ["Bosepukur", Zone.SOUTH],
	RAJDANGA: ["Rajdanga", Zone.SOUTH],
	SANTOSHPUR: ["Santoshpur", Zone.SOUTH],
	PATULI: ["Patuli", Zone.SOUTH],
	GARIA: ["Garia", Zone.SOUTH],
	NAKTALA: ["Naktala", Zone.SOUTH],
	KUDGHAT: ["Kudghat", Zone.SOUTH],
	PASCHIM_PUTIARY: ["Paschim Putiary", Zone.SOUTH],
	HARIDEVPUR: ["Haridevpur", Zone.SOUTH],
	BEHALA: ["Behala", Zone.SOUTHWEST],
	THAKURPUKUR: ["Thakurpukur", Zone.SOUTH],
};

export const LinkType = {
	FACEBOOK: 1,
	INSTAGRAM: 2,
	WEBSITE: 3,
	YOUTUBE: 4,
	X: 5,
	PHONE: 6,
	EMAIL: 7,
};

export const WALKING_PACE_METERS_PER_MINUTE = 50; // 3 km/h

export const TransitMedium = {
	WALK: 0,
	AUTO: 1,
	BUS: 2,
	TRAIN: 3,
	METRO: 4,
	CAB: 5,
};

export const Places = {
	BUS_STOPS: {
		BALLY_HALT: {
			name: "Bally Halt",
			gmapsUrl:
				"https://www.google.com/maps/place/Bally+Halt+Stand/@22.65278,88.3369251,804m/data=!3m1!1e3!4m14!1m7!3m6!1s0x39f89d23e11303f1:0xde6d8afeb1caf408!2sBally+Halt+Bus+Stop!8m2!3d22.65278!4d88.3395!16s%2Fg%2F11zf6hxkpn!3m5!1s0x39f89d65c9aea4e3:0xf139f4b47a387628!8m2!3d22.6523756!4d88.3411888!16s%2Fg%2F11h6rz93bn!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		DAKSHINESHWAR: {
			name: "Dakshineshwar",
			gmapsUrl:
				"https://www.google.com/maps/place/Dakshineswar/@22.6535562,88.3608603,201m/data=!3m1!1e3!4m10!1m2!2m1!1sdakshineswar+bus+stand!3m6!1s0x39f89d00ca774131:0x495f6e8ecd21345a!8m2!3d22.6535562!4d88.3620512!15sChZkYWtzaGluZXN3YXIgYnVzIHN0YW5kkgEIYnVzX3N0b3DgAQA!16s%2Fg%2F11b7q54s18!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		PAIKPARA: {
			name: "Paikpara",
			gmapsUrl:
				"https://www.google.com/maps/place/Paikpara/@22.612392,88.3749801,804m/data=!3m2!1e3!4b1!4m6!3m5!1s0x39f89d8a1ce403b1:0x9b765751996bb9e9!8m2!3d22.612392!4d88.377555!16s%2Fg%2F1ptxrm21l!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		TALA_POST_OFFICE: {
			name: "Tala Post Office",
			gmapsUrl:
				"https://www.google.com/maps/place/Tala+Post+Office/@22.6059158,88.3744661,177m/data=!3m1!1e3!4m6!3m5!1s0x3a02762679d49381:0x5f5418e1e2837d91!8m2!3d22.6059168!4d88.3743949!16s%2Fg%2F1tj29f0b!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		TOLLYGUNGE_POLICE_STATION: {
			name: "Tollygunge Police Station",
			gmapsUrl:
				"https://www.google.com/maps/place/Tollygunge+P.S./@22.5141026,88.3453757,158m/data=!3m1!1e3!4m12!1m5!3m4!2zMjLCsDMwJzUxLjkiTiA4OMKwMjAnNDYuMiJF!8m2!3d22.514406!4d88.346158!3m5!1s0x3a0270cae1d81e07:0xbba029c5459a46c0!8m2!3d22.5142588!4d88.3458392!16s%2Fg%2F11bymy99ff!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		NEW_ALIPORE_PETROL_PUMP: {
			name: "New Alipore Petrol Pump",
			gmapsUrl:
				"https://www.google.com/maps/place/New+Alipore+Petrol+Pump/@22.5089637,88.3329027,71m/data=!3m1!1e3!4m12!1m5!3m4!2zMjLCsDMwJzMyLjQiTiA4OMKwMTknNTguMSJF!8m2!3d22.508994!4d88.332794!3m5!1s0x3a0270ae1f3b3a1f:0xad38aea6506c853f!8m2!3d22.5085775!4d88.3335009!16s%2Fg%2F11b7pzm0gb!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		BANKIM_MUKHERJEE_SARANI: {
			name: "Bankim Mukherjee Sarani",
			gmapsUrl:
				"https://www.google.com/maps/place/Bankim+Mukherjee+Sarani+-+Army+Camp/@22.5099505,88.3319888,72m/data=!3m1!1e3!4m12!1m5!3m4!2zMjLCsDMwJzM1LjIiTiA4OMKwMTknNTYuNCJF!8m2!3d22.509788!4d88.332329!3m5!1s0x3a0270add9c46a1f:0x36110ede91aa82e6!8m2!3d22.509789!4d88.332329!16s%2Fg%2F11c6_c8ryg!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		CHETLA: {
			name: "Chetla",
			gmapsUrl:
				"https://www.google.com/maps/place/Chetla/@22.5174824,88.3364584,122m/data=!3m1!1e3!4m12!1m5!3m4!2zMjLCsDMxJzAzLjMiTiA4OMKwMjAnMTIuMCJF!8m2!3d22.517572!4d88.336662!3m5!1s0x3a02774cc00e30f7:0x9973bbda1738dc1e!8m2!3d22.517572!4d88.336662!16s%2Fg%2F11b7pz3q71!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		ALIPORE_CHETLA_CROSSING: {
			name: "Alipore Chetla Crossing",
			gmapsUrl:
				"https://www.google.com/maps/place/Alipore+Chetla+Crossing/@22.5179859,88.332985,90m/data=!3m1!1e3!4m12!1m5!3m4!2zMjLCsDMxJzA0LjciTiA4OMKwMTknNTkuMyJF!8m2!3d22.517972!4d88.33313!3m5!1s0x3a0277529ba3889d:0x5a753a463cbb2bcb!8m2!3d22.517856!4d88.333302!16s%2Fg%2F11bymy85vp!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		KEORATALA_SHAMSHAN: {
			name: "Keoratala Shamshan",
			gmapsUrl:
				"https://www.google.com/maps/place/Keoratala+Shamshan/@22.5167306,88.3417102,85m/data=!3m1!1e3!4m12!1m5!3m4!2zMjLCsDMxJzAwLjgiTiA4OMKwMjAnMzAuNCJF!8m2!3d22.516899!4d88.341787!3m5!1s0x3a02774ad86edec7:0x36cb97593a4b3d98!8m2!3d22.5169015!4d88.3417867!16s%2Fg%2F11gbfbx_dv!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		RASHBEHARI_AVENUE_CROSSING: {
			name: "Rashbehari Avenue Crossing",
			gmapsUrl:
				"https://www.google.com/maps/place/S.P.+Mukherjee+Road+%2F+R.B.+Avenue+Crossing/@22.5175479,88.3458279,67m/data=!3m1!1e3!4m12!1m5!3m4!2zMjLCsDMxJzAzLjciTiA4OMKwMjAnNDQuOCJF!8m2!3d22.517695!4d88.345767!3m5!1s0x3a02773527497b0f:0xbbdb51e20b59da07!8m2!3d22.5176996!4d88.345781!16s%2Fg%2F11g__28mb!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		KALIGHAT: {
			name: "Kalighat",
			gmapsUrl:
				"https://www.google.com/maps/place/Kalighat+-+Near+Main+Toron/@22.523751,88.3417395,366m/data=!3m1!1e3!4m12!1m5!3m4!2zMjLCsDMxJzI0LjciTiA4OMKwMjAnMzAuOSJF!8m2!3d22.523526!4d88.341925!3m5!1s0x3a027749c1be4b93:0xdfc2e21ccf95469d!8m2!3d22.523523!4d88.341923!16s%2Fg%2F11byl4qpbd!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		NRS_HOSPITAL: {
			name: "NRS Hospital",
			gmapsUrl:
				"https://www.google.com/maps/place/A.J.C.+Bose+Road+-+NRS+Hospital/@22.5639571,88.3668778,402m/data=!3m1!1e3!4m6!3m5!1s0x3a0276561c799ea3:0xe566b5ffdddb4814!8m2!3d22.563957!4d88.368409!16s%2Fg%2F12hkbq_ks!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		RAMLILA_MAIDAN: {
			name: "Ramlila Maidan",
			gmapsUrl:
				"https://www.google.com/maps/place/Ramlila+Maidan/@22.559633,88.3674661,804m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a0276f9a062f333:0xff9cab9b31b3cd91!8m2!3d22.559633!4d88.370041!16s%2Fg%2F11g8bblzl9!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
	},
	METRO_STATIONS: {
		DAKSHINESHWAR: {
			name: "Dakshineshwar",
			gmapsUrl:
				"https://www.google.com/maps/place/Dakshineswar/@22.6538276,88.3611228,804m/data=!3m2!1e3!4b1!4m6!3m5!1s0x39f89daa1748bbcb:0xa27c675d829f7253!8m2!3d22.6538276!4d88.3636977!16s%2Fg%2F11r1s77q7s!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		BELGACHIA: {
			name: "Belgachia",
			gmapsUrl:
				"https://www.google.com/maps/place/Belgachia/@22.605973,88.3837781,804m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a02761eb2edc24b:0x907a8d18e3d19993!8m2!3d22.605973!4d88.386353!16s%2Fm%2F0gtszc_!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		RABINDRA_SAROBAR: {
			name: "Rabindra Sarobar",
			gmapsUrl:
				"https://www.google.com/maps/place/Rabindra+Sarobor/@22.5078864,88.3429822,805m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a0270c9a7b32055:0x4752ac60f521069!8m2!3d22.5078864!4d88.3455571!16s%2Fm%2F0gtwz05!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		NETAJI_BHAVAN: {
			name: "Netaji Bhavan",
			gmapsUrl:
				"https://www.google.com/maps/place/Netaji+Bhavan/@22.532977,88.3431375,804m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a027738d8f3509f:0x50f16bdb507d7d94!8m2!3d22.532977!4d88.3457124!16s%2Fm%2F0bmfz9v!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		PARK_STREET: {
			name: "Park Street",
			gmapsUrl:
				"https://www.google.com/maps/place/Park+Street/@22.55445,88.3472751,804m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a02770e57b33743:0x76896b81976ccd02!8m2!3d22.55445!4d88.34985!16s%2Fm%2F0gttv70!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		CENTRAL: {
			name: "Central",
			gmapsUrl:
				"https://www.google.com/maps/place/Central/@22.5725237,88.3556674,804m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a0277ac0161c411:0xa1c2fcf3868f35f3!8m2!3d22.5725237!4d88.3582423!16s%2Fm%2F0gtwrz3!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
	},
	RAIL_STATIONS: {
		TALA: {
			name: "Tala",
			gmapsUrl:
				"https://www.google.com/maps/place/Tala/@22.6063823,88.3762971,804m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a0276216235b991:0x36fcc1cfa1da07b8!8m2!3d22.6063823!4d88.378872!16s%2Fg%2F11gk_36m3p!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		SEALDAH: {
			name: "Sealdah",
			gmapsUrl:
				"https://www.google.com/maps/place/Sealdah/@22.567792,88.3684454,804m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a027659c5555555:0xa3968ffa1950bfd0!8m2!3d22.567792!4d88.3710203!16zL20vMDV2MWM5!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		BALLY_HALT: {
			name: "Bally Halt",
			gmapsUrl:
				"https://www.google.com/maps/place/Bally+Halt/@22.6522445,88.3366672,804m/data=!3m2!1e3!4b1!4m6!3m5!1s0x39f89d2407d0b96d:0xbc21f779dc795ff2!8m2!3d22.6522445!4d88.3392421!16s%2Fg%2F1vs1q8hf!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
	},
};

export function getPinLocation(urlString) {
	try {
		const path = new URL(urlString).pathname;
		const latitude = path.match(/!3d(-?\d+(?:\.\d+)?)/)?.[1];
		const longitude = path.match(/!4d(-?\d+(?:\.\d+)?)/)?.[1];

		return latitude && longitude ? { latitude, longitude } : null;
	} catch {
		return null;
	}
}

export function getToiletsUrl(gmapsUrl) {
	const pin = getPinLocation(gmapsUrl);
	return pin
		? `https://www.google.com/maps/search/toilets/@${pin.latitude},${pin.longitude},17z?entry=ttu`
		: "";
}

export function renderPandal(item, routeData) {
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
	const icons = {
		[LinkType.FACEBOOK]: "facebook",
		[LinkType.INSTAGRAM]: "instagram",
		[LinkType.WEBSITE]: "chrome",
		[LinkType.YOUTUBE]: "youtube",
		[LinkType.X]: "x-twitter",
		[LinkType.PHONE]: "phone",
		[LinkType.EMAIL]: "envelope",
	};
	const links = item.links
		.map(({ type, value }) => {
			const href =
				type === LinkType.PHONE
					? `tel:${value}`
					: type === LinkType.EMAIL
						? `mailto:${value}`
						: value;
			const external = type !== LinkType.PHONE && type !== LinkType.EMAIL;
			const style =
				type === LinkType.PHONE || type === LinkType.EMAIL ? "solid" : "brands";
			return `<div class="itinerary-item-fa-btn"><a href="${safe(href)}"${external ? ' target="_blank" rel="noopener"' : ""}><i class="fa-${style} fa-${icons[type]}"></i></a></div>`;
		})
		.join("");
	const linkFooter = links
		? `<div class="itinerary-item-expansion-panel-footer">${links}</div>`
		: "";
	const toiletsUrl = getToiletsUrl(item.gmapsUrl);
	const toiletsLink = toiletsUrl
		? `<a class="map-btn" target="_blank" rel="noopener" href="${safe(toiletsUrl)}">Toilets &#8599;</a>`
		: "";
	const area = `${item.area[0].toUpperCase()} (${item.area[1].toUpperCase()})`;
	const previousStop = routeData.stops.find(
		(stop) => stop.order === item.order - 1,
	);
	const previousTransit = item.isPreviousTransit
		? routeData.transits.find((transit) => transit.index === item.transit)
		: null;
	const lastTransitStep = previousTransit?.steps.at(-1);
	const fromLocation = item.isPreviousTransit
		? lastTransitStep?.dest?.name
		: previousStop?.title;
	const walkingTime = Math.ceil(item.distance / WALKING_PACE_METERS_PER_MINUTE);

	return `<span class="itinerary-item-order">${String(item.order).padStart(2, "0")}</span><div class="itinerary-item pandal" aria-expanded="false"><div class="itinerary-item-body"><div><div class="geo-area">${safe(area)}</div><h3>${safe(item.title)}</h3><p>&#128694; ${safe(item.distance)} m &middot; &#9201;&#65039; ${walkingTime} min${fromLocation ? ` from ${safe(fromLocation)}` : ""}</p></div><div class="route-actions"><a class="map-btn" target="_blank" rel="noopener" href="${safe(item.gmapsUrl)}">Google Maps &#8599;</a>${toiletsLink}</div></div><div class="itinerary-item-expansion-panel" aria-hidden="true"><div><div class="itinerary-item-expansion-panel-body">${item.htmlDesc}</div>${linkFooter}</div></div></div>`;
}

export function renderTransit(transit) {
	const locationLink = (place) =>
		place?.gmapsUrl
			? `<a class="route-location-link" target="_blank" rel="noopener" href="${place.gmapsUrl}">${place.name}</a>`
			: place.name;
	const steps = transit.steps.map((step) => {
		const destination = locationLink(step.dest);
		switch (step.medium) {
			case TransitMedium.WALK: {
				const prefix = step.prefix ? `${step.prefix} ` : "";
				const from = step.fromName ? `from ${step.fromName} to` : "to";
				const duration = Math.ceil(
					step.distance / WALKING_PACE_METERS_PER_MINUTE,
				);
				return `${prefix}&#128694; ${step.distance} m &middot; &#9201;&#65039; ${duration} min ${from} ${destination}`;
			}
			case TransitMedium.BUS:
				return step.src
					? `Take a bus from ${locationLink(step.src)} to ${destination}`
					: `Then take a bus to ${destination}`;
			case TransitMedium.METRO:
				return `take a metro to ${destination}`;
			case TransitMedium.AUTO:
				return `then take ${step.modeLabel || "an auto"} to ${destination}`;
			case TransitMedium.TRAIN:
				return step.src
					? `Take ${step.service || "a train"} from ${locationLink(step.src)} to ${destination}`
					: `Then take ${step.service || "a train"} to ${destination}`;
			default:
				return destination;
		}
	});
	return `<strong>Transfer:</strong> ${steps.join(" &rarr; ")}${transit.note ? ` &middot; ${transit.note}` : ""}.`;
}

export function renderLunch(lunch) {
	const walkingTime = Math.ceil(
		lunch.distance / WALKING_PACE_METERS_PER_MINUTE,
	);
	return `<li class="itinerary-stop lunch-stop-step"><div class="itinerary-item lunch-stop"><div class="itinerary-item-body"><div><div class="geo-area">&#127869; LUNCH</div><h3>${lunch.title}</h3><p>Lunch stop. &#128694; ${lunch.distance} m &middot; &#9201;&#65039; ${walkingTime} min from ${lunch.fromName}.</p></div><div class="route-actions"><a class="map-btn" target="_blank" rel="noopener" href="${lunch.gmapsUrl}">Google Maps &#8599;</a></div></div></div></li>`;
}
