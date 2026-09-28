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
		distance: 200,
		fromName: "Bidhannagar Road",
		gmapsUrl:
			"https://www.google.com/maps/place/AURA+78/@22.592859,88.3878174,402m/data=!3m1!1e3!4m6!3m5!1s0x3a02770f5becee53:0xc41aaf9dc97692c1!8m2!3d22.592859!4d88.3901992!16s%2Fg%2F11xt3cd790!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
		transit: 3,
	},
	stops: [
		{
			order: 1,
			type: ItemType.PANDAL,
			area: Area.DHAKURIA,
			title: "Dhakuria Sarbojonin",
			distance: 250,
			gmapsUrl:
				"https://www.google.com/maps/place/Dhakuria+Sarbojanin+Durgotsab/@22.5104435,88.3715577,188m/data=!3m1!1e3!4m6!3m5!1s0x3a02718120e2a339:0xcdac53775abc2f33!8m2!3d22.510483!4d88.3719863!16s%2Fg%2F11h578mxn2!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc:
				"Celebrating its <strong>97th year</strong>, the 2026 presentation for Dhakuria Sarbojonin features the theme <strong>'Abhyudoy - The Emergence' (অভ্যুদয় - দ্য এমারজেন্স)</strong>. The presentation features direction (Drishyo Kothon) by <strong>Rittwik Chakraborty and Parimal Paul</strong>, art assistance (Shilpo Sohayota) by <strong>Majuli Ganguly and Poushali Sarkar</strong>, ambience (Aboho) by <strong>Aheli Sarkar</strong>, pandal decoration (Mondop Sojja) by <strong>Arun Manna and Kamal Samanta</strong>, and lighting design (Alok Sojja) by <strong>Biswajit Saha</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/dhakuriasarbojanindurgotsab",
				},
				{
					type: LinkType.PHONE,
					value: "7980365449",
				},
				{
					type: LinkType.EMAIL,
					value: "dhakuriasarbojanindurgotsab@gmail.com",
				},
			],
			transit: 0,
			isPreviousTransit: true,
		},
		{
			order: 2,
			type: ItemType.PANDAL,
			area: Area.DHAKURIA,
			title: "Babubagan",
			distance: 550,
			gmapsUrl:
				"https://www.google.com/maps/place/Babubagan+Durgotsav/@22.5079953,88.3682394,75m/data=!3m1!1e3!4m6!3m5!1s0x3a027114b0cecd65:0xaa6dbaf7c2e3831b!8m2!3d22.5079875!4d88.3685745!16s%2Fg%2F11gvzf1dns!5m1!1e1?entry=tts&g_ep=EgoyMDI2MDgxOS4wIPu8ASoASAFQAw%3D%3D&skid=7f501410-3b5c-4982-915c-d83eb65de7f3",
			htmlDesc:
				"The 2026 preparations have begun with a\n\t\t\t\t\t\t\t\t\t\t<strong>renewed organising committee</strong>, following\n\t\t\t\t\t\t\t\t\t\tchanges in the club's management. The Puja has a\n\t\t\t\t\t\t\t\t\t\tlong-standing reputation for artistic and heritage-inspired\n\t\t\t\t\t\t\t\t\t\tpresentations, but a reliable\n\t\t\t\t\t\t\t\t\t\t<strong>2026 theme and artist announcement is still\n\t\t\t\t\t\t\t\t\t\t\tawaited</strong>.",
			links: [],
		},
		{
			order: 3,
			type: ItemType.PANDAL,
			area: Area.SELIMPUR,
			title: "Selimpur Pally Sarbojanin",
			distance: 450,
			gmapsUrl:
				"https://www.google.com/maps/place/Selimpur+Pally+Sarbojanin/@22.5050732,88.3685851,402m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a027100489ec26f:0x43d40977b83fb9fa!8m2!3d22.5050732!4d88.3685851!16s%2Fg%2F11x_gsg5p8!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
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
			order: 4,
			type: ItemType.PANDAL,
			area: Area.JODHPUR_PARK,
			title: "Jodhpur Park",
			distance: 400,
			gmapsUrl:
				"https://www.google.com/maps/place/Jodhpur+Park/@22.5047417,88.3632812,402m/data=!3m1!1e3!4m6!3m5!1s0x3a02712888d93c51:0x974f12ca733f0c93!8m2!3d22.5045066!4d88.3656973!16s%2Fg%2F1w15xvv2!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
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
			order: 5,
			type: ItemType.PANDAL,
			area: Area.JODHPUR_PARK,
			title: "95 Pally Association",
			distance: 850,
			gmapsUrl:
				"https://www.google.com/maps/place/95+Pally+Association/@22.508025,88.3623372,201m/data=!3m1!1e3!4m6!3m5!1s0x3a027129d8c8c381:0xe59f767b26bfbefa!8m2!3d22.508235!4d88.3627602!16s%2Fg%2F11ckqs8spm!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc:
				"A prominent South Kolkata Puja that continues its\n\t\t\t\t\t\t\t\t\t\tpreparations for the 2026 festive season amid organisational\n\t\t\t\t\t\t\t\t\t\tand funding uncertainties affecting several large\n\t\t\t\t\t\t\t\t\t\tcommittees. A reliable final\n\t\t\t\t\t\t\t\t\t\t<strong>2026 theme and artist credit has not yet been\n\t\t\t\t\t\t\t\t\t\t\tconfirmed</strong>, so no older theme information is being reused.",
			links: [],
			transit: 1,
		},
		{
			order: 6,
			type: ItemType.PANDAL,
			area: Area.JADAVPUR,
			title: "Purbachal Shakti Sangha",
			distance: 500,
			gmapsUrl:
				"https://www.google.com/maps/place/Shakti+Sangha+Club's+Durga+Puja+Ground/@22.5047514,88.3830199,1609m/data=!3m1!1e3!4m6!3m5!1s0x3a027135581e251b:0xbee53812001b8234!8m2!3d22.5047514!4d88.3879686!16s%2Fg%2F11fd7lhl0n!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc:
				"Celebrating its <strong>18th year</strong>, the\n\t\t\t\t\t\t\t\t\t\t<strong>final theme is not confirmed yet</strong>. Artist\n\t\t\t\t\t\t\t\t\t\t<strong>Tapas Dutta</strong> will take care of the artistic\n\t\t\t\t\t\t\t\t\t\twork this year.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/purbachalshaktisangha.org",
				},
			],
			transit: 2,
			lunch: true,
		},
		{
			order: 7,
			type: ItemType.PANDAL,
			area: Area.LAKETOWN,
			title: "Sree Bhumi",
			distance: 500,
			gmapsUrl:
				"https://www.google.com/maps/place/Sreebhumi+Sporting+Club+Play+Ground/@22.6003848,88.4013511,402m/data=!3m1!1e3!4m6!3m5!1s0x3a0275fd4858d083:0x2996dbcede4bbf02!8m2!3d22.6003853!4d88.4026153!16s%2Fg%2F11gd1w4_bj!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
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
			order: 8,
			type: ItemType.PANDAL,
			area: Area.LAKETOWN,
			title: "Natunpally Pradeep Sangha",
			distance: 850,
			gmapsUrl:
				"https://www.google.com/maps/place/Pradip+Sangha+Ground/@22.6037335,88.3973872,50m/data=!3m1!1e3!4m14!1m7!3m6!1s0x3a0275fd4858d083:0x2996dbcede4bbf02!2sSreebhumi+Sporting+Club+Play+Ground!8m2!3d22.6003853!4d88.4026153!16s%2Fg%2F11gd1w4_bj!3m5!1s0x3a0277427d512ee9:0xa111f89c64fce2d6!8m2!3d22.6037128!4d88.3974659!16s%2Fg%2F11gnpfm9wj!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
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
			order: 9,
			type: ItemType.PANDAL,
			area: Area.LAKETOWN,
			title: "Lake Town Adhibasi Brindo",
			distance: 900,
			gmapsUrl:
				"https://www.google.com/maps/place/Lake+Town+Adhibasi+Brinda/@22.6043798,88.4030988,201m/data=!3m1!1e3!4m6!3m5!1s0x3a0275fdccbfa703:0x34f93ea72ee93339!8m2!3d22.6044508!4d88.4039701!16s%2Fg%2F1pp2tvn2n!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc:
				"Known for its ambitious conceptual installations and\n\t\t\t\t\t\t\t\t\t\tcollaborations with prominent artists over the years. For\n\t\t\t\t\t\t\t\t\t\t<strong>2026</strong>, however, a sufficiently reliable\n\t\t\t\t\t\t\t\t\t\tfinal theme or artist announcement has not been established,\n\t\t\t\t\t\t\t\t\t\tso historical themes and artist credits have not been\n\t\t\t\t\t\t\t\t\t\tcarried forward.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/laketown.adhibasibrinda",
				},
			],
			transit: 11,
		},
		{
			order: 10,
			type: ItemType.PANDAL,
			area: Area.KANKURGACHI,
			title: "Kankurgachi Chalantika Durgotsav",
			distance: 350,
			gmapsUrl:
				"https://www.google.com/maps/place/Kankurgachi+Chalantika+Durgotsav+Ground/@22.5808961,88.3905608,804m/data=!3m1!1e3!4m14!1m7!3m6!1s0x3a02766e5cd6e911:0x935f966e84e693e9!2sKankurgachi!8m2!3d22.580353!4d88.390012!16s%2Fg%2F11g2_g3ctg!3m5!1s0x3a02770048128ae7:0xcddf878fb356d493!8m2!3d22.5816813!4d88.392059!16s%2Fg%2F11v_0vkv54!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: `Celebrating its <strong>65th year in 2026</strong>, Kankurgachi Chalantika Durgotsav features creative artistry by <strong>Sayan and Suman</strong>. The official theme details have not been confirmed yet.`,
			links: [],
		},
		{
			order: 11,
			type: ItemType.PANDAL,
			area: Area.KANKURGACHI,
			title: "Kankurgachi Mitali Sangha",
			distance: 400,
			gmapsUrl:
				"https://www.google.com/maps/place/Mitali+Sangha+Durga+Puja+Pandal/@22.5808961,88.3905608,804m/data=!3m1!1e3!4m14!1m7!3m6!1s0x3a02766e5cd6e911:0x935f966e84e693e9!2sKankurgachi!8m2!3d22.580353!4d88.390012!16s%2Fg%2F11g2_g3ctg!3m5!1s0x3a027671a7b9f695:0x4748fcf93ab39573!8m2!3d22.579987!4d88.3942125!16s%2Fg%2F11bwfm98jr!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: `Celebrating its <strong>90th year in 2026</strong>, Kankurgachi Mitali Sangha presents the theme <strong>'Ekai Eksho' (একাই একশো)</strong>, dedicated to the 100th birth anniversary of Mahanayak Uttam Kumar. The creative conceptualization is by <strong>Satyaki Sur</strong>.`,
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/profile.php?id=100057189111100",
				},
				{
					type: LinkType.EMAIL,
					value: "callmesiddd@gmail.com",
				},
			],
			transit: 4,
		},
		{
			order: 12,
			type: ItemType.PANDAL,
			area: Area.BELIAGHATA,
			title: "Beliaghata 33 Palli",
			distance: 200,
			gmapsUrl:
				"https://www.google.com/maps/place/Beliaghata+33+Pally/@22.5685686,88.3885535,804m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a02767c1501e22d:0x3b113591cf966d68!8m2!3d22.5685686!4d88.3911284!16s%2Fg%2F11c30s4x8f!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: `Celebrating its <strong>26th year in 2026</strong>, Beliaghata 33 Pally presents the theme <strong>'Ontorale' (অন্তরালে)</strong>. This creative project is envisioned by <strong>Samrat Bhattacharya, Subimal Das, Kunal Pathak, and Deepmoy Das</strong>.`,
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/Beliaghata33no.pallibashibrinda",
				},
				{
					type: LinkType.INSTAGRAM,
					value: "https://www.instagram.com/beliaghata33_palli",
				},
				{
					type: LinkType.PHONE,
					value: "9836245448",
				},
				{
					type: LinkType.EMAIL,
					value: "beliaghatapbb.club@gmail.com",
				},
			],
		},
		{
			order: 13,
			type: ItemType.PANDAL,
			area: Area.BELIAGHATA,
			title: "Sandhani Club",
			distance: 240,
			gmapsUrl:
				"https://www.google.com/maps/place/Sandhani+Club+Puja+Mandap/@22.5649899,88.394197,402m/data=!3m1!1e3!4m6!3m5!1s0x3a02767de35eca53:0x797e7da05f9967fc!8m2!3d22.5649902!4d88.3964973!16s%2Fg%2F1hhxp7k_h!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: `Celebrating its <strong>57th year in 2026</strong>, Beleghata Sandhani Club presents the theme <strong>'Debayatan' (দেবায়তন)</strong>. The creative direction is by <strong>Sumi Majumder, Shubhadeep Majumder, and Trisha Dutta</strong>, with the idol crafted by <strong>Parimal Paul</strong>, lighting design by <strong>Kunal Pathak</strong>, and background music by <strong>Gautam Brahma</strong>.`,
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/sandhaniclub",
				},
				{
					type: LinkType.PHONE,
					value: "7278810040",
				},
				{
					type: LinkType.EMAIL,
					value: "sandhani1970@gmail.com",
				},
			],
			transit: 5,
		},
		{
			order: 14,
			type: ItemType.PANDAL,
			area: Area.SALT_LAKE,
			title: "IB Block",
			distance: 850,
			gmapsUrl:
				"https://www.google.com/maps/place/IB+Block+Ground/@22.5743008,88.4116505,1201m/data=!3m1!1e3!4m6!3m5!1s0x3a0275cef339cbf3:0x9ddb68b64cda80a4!8m2!3d22.5719076!4d88.4141171!16s%2Fg%2F124spvsj8!5m1!1e1?entry=tts&g_ep=EgoyMDI2MDkwMi4wIPu8ASoASAFQAw%3D%3D&skid=f747485c-845e-4543-8355-f776e2e57c38",
			htmlDesc: `For Durga Puja 2026, Salt Lake IB Block presents the theme <strong>Shri Bajreshwari Devi Temple</strong>, replicating the sacred Shaktipeeth from Kangra, Himachal Pradesh.`,
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/profile.php?id=61565001022144",
				},
				{
					type: LinkType.PHONE,
					value: "9830687431",
				},
				{
					type: LinkType.EMAIL,
					value: "ibblockdurgotsavsaltlake@gmail.com",
				},
			],
			transit: 6,
		},
		{
			order: 15,
			type: ItemType.PANDAL,
			area: Area.SALT_LAKE,
			title: "FD Block",
			distance: 650,
			gmapsUrl:
				"https://www.google.com/maps/place/FD+Park/@22.5834443,88.4103758,480m/am=t/data=!3m1!1e3!4m6!3m5!1s0x3a0275c3477689d7:0xf421a11f5617d3a6!8m2!3d22.5839087!4d88.4120512!16s%2Fg%2F1tp25psh!5m1!1e1?entry=tts&g_ep=EgoyMDI2MDkwMi4wIPu8ASoASAFQAw%3D%3D&skid=e42d3785-5cc1-49a8-8c76-e36f1643aa82",
			htmlDesc: `Celebrating its <strong>42nd year in 2026</strong>, Salt Lake FD Block presents the theme <strong>'Nakshi Kanar Math' (নকশি কণার মাথ)</strong>. The concept and presentation is by <strong>Prasanta Pal</strong>, with the idol crafted by <strong>Tapan Majhi</strong>, pandal structure by <strong>Maa Kali Decorators</strong>, lighting by <strong>Roy Electrical</strong>, and research by <strong>Subhajit Santra</strong>.`,
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/profile.php?id=61581253974029",
				},
				{
					type: LinkType.PHONE,
					value: "9804601224",
				},
				{
					type: LinkType.EMAIL,
					value: "avi.basak1989@gmail.com",
				},
			],
		},
		{
			order: 16,
			type: ItemType.PANDAL,
			area: Area.SALT_LAKE,
			title: "EC Block",
			distance: 500,
			gmapsUrl:
				"https://www.google.com/maps/place/EC+Block+Durga+Puja/@22.5850412,88.4060973,402m/data=!3m1!1e3!4m6!3m5!1s0x3a0275e1e2222f55:0x95ec7f21c0a610ac!8m2!3d22.5850415!4d88.4084791!16s%2Fg%2F11l5ft8jqn!5m1!1e1?entry=tts&g_ep=EgoyMDI2MDkwMi4wIPu8ASoASAFQAw%3D%3D&skid=07b067a2-e119-4b68-a3ca-0aa1d838683c",
			htmlDesc: `Celebrating its <strong>50th year in 2026</strong>, the Puja features the theme <strong>'Akkhohini - The Triumph of Dharma' (অক্ষোহিনী)</strong>, with <strong>Samrat Bhattacharjee</strong> as the theme artist.`,
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/profile.php?id=61579704275475",
				},
				{
					type: LinkType.PHONE,
					value: "9830509481",
				},
				{
					type: LinkType.EMAIL,
					value: "ecblock.ra@gmail.com",
				},
			],
			transit: 7,
		},
		{
			order: 17,
			type: ItemType.PANDAL,
			area: Area.SALT_LAKE,
			title: "AF Block",
			distance: 1300,
			gmapsUrl:
				"https://www.google.com/maps/place/AK+Block+Durga+Puja/@22.5888525,88.4245369,1608m/data=!3m1!1e3!4m6!3m5!1s0x3a0275002ce87d89:0x104c18cf00872e0a!8m2!3d22.5888537!4d88.4307676!16s%2Fg%2F11xzq13lcf!5m1!1e1?entry=tts&g_ep=EgoyMDI2MDkwMi4wIPu8ASoASAFQAw%3D%3D&skid=dcb93cbb-d48e-46f6-84a5-5b1466f83873",
			htmlDesc: `Celebrating its <strong>39th year in 2026</strong>, Salt Lake AK Block Association presents the theme <strong>'Onno Kotha, Annyer Kotha' (অন্য কথা, অন্নের কথা)</strong>. The conceptualization and creation (মাতৃরুপ দান এবং সৃজনে) are guided by <strong>Purnendu Dey, Rintu Konar, and Madhusudan Das</strong>.`,
			links: [],
			transit: 8,
		},
		{
			order: 18,
			type: ItemType.PANDAL,
			area: Area.NEWTOWN,
			title: "Newtown Sarbojonin",
			distance: 700,
			gmapsUrl:
				"https://www.google.com/maps/place/New+Town+Durga+Puja+Committee,+BG+Block/@22.5819406,88.4580839,121m/data=!3m1!1e3!4m6!3m5!1s0x3a027575aec8b953:0xdb011e2e8a3f6b40!8m2!3d22.5822737!4d88.458849!16s%2Fg%2F11fd4g8r0f!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: `Celebrating its <strong>5th year in 2026</strong>, Newtown Sarbojonin presents the theme <strong>'Padmabhushan' (পদ্মভূষণ)</strong>, with the artistic design and craftsmanship (Shilpi) by <strong>Rintu Das</strong>.`,
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/NewtownSarbojanin",
				},
				{
					type: LinkType.INSTAGRAM,
					value: "https://www.instagram.com/newtown_sarbojanin",
				},
				{
					type: LinkType.YOUTUBE,
					value: "https://www.youtube.com/@NewTownSarbojanin",
				},
				{
					type: LinkType.PHONE,
					value: "9007035417",
				},
				{
					type: LinkType.EMAIL,
					value: "newtownsarbojanin@gmail.com",
				},
			],
			transit: 9,
		},
		{
			order: 19,
			type: ItemType.PANDAL,
			area: Area.DUM_DUM_PARK,
			title: "Dum Dum Park Yubak Brinda",
			distance: 350,
			gmapsUrl:
				"https://www.google.com/maps/place/Dum+Dum+Park+Yubak+Brinda+Durga+Puja/@22.6042435,88.4157816,804m/data=!3m1!1e3!4m6!3m5!1s0x3a02750032daabd1:0x3078618f1a2677e!8m2!3d22.6054302!4d88.4178188!16s%2Fg%2F11mlt7z0vh!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: `Celebrating its <strong>60th year in 2026</strong>, Dum Dum Park Yubak Brinda presents the theme <strong>'Kalantor - the fight never ends' (কালান্তর)</strong>. The creative team includes <strong>Susobhan, Debraj, Soumen, Chitrolekho, Bampai, Bappa, Rohan, Tamal, and Riku</strong>.`,
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/profile.php?id=61581354293319",
				},
				{
					type: LinkType.INSTAGRAM,
					value: "https://www.instagram.com/dumdumpark_yubakbrinda",
				},
			],
		},
		{
			order: 20,
			type: ItemType.PANDAL,
			area: Area.DUM_DUM_PARK,
			title: "Dum Dum Park Sarbojanin",
			distance: 650,
			gmapsUrl:
				"https://www.google.com/maps/place/Dum+Dum+Park+Sarbojanin+Durga+Puja+Samity/@22.6080038,88.4135235,804m/data=!3m1!1e3!4m6!3m5!1s0x3a0275f5d410ed31:0xe23f982d56f9571e!8m2!3d22.6094363!4d88.4164052!16s%2Fg%2F11c1q4jhf4!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: `Celebrating its <strong>75th year in 2026</strong>, Dum Dum Park Sarbojonin features artistic direction by <strong>Sanatan Dinda</strong> and pandal decoration by <strong>Tapas Dutta</strong>. The official theme has not been confirmed yet.`,
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/DDPSB",
				},
				{
					type: LinkType.INSTAGRAM,
					value: "https://www.instagram.com/dumdumparksarbojanin",
				},
				{
					type: LinkType.YOUTUBE,
					value: "https://www.youtube.com/channel/UCySIM5GeXQoBR8txNu9iuGA",
				},
				{
					type: LinkType.EMAIL,
					value: "dumdumparksarbojanin@gmail.com",
				},
			],
		},
		{
			order: 21,
			type: ItemType.PANDAL,
			area: Area.DUM_DUM_PARK,
			title: "Dum Dum Park Bharat Chakra",
			distance: 350,
			gmapsUrl:
				"https://www.google.com/maps/place/Dum+Dum+Park+Bharat+Chakra/@22.6100488,88.4129213,804m/data=!3m1!1e3!4m6!3m5!1s0x3a0275f638219271:0x3974eb6bb6cbe800!8m2!3d22.6108213!4d88.4146001!16s%2Fg%2F11b67270vq!5m1!1e1?entry=tts&g_ep=EgoyMDI2MDgxOS4wIPu8ASoASAFQAw%3D%3D&skid=88a5ac12-c11b-48b2-8d24-9640205f95fe",
			htmlDesc: `Celebrating its <strong>26th year in 2026</strong>, Dum Dum Park Bharat Chakra presents the theme <strong>'Antaryami' (অন্তর্যামী)</strong>. The creative team consists of <strong>Manas Das and Saikat Basu</strong>.`,
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/dumdumparkbharatchakraclub",
				},
				{
					type: LinkType.INSTAGRAM,
					value: "https://www.instagram.com/bharatchakrapujo",
				},
				{
					type: LinkType.PHONE,
					value: "8017058588",
				},
				{
					type: LinkType.EMAIL,
					value: "bharatchakrapujo@gmail.com",
				},
			],
		},
		{
			order: 22,
			type: ItemType.PANDAL,
			area: Area.DUM_DUM_PARK,
			title: "Dum Dum Park Tarun Sangha",
			distance: 400,
			gmapsUrl:
				"https://www.google.com/maps/place/Dum+Dum+Park+Tarun+Sangha+Club/@22.6103477,88.4104488,330m/data=!3m1!1e3!4m15!1m8!3m7!1s0x3a0275001427d701:0xe9c824f459853d95!2sDum+Dum+Park+Tarun+Sangha+Club!8m2!3d22.610051!4d88.411488!10e5!16s%2Fg%2F11m59_r1m7!3m5!1s0x3a0275001427d701:0xe9c824f459853d95!8m2!3d22.610051!4d88.411488!16s%2Fg%2F11m59_r1m7!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: `Celebrating its <strong>41st year in 2026</strong>, Dum Dum Park Tarun Sangha presents the theme <strong>'Benia Kotha - Tale of The Merchants' (বেনিয়া কথা)</strong>. The creative conceptualization is by <strong>Anirban and Sampraday</strong>, with background music by <strong>Dipwanita Acharya</strong>, and lighting by <strong>Triguna Shankar</strong>.`,
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/dumdumparktarunsanghaofficial",
				},
				{
					type: LinkType.INSTAGRAM,
					value: "https://www.instagram.com/dumdumparktarunsangha",
				},
				{
					type: LinkType.PHONE,
					value: "9874566446",
				},
				{
					type: LinkType.EMAIL,
					value: "dumdumparktarunsangha@gmail.com",
				},
			],
		},
		{
			order: 23,
			type: ItemType.PANDAL,
			area: Area.DUM_DUM_PARK,
			title: "Dum Dum Park Tarun Dal",
			distance: 850,
			gmapsUrl:
				"https://www.google.com/maps/place/Dum+Dum+Park+Tarun+Dal/@22.6103477,88.4104488,402m/data=!3m1!1e3!4m6!3m5!1s0x3a027500729fc2d5:0x6a9316dfa03e6def!8m2!3d22.611486!4d88.418626!16s%2Fg%2F11y02wgd66!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: `Celebrating its <strong>49th year in 2026</strong>, Dum Dum Park Tarun Dal presents the theme <strong>'Jot' (জোট - সম্পর্কের ইতিহাস বন্ধনের শক্তি)</strong>. The main creative artist is <strong>Purnendu Dey</strong>.`,
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/dumdum.tarundal",
				},
				{
					type: LinkType.PHONE,
					value: "9123622926",
				},
				{
					type: LinkType.EMAIL,
					value: "dumdumtarundal.dumdumpark@gmail.com",
				},
			],
		},
		{
			order: 24,
			type: ItemType.PANDAL,
			area: Area.DUM_DUM,
			title: "Dakshinpara Sarbojonin",
			distance: 500,
			gmapsUrl:
				"https://www.google.com/maps/place/Dakshinpara+Durgotsab+Committee/@22.6133583,88.4187849,804m/data=!3m2!1e3!4b1!4m6!3m5!1s0x39f89f00660fde2f:0x3cf4a702256fff76!8m2!3d22.6133583!4d88.4213598!16s%2Fg%2F11mcytm14t!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc:
				"A long-established Dum Dum Park-area Puja with a substantial\n\t\t\t\t\t\t\t\t\t\thistory of artistic and socially conscious presentations.\n\t\t\t\t\t\t\t\t\t\tThe committee's current 2026 material does not yet provide a\n\t\t\t\t\t\t\t\t\t\treliable final theme or artist announcement, so previous\n\t\t\t\t\t\t\t\t\t\tconcepts have not been carried forward.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/profile.php?id=100080344094515",
				},
				{
					type: LinkType.INSTAGRAM,
					value: "https://www.instagram.com/dakshinpara_durgotsabcommittee",
				},
				{
					type: LinkType.EMAIL,
					value: "nutandal2008@gmail.com",
				},
			],
		},
		{
			order: 25,
			type: ItemType.PANDAL,
			area: Area.DUM_DUM,
			title: "Dakshinpara Yuba Parishad",
			distance: 500,
			gmapsUrl:
				"https://www.google.com/maps/place/Yuba+Parishad/@22.6143577,88.4185235,643m/data=!3m1!1e3!4m6!3m5!1s0x39f89e1f9f63bf6f:0x6c72e64ed5eb19a0!8m2!3d22.6148577!4d88.419802!16s%2Fg%2F1q69m90_d!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: `Celebrating its <strong>67th year in 2026</strong>, Dakshinpara Yuba Parishad has not yet confirmed its official theme details.`,
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/profile.php?id=100064764576494",
				},
			],
			transit: 10,
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
					distance: 500,
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
					distance: 400,
					dest: Places.BUS_STOPS.KANKURGACHI,
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
					dest: Places.BUS_STOPS.CITY_CENTER,
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
		{
			index: 10,
			steps: [
				{
					order: 1,
					medium: TransitMedium.WALK,
					distance: 1000,
					dest: Places.BUS_STOPS.AMARPALLY_BHAGABATI,
				},
				{
					order: 2,
					medium: TransitMedium.CAB,
					dest: Places.BUS_STOPS.BALLY_HALT,
				},
			],
		},
		{
			index: 11,
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
					dest: Places.BUS_STOPS.KANKURGACHI,
				},
			],
		},
	],
};
