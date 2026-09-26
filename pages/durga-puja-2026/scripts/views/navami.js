import { Area, ItemType, LinkType, Places, TransitMedium } from "../commons.js";

export const navami = {
	title: "Navami",
	dateLabel: "20 OCTOBER · TUESDAY",
	meetup: {
		time: "7:30 AM",
		place: Places.BUS_STOPS.BALLY_HALT,
	},
	lunchStop: {
		type: ItemType.LUNCH,
		title: "Aura 78",
		distance: 0,
		description: "Lunch stop. Then continue towards Laketown.",
		options: [
			{
				title: "Google Maps ↗",
				gmapsUrl: "https://maps.app.goo.gl/dvsDYd2YNraB1XD5A",
			},
		],
		gmapsUrl: "https://maps.app.goo.gl/dvsDYd2YNraB1XD5A",
	},
	stops: [
		{
			order: 1,
			type: ItemType.PANDAL,
			area: Area.DHAKURIA,
			title: "Babubagan",
			distance: 500,
			gmapsUrl: "https://maps.app.goo.gl/55iT2wCF17BtKBP7A",
			htmlDesc:
				"The 2026 preparations have begun with a\n\t\t\t\t\t\t\t\t\t\t<strong>renewed organising committee</strong>, following\n\t\t\t\t\t\t\t\t\t\tchanges in the club's management. The Puja has a\n\t\t\t\t\t\t\t\t\t\tlong-standing reputation for artistic and heritage-inspired\n\t\t\t\t\t\t\t\t\t\tpresentations, but a reliable\n\t\t\t\t\t\t\t\t\t\t<strong>2026 theme and artist announcement is still\n\t\t\t\t\t\t\t\t\t\t\tawaited</strong>.",
			links: [],
			transit: 0,
			isPreviousTransit: true,
		},
		{
			order: 2,
			type: ItemType.PANDAL,
			area: Area.SELIMPUR,
			title: "Selimpur Palli Sarbojanin",
			distance: 450,
			gmapsUrl: "https://maps.app.goo.gl/3aPZuV8HkvqJqzMs7",
			htmlDesc:
				"A well-established South Kolkata community puja known for\n\t\t\t\t\t\t\t\t\t\tits traditional and artistic presentations, the 2026\n\t\t\t\t\t\t\t\t\t\tcelebration features the theme\n\t\t\t\t\t\t\t\t\t\t<strong>'Oblation' (নৈবেদ্য)</strong>. The scenography is\n\t\t\t\t\t\t\t\t\t\tbrought to life by a creative team including\n\t\t\t\t\t\t\t\t\t\t<strong>Souvik Kali, Parimal Paul, Soumen Haldar, Biswajit Saha,\n\t\t\t\t\t\t\t\t\t\t\tJayanta Bose, Anubhab Rakshit, and Arijit Lakshman</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/selimpurpalli",
				},
				{ type: LinkType.PHONE, value: "9830518553" },
				{ type: LinkType.EMAIL, value: "selimpur.palli@gmail.com" },
			],
		},
		{
			order: 3,
			type: ItemType.PANDAL,
			area: Area.JODHPUR_PARK,
			title: "Jodhpur Park",
			distance: 400,
			gmapsUrl: "https://maps.app.goo.gl/YkzKHwS1HN7wu9Ry5",
			htmlDesc:
				"Celebrating its <strong>75th year</strong>, the 2026\n\t\t\t\t\t\t\t\t\t\tpresentation is titled\n\t\t\t\t\t\t\t\t\t\t<strong>'Guptayan' (গুপ্তায়ন)</strong>, exploring the idea\n\t\t\t\t\t\t\t\t\t\tof something hidden or concealed beneath the surface.\n\t\t\t\t\t\t\t\t\t\t<strong>Biman Saha</strong> is credited with the planning\n\t\t\t\t\t\t\t\t\t\tand creation, with intriguing visual elements including a\n\t\t\t\t\t\t\t\t\t\tchild, Durga's mask, lotus stems and an old Kolkata tram.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/groups/267919999925306",
				},
				{ type: LinkType.PHONE, value: "9831351618" },
				{ type: LinkType.EMAIL, value: "jpsuc10@gmail.com" },
			],
		},
		{
			order: 4,
			type: ItemType.PANDAL,
			area: Area.JODHPUR,
			title: "95 Palli Association",
			distance: 850,
			gmapsUrl: "https://maps.app.goo.gl/82bABgX6bcHuQ5QcA",
			htmlDesc:
				"A prominent South Kolkata Puja that continues its\n\t\t\t\t\t\t\t\t\t\tpreparations for the 2026 festive season amid organisational\n\t\t\t\t\t\t\t\t\t\tand funding uncertainties affecting several large\n\t\t\t\t\t\t\t\t\t\tcommittees. A reliable final\n\t\t\t\t\t\t\t\t\t\t<strong>2026 theme and artist credit has not yet been\n\t\t\t\t\t\t\t\t\t\t\tconfirmed</strong>, so no older theme information is being reused.",
			links: [],
			transit: 1,
		},
		{
			order: 5,
			type: ItemType.PANDAL,
			area: Area.JADAVPUR,
			title: "Purbachal Shakti Sangha",
			distance: 450,
			gmapsUrl: "https://maps.app.goo.gl/t4PMYr17hLv9oZvt9",
			htmlDesc:
				"Celebrating its <strong>18th year</strong>, the\n\t\t\t\t\t\t\t\t\t\t<strong>final theme is not confirmed yet</strong>. Artist\n\t\t\t\t\t\t\t\t\t\t<strong>Tapas Dutta</strong> will take care of the artistic\n\t\t\t\t\t\t\t\t\t\twork this year.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/purbachalshaktisangha.org",
				},
			],
			transit: 3,
			lunch: true,
		},
		{
			order: 6,
			type: ItemType.PANDAL,
			area: Area.LAKETOWN,
			title: "Sree Bhumi",
			distance: 550,
			gmapsUrl: "https://maps.app.goo.gl/gJKGgSWYnejHqkd39",
			htmlDesc:
				"The 2026 presentation recreates the grandeur of Jaipur's\n\t\t\t\t\t\t\t\t\t\ticonic <strong>Hawa Mahal</strong>. The idol is being\n\t\t\t\t\t\t\t\t\t\tcreated by <strong>Pradip Rudra Pal</strong>, while\n\t\t\t\t\t\t\t\t\t\t<strong>Gauri Decorators</strong> is handling the pandal\n\t\t\t\t\t\t\t\t\t\texecution. The architectural recreation is the central\n\t\t\t\t\t\t\t\t\t\tattraction of this year's presentation.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/sreebhumisportingclubofficial",
				},
				{
					type: LinkType.INSTAGRAM,
					value: "https://www.instagram.com/sreebhumisportingclub",
				},
				{
					type: LinkType.YOUTUBE,
					value: "https://www.youtube.com/@SreeBhumiSportingClub",
				},
				{ type: LinkType.EMAIL, value: "sreebhumisportingclub@gmail.com" },
			],
		},
		{
			order: 7,
			type: ItemType.PANDAL,
			area: Area.LAKETOWN,
			title: "Natunpally Pradeep Sangha",
			distance: 1000,
			gmapsUrl: "https://maps.app.goo.gl/VKSvh7cpo8FzBQQD8",
			htmlDesc:
				"Celebrating its <strong>46th year</strong>, the 2026\n\t\t\t\t\t\t\t\t\t\tpresentation features the theme\n\t\t\t\t\t\t\t\t\t\t<strong>'Kurukshetra' (কুরুক্ষেত্র)</strong>. The artistic\n\t\t\t\t\t\t\t\t\t\texecution is led by <strong>Arindam and Tanushree</strong>,\n\t\t\t\t\t\t\t\t\t\twith pandal decoration by\n\t\t\t\t\t\t\t\t\t\t<strong>Maa Manasa Decorators</strong> and lighting by\n\t\t\t\t\t\t\t\t\t\t<strong>Ujjwal Electric</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/profile.php?id=61567070638305",
				},
				{ type: LinkType.PHONE, value: "7003096628" },
				{
					type: LinkType.EMAIL,
					value: "natunpallypradeepsangha2024@gmail.com",
				},
			],
		},
		{
			order: 8,
			type: ItemType.PANDAL,
			area: Area.LAKETOWN,
			title: "Lake Town Adhibasi Brindo",
			distance: 1000,
			gmapsUrl: "https://maps.app.goo.gl/XuMfPCdrWDDLepje8",
			htmlDesc:
				"Known for its ambitious conceptual installations and\n\t\t\t\t\t\t\t\t\t\tcollaborations with prominent artists over the years. For\n\t\t\t\t\t\t\t\t\t\t<strong>2026</strong>, however, a sufficiently reliable\n\t\t\t\t\t\t\t\t\t\tfinal theme or artist announcement has not been established,\n\t\t\t\t\t\t\t\t\t\tso historical themes and artist credits have not been\n\t\t\t\t\t\t\t\t\t\tcarried forward.",
			links: [],
			transit: 4,
		},
		{
			order: 9,
			type: ItemType.PANDAL,
			area: Area.BELIAGHATA,
			title: "Beliaghata 33 Palli",
			distance: 200,
			gmapsUrl: "https://maps.app.goo.gl/R7a4Caj6ZJNtawiM6",
			htmlDesc:
				"Celebrating its <strong>25th year in 2026</strong>, the Puja\n\t\t\t\t\t\t\t\t\t\tcontinues its community celebrations in Beliaghata. A\n\t\t\t\t\t\t\t\t\t\treliable final\n\t\t\t\t\t\t\t\t\t\t<strong>2026 theme and artist announcement is still\n\t\t\t\t\t\t\t\t\t\t\tawaited</strong>, so previous editions' creative concepts have not been\n\t\t\t\t\t\t\t\t\t\tpresented as current information.",
			links: [],
		},
		{
			order: 10,
			type: ItemType.PANDAL,
			area: Area.BELIAGHATA,
			title: "Sandhani Club",
			distance: 240,
			gmapsUrl: "https://maps.app.goo.gl/ENkJRd1kpfGu47SR6",
			htmlDesc:
				"A Beliaghata community Puja with a blend of\n\t\t\t\t\t\t\t\t\t\t<strong>traditional character and artistic craftsmanship</strong>. Current 2026 information confirms preparations, but a\n\t\t\t\t\t\t\t\t\t\treliable named theme or artist has not yet been established.",
			links: [],
			transit: 5,
		},
		{
			order: 11,
			type: ItemType.PANDAL,
			area: Area.SALT_LAKE,
			title: "IB Block",
			distance: 850,
			gmapsUrl: "https://maps.app.goo.gl/iMJaEnYPtzVXiYuh9",
			htmlDesc:
				"An established Salt Lake Puja that is preparing for the 2026\n\t\t\t\t\t\t\t\t\t\tfestivities amid the funding and organisational challenges\n\t\t\t\t\t\t\t\t\t\taffecting several committees. The current information\n\t\t\t\t\t\t\t\t\t\tindicates that the\n\t\t\t\t\t\t\t\t\t\t<strong>2026 theme is still to be announced</strong>, so no\n\t\t\t\t\t\t\t\t\t\tprevious year's theme is being reused.",
			links: [],
			transit: 6,
		},
		{
			order: 12,
			type: ItemType.PANDAL,
			area: Area.SALT_LAKE,
			title: "FD Block",
			distance: 650,
			gmapsUrl: "https://maps.app.goo.gl/QwJnY2D2dQUWtZEA7",
			htmlDesc:
				"The 2026 presentation is titled\n\t\t\t\t\t\t\t\t\t\t<strong>&ldquo;Bindu&rdquo; (বিন্দু)</strong>, with\n\t\t\t\t\t\t\t\t\t\t<strong>Prashanta Pal</strong> as the artist. The theme was\n\t\t\t\t\t\t\t\t\t\tannounced during the committee's early 2026 preparations,\n\t\t\t\t\t\t\t\t\t\tmaking this one of Salt Lake's confirmed creative\n\t\t\t\t\t\t\t\t\t\tpresentations for the year.",
			links: [],
		},
		{
			order: 13,
			type: ItemType.PANDAL,
			area: Area.SALT_LAKE,
			title: "EC Block",
			distance: 500,
			gmapsUrl: "https://maps.app.goo.gl/cVsdyvEDeJ9vPwSe9",
			htmlDesc:
				"Celebrating its <strong>50th year</strong>, the Puja is\n\t\t\t\t\t\t\t\t\t\ttaking an\n\t\t\t\t\t\t\t\t\t\t<strong>epic-inspired creative direction</strong> in 2026,\n\t\t\t\t\t\t\t\t\t\twith <strong>Samrat Bhattacharjee</strong> involved as the\n\t\t\t\t\t\t\t\t\t\ttheme artist. The final named theme has not been reliably\n\t\t\t\t\t\t\t\t\t\tconfirmed, so the description avoids assigning an unverified\n\t\t\t\t\t\t\t\t\t\ttitle.",
			links: [],
			transit: 7,
		},
		{
			order: 14,
			type: ItemType.PANDAL,
			area: Area.SALT_LAKE,
			title: "AF Block",
			distance: 1300,
			gmapsUrl: "https://maps.app.goo.gl/SbTbShnAx2ykLVzp9",
			htmlDesc:
				"An established Salt Lake community Puja. A reliable\n\t\t\t\t\t\t\t\t\t\t<strong>2026 theme or artist announcement has not yet been\n\t\t\t\t\t\t\t\t\t\t\tfound</strong>, so older creative concepts have deliberately not been\n\t\t\t\t\t\t\t\t\t\tcarried forward.",
			links: [],
			transit: 8,
		},
		{
			order: 15,
			type: ItemType.PANDAL,
			area: Area.NEWTOWN,
			title: "Newtown Sarbojonin",
			distance: 700,
			gmapsUrl: "https://maps.app.goo.gl/Lpg8ZHK3iRdjMLr87",
			htmlDesc:
				"The 2026 presentation is titled\n\t\t\t\t\t\t\t\t\t\t<strong>&ldquo;Padma-bhushan&rdquo;</strong>, with\n\t\t\t\t\t\t\t\t\t\t<strong>Rintu Das</strong> leading the artistic work. The\n\t\t\t\t\t\t\t\t\t\tlotus forms the central visual idea, with water, air, lotus\n\t\t\t\t\t\t\t\t\t\tbuds and beehive-inspired elements incorporated into the\n\t\t\t\t\t\t\t\t\t\tinstallation. Five boats from Balagarh are being transformed\n\t\t\t\t\t\t\t\t\t\tinto lotus-petal forms, with the largest rising to around\n\t\t\t\t\t\t\t\t\t\t<strong>45 feet</strong>.",
			links: [],
			transit: 9,
		},
		{
			order: 16,
			type: ItemType.PANDAL,
			area: Area.DUM_DUM_PARK,
			title: "Dum Dum Park Yubak Brinda",
			distance: 350,
			gmapsUrl: "https://maps.app.goo.gl/hukCxwu5YcUxVXEW6",
			htmlDesc:
				"Current 2026 reporting points towards a\n\t\t\t\t\t\t\t\t\t\t<strong>Santhal village-inspired presentation</strong>,\n\t\t\t\t\t\t\t\t\t\tcelebrating elements of Santhal culture and artistic\n\t\t\t\t\t\t\t\t\t\ttraditions. However, available sources contain conflicting\n\t\t\t\t\t\t\t\t\t\tinformation about the Puja's edition history, so these\n\t\t\t\t\t\t\t\t\t\tcreative details should be treated as\n\t\t\t\t\t\t\t\t\t\t<strong>provisional until independently corroborated</strong>.",
			links: [],
		},
		{
			order: 17,
			type: ItemType.PANDAL,
			area: Area.DUM_DUM_PARK,
			title: "Dum Dum Park Sarbojanin",
			distance: 650,
			gmapsUrl: "https://maps.app.goo.gl/cqpgGrv7JdncZ8N46",
			htmlDesc:
				"The 2026 presentation is described in current Puja listings\n\t\t\t\t\t\t\t\t\t\tas having a\n\t\t\t\t\t\t\t\t\t\t<strong>traditional/Sabeki Ek-Chala character</strong>. A\n\t\t\t\t\t\t\t\t\t\treliable named theme or artist has not yet been confirmed,\n\t\t\t\t\t\t\t\t\t\tso no older creative information is being presented as 2026\n\t\t\t\t\t\t\t\t\t\tfact.",
			links: [],
		},
		{
			order: 18,
			type: ItemType.PANDAL,
			area: Area.DUM_DUM_PARK,
			title: "Dum Dum Park Bharat Chakra",
			distance: 350,
			gmapsUrl: "https://maps.app.goo.gl/ruhfwd8fVsgL3DrW6",
			htmlDesc:
				"Celebrating its <strong>26th year</strong>, the 2026\n\t\t\t\t\t\t\t\t\t\tpresentation places emphasis on\n\t\t\t\t\t\t\t\t\t\t<strong>heritage, community and contemporary artistic\n\t\t\t\t\t\t\t\t\t\t\texpression</strong>. The committee's 2026 banner and Khuti Puja have already\n\t\t\t\t\t\t\t\t\t\tbeen publicised, although a formal named theme has not been\n\t\t\t\t\t\t\t\t\t\treliably established.",
			links: [],
		},
		{
			order: 19,
			type: ItemType.PANDAL,
			area: Area.DUM_DUM_PARK,
			title: "Dum Dum Park Tarun Dal",
			distance: 450,
			gmapsUrl: "https://maps.app.goo.gl/FGzBFJF5hHrojKap8",
			htmlDesc:
				"A long-running Dum Dum Park community Puja with a history of\n\t\t\t\t\t\t\t\t\t\tchanging artistic presentations. For <strong>2026</strong>,\n\t\t\t\t\t\t\t\t\t\tno sufficiently reliable final theme or artist announcement\n\t\t\t\t\t\t\t\t\t\thas been found yet. This is kept separate from other nearby\n\t\t\t\t\t\t\t\t\t\tTarun Sangha committees to avoid mixing their themes.",
			links: [],
		},
		{
			order: 20,
			type: ItemType.PANDAL,
			area: Area.DUM_DUM,
			title: "Dakshinpara",
			distance: 500,
			gmapsUrl: "https://maps.app.goo.gl/ftBtKRetBS6MWTEg6",
			htmlDesc:
				"A long-established Dum Dum Park-area Puja with a substantial\n\t\t\t\t\t\t\t\t\t\thistory of artistic and socially conscious presentations.\n\t\t\t\t\t\t\t\t\t\tThe committee's current 2026 material does not yet provide a\n\t\t\t\t\t\t\t\t\t\treliable final theme or artist announcement, so previous\n\t\t\t\t\t\t\t\t\t\tconcepts have not been carried forward.",
			links: [],
		},
		{
			order: 21,
			type: ItemType.PANDAL,
			area: Area.BAGUIATI,
			title: "Arjunpur Amra Sabai Club",
			distance: 1500,
			gmapsUrl: "https://maps.app.goo.gl/Mv2PmuSnuYQftv4P8",
			htmlDesc:
				"Known for ambitious conceptual and socially themed\n\t\t\t\t\t\t\t\t\t\tinstallations in previous years. For <strong>2026</strong>,\n\t\t\t\t\t\t\t\t\t\tthe official theme has\n\t\t\t\t\t\t\t\t\t\t<strong>not yet been reliably announced</strong>, so older\n\t\t\t\t\t\t\t\t\t\tthemes such as <em>Anyo-Desh</em> and\n\t\t\t\t\t\t\t\t\t\t<em>Ganadebata</em> are intentionally excluded.",
			links: [],
		},
	],
	transits: [
		{
			index: 0,
			steps: [
				{
					order: 1,
					medium: TransitMedium.TRAIN,
					src: Places.RAIL_STATIONS.BALLY_HALT,
					dest: Places.RAIL_STATIONS.SEALDAH,
				},
				{
					order: 2,
					medium: TransitMedium.TRAIN,
					dest: Places.RAIL_STATIONS.DHAKURIA,
				},
			],
		},
		{
			index: 1,
			steps: [
				{
					order: 1,
					medium: TransitMedium.WALK,
					distance: 850,
					dest: Places.BUS_STOPS.EDF,
				},
				{
					order: 2,
					medium: TransitMedium.BUS,
					dest: Places.BUS_STOPS.SITALA_MANDIR_NASKARPARA,
				},
			],
		},
		{
			index: 2,
			steps: [
				{
					order: 1,
					medium: TransitMedium.WALK,
					distance: 450,
					dest: Places.BUS_STOPS.SITALA_MANDIR_NASKARPARA,
				},
				{
					order: 2,
					medium: TransitMedium.BUS,
					dest: Places.BUS_STOPS.SELIMPUR,
				},
				{
					order: 3,
					medium: TransitMedium.WALK,
					distance: 600,
					dest: Places.RAIL_STATIONS.DHAKURIA,
				},
				{
					order: 4,
					medium: TransitMedium.TRAIN,
					dest: Places.RAIL_STATIONS.SEALDAH,
				},
				{
					order: 5,
					medium: TransitMedium.TRAIN,
					dest: Places.RAIL_STATIONS.BIDHANNAGAR_ROAD,
				},
			],
		},
		{
			index: 3,
			steps: [
				{
					order: 1,
					medium: TransitMedium.BUS,
					dest: Places.BUS_STOPS.LAKETOWN,
				},
			],
		},
		{
			index: 4,
			steps: [
				{
					order: 1,
					medium: TransitMedium.WALK,
					distance: 750,
					dest: Places.BUS_STOPS.LAKETOWN_FOOTBRIDGE,
				},
				{
					order: 2,
					medium: TransitMedium.BUS,
					dest: Places.BUS_STOPS.PHOOLBAGAN_KALIMANDIR,
				},
			],
		},
		{
			index: 5,
			steps: [
				{
					order: 1,
					medium: TransitMedium.WALK,
					distance: 280,
					dest: Places.BUS_STOPS.CIT_MORE,
				},
				{
					order: 2,
					medium: TransitMedium.BUS,
					dest: Places.BUS_STOPS.NICCO_PARK,
				},
			],
		},
		{
			index: 6,
			steps: [
				{
					order: 1,
					medium: TransitMedium.WALK,
					distance: 350,
					dest: Places.BUS_STOPS.BIDHANNAGAR_SOUTH_POLICE_STATION,
				},
				{
					order: 2,
					medium: TransitMedium.BUS,
					dest: Places.BUS_STOPS.LABONY,
				},
			],
		},
		{
			index: 7,
			steps: [
				{
					order: 1,
					medium: TransitMedium.WALK,
					distance: 350,
					dest: Places.BUS_STOPS.CITY_CENTER,
				},
				{
					order: 2,
					medium: TransitMedium.METRO,
					dest: Places.P_CITY_CENTER,
				},
			],
		},
		{
			index: 8,
			steps: [
				{
					order: 1,
					medium: TransitMedium.WALK,
					distance: 1200,
					dest: Places.BUS_STOPS.TECHNOPOLIS,
				},
				{
					order: 2,
					medium: TransitMedium.BUS,
					dest: Places.BUS_STOPS.NEWTOWN_BUS_TERMINUS,
				},
			],
		},
		{
			index: 9,
			steps: [
				{
					order: 1,
					medium: TransitMedium.CAB,
					src: Places.BUS_STOPS.NEWTOWN_AXIS_MALL,
					dest: Places.BUS_STOPS.DUM_DUM_PARK,
				},
			],
		},
	],
};
