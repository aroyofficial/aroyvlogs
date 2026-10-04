import { Area, ItemType, LinkType, Places, TransitMedium } from "./commons.js";

export const panchami = {
	title: "Naihati Kali Puja",
	dateLabel: "10 NOVEMBER &middot; TUESDAY",
	meetup: {
		time: "3:00 PM",
		place: Places.RAIL_STATIONS.BALLY,
	},
	countdown: {
		title: "Diwali",
		subtitle: "The festival of lights is almost here! ✨",
		targetDate: new Date("2026-11-08"),
	},
	dinnerStop: {
		type: ItemType.DINNER,
		title: "Awadh",
		distance: 500,
		fromName: "Railway Hawkers Union",
		gmapsUrl:
			"https://www.google.com/maps/place/Awadh/@22.8906492,88.417197,401m/data=!3m1!1e3!4m6!3m5!1s0x39f897b13be2e565:0x133d1cc38356d6e4!8m2!3d22.8901618!4d88.418841!16s%2Fg%2F11vf6901lg!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
		transit: 1,
	},
	stops: [
		{
			order: 1,
			type: ItemType.PANDAL,
			area: Area.NAIHATI,
			title: "Kadam Kali",
			distance: 160,
			gmapsUrl:
				"https://www.google.com/maps/place/Naihati+Kadam+Kali+Puja/@22.889255,88.4120747,201m/data=!3m1!1e3!4m6!3m5!1s0x39f897feeaf98775:0x235aaa019e111013!8m2!3d22.8889315!4d88.4134118!16s%2Fg%2F11hd_k68_r!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: `Celebrating its <strong>95th year in 2026</strong>, Naihati Kadamtala Kali Puja, popularly known as Kadam Kali, is the <strong>second oldest Kali Puja in Naihati after Boro Maa</strong>. The goddess is worshipped as <strong>Maa Shantimoyi</strong>, with rituals strictly following the <strong>Tantric method</strong>.`,
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/masantimoy",
				},
				{
					type: LinkType.PHONE,
					value: "9804066983",
				},
				{
					type: LinkType.EMAIL,
					value: "naihatikadamtalakalipujasamity@gmail.com",
				},
			],
			transit: 0,
			isPreviousTransit: true,
		},
		{
			order: 2,
			type: ItemType.PANDAL,
			area: Area.NAIHATI,
			title: "Boro Maa",
			distance: 100,
			gmapsUrl:
				"https://www.google.com/maps/place/Boro+Maa+Naihati/@22.8884612,88.414222,201m/data=!3m1!1e3!4m15!1m8!3m7!1s0x39f8977ecd45774b:0xf2502e1fd30a005!2sBoro+Maa+Naihati!8m2!3d22.8884658!4d88.4140074!10e5!16s%2Fg%2F11fct16ty0!3m5!1s0x39f8977ecd45774b:0xf2502e1fd30a005!8m2!3d22.8884658!4d88.4140074!16s%2Fg%2F11fct16ty0!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: `Celebrating its <strong>103rd year in 2026</strong>, Naihati Boro Maa Kali Puja focuses on immense devotion and century-old traditions rather than a modern theme. The center of attraction is the majestic <strong>22-foot-tall traditional black idol of Shamashan Kali / Raksha Kali</strong>, heavily adorned with immense quantities of gold and silver ornaments offered by devotees.`,
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/NBKPST",
				},
				{ type: LinkType.YOUTUBE, value: "https://www.youtube.com/@borokali" },
				{ type: LinkType.PHONE, value: "03325815677" },
				{ type: LinkType.EMAIL, value: "naihatibarakalipuja.samity@gmail.com" },
			],
		},
		{
			order: 3,
			type: ItemType.PANDAL,
			area: Area.NAIHATI,
			title: "Ganja Kali",
			distance: 140,
			gmapsUrl:
				"https://www.google.com/maps/place/Naihati+Ganja+Kali+Puja/@22.8879251,88.4153597,3a,74.9y/data=!3m8!1e2!3m6!1sCIABIhCux4y8x-Ub65L2AmXS2xKD!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHRPTWmOnl0ahMePZ2mTecMcQ8rII4MXT0SmBcOLjaz-mmVa_vYZf6j1AqpwDi-4N2VnA8s7txNyY-Xp8_2iYBdTggqCxtYVu-UK4PuAwZ5VHtF4-wuhfY9_gFBvpu2jxfQ_vULKvEJCnY7lJpYf%3Dw86-h152-k-no!7i2250!8i4000!4m7!3m6!1s0x39f897d6bb218bd5:0xcf6cd68dffe3fb5e!8m2!3d22.8879767!4d88.4153916!10e5!16s%2Fg%2F11fp8svtcw!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: ``,
			links: [],
		},
		{
			order: 4,
			type: ItemType.PANDAL,
			area: Area.NAIHATI,
			title: "Becha Kali",
			distance: 46,
			gmapsUrl:
				"https://www.google.com/maps/place/Naihati+Becha+Kali+Puja/@22.8877719,88.413205,802m/data=!3m2!1e3!4b1!4m6!3m5!1s0x39f89784fab26827:0xd47f73c2971cc098!8m2!3d22.8877719!4d88.4157799!16s%2Fg%2F11j0bkctgm!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: ``,
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/profile.php?id=61569598987062",
				},
				{
					type: LinkType.INSTAGRAM,
					value: "https://www.instagram.com/becha_kali",
				},
			],
		},
		{
			order: 5,
			type: ItemType.PANDAL,
			area: Area.NAIHATI,
			title: "Lohaghat Park Association",
			distance: 900,
			gmapsUrl:
				"https://www.google.com/maps/place/VCR7%2BV6X+Lohaghat+Park,+13%2F1,+Suresh+Mitra+Rd,+Naihati,+Kolkata,+West+Bengal+743165/@22.8927958,88.4091711,802m/data=!3m2!1e3!4b1!4m6!3m5!1s0x39f896a604d4d397:0x580b8fa168d5d2ec!8m2!3d22.8925902!4d88.411758!16s%2Fg%2F11b8tdm636!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: `Celebrating its <strong>66th year in 2026</strong>, Naihati Lohaghat Park Association has not yet confirmed its official theme details.`,
			links: [],
		},
		{
			order: 6,
			type: ItemType.PANDAL,
			area: Area.NAIHATI,
			title: "Gouripur Mirabagan",
			distance: 1200,
			gmapsUrl:
				"https://www.google.com/maps/place/Gouripur+Mirabagan/@22.8976342,88.4178122,75m/data=!3m1!1e3!4m6!3m5!1s0x39f896a084bdaf15:0x4926719ef52d2394!8m2!3d22.8975291!4d88.4181045!16s%2Fg%2F11f5dg71p7!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: ``,
			links: [],
		},
		{
			order: 7,
			type: ItemType.PANDAL,
			area: Area.NAIHATI,
			title: "Gopal Smriti Sangha",
			distance: 550,
			gmapsUrl:
				"https://www.google.com/maps/place/Gopal+Smriti+Sangha+Kali+Puja/@22.8939099,88.4160755,802m/data=!3m2!1e3!4b1!4m6!3m5!1s0x39f896a1987f3d03:0x28ee4be7fd273d73!8m2!3d22.8939099!4d88.4186504!16s%2Fg%2F11gf9cs673!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: ``,
			links: [],
		},
		{
			order: 8,
			type: ItemType.PANDAL,
			area: Area.NAIHATI,
			title: "Yubak Sangha",
			distance: 150,
			gmapsUrl:
				"https://www.google.com/maps/place/Yubak+Sangha+Kali+Puja/@22.8935106,88.4170398,802m/data=!3m1!1e3!4m6!3m5!1s0x39f897de03e63ff1:0x9067f89a3cdb6e01!8m2!3d22.8931114!4d88.4196!16s%2Fg%2F11s1948l41!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: ``,
			links: [],
		},
		{
			order: 9,
			type: ItemType.PANDAL,
			area: Area.NAIHATI,
			title: "Bijoynagar Adhibasi Brindo",
			distance: 850,
			gmapsUrl:
				"https://www.google.com/maps/place/Kathgola+Kali+Puja/@22.8939662,88.4201963,1137m/data=!3m1!1e3!4m6!3m5!1s0x39f8969ec5bfa931:0xbb58a501563a0a93!8m2!3d22.8930095!4d88.4242213!16s%2Fg%2F11cs4yc14s!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: `Celebrating its <strong>76th year in 2026</strong>, Bijaynagar Adhibasi Brindo Kali Puja has not yet confirmed its official theme and artist details.`,
			links: [],
		},
		{
			order: 10,
			type: ItemType.PANDAL,
			area: Area.NAIHATI,
			title: "Deulpara 29 Haat Kali",
			distance: 550,
			gmapsUrl:
				"https://www.google.com/maps/place/29+haat+Kali+Puja+(Old+BDO+Office)/@22.8895319,88.420107,802m/data=!3m2!1e3!4b1!4m6!3m5!1s0x39f897a6c7541c01:0x624bdb39ae65417a!8m2!3d22.8895319!4d88.4226819!16s%2Fg%2F11rd_00g5t!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: ``,
			links: [],
		},
		{
			order: 11,
			type: ItemType.PANDAL,
			area: Area.NAIHATI,
			title: "New Star Club",
			distance: 600,
			gmapsUrl:
				"https://www.google.com/maps/place/New+Star+Club/@22.88758,88.4256666,802m/data=!3m2!1e3!4b1!4m6!3m5!1s0x39f8969a625befb7:0x9a2e9fd5f5dc93a0!8m2!3d22.88758!4d88.4282415!16s%2Fg%2F11bwff7yk8!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: ``,
			links: [],
		},
		{
			order: 12,
			type: ItemType.PANDAL,
			area: Area.NAIHATI,
			title: "Abhijatri Club",
			distance: 500,
			gmapsUrl:
				"https://www.google.com/maps/place/Bijoynagar+Playground/@22.8872425,88.4245727,401m/data=!3m1!1e3!4m14!1m7!3m6!1s0x39f89699dacb6a31:0xe6a3aafd64ec5f8f!2sAbhijatri+Club!8m2!3d22.8869361!4d88.4241214!16s%2Fg%2F11c1ndx0t6!3m5!1s0x39f89699c2144623:0xbefddcbdf991f276!8m2!3d22.8872425!4d88.4245727!16s%2Fg%2F11clyt3y90!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: ``,
			links: [],
		},
		{
			order: 13,
			type: ItemType.PANDAL,
			area: Area.NAIHATI,
			title: "Dishari Club",
			distance: 700,
			gmapsUrl:
				"https://www.google.com/maps/place/Naihati+Dishari+Kali+Puja/@22.8864546,88.4190953,802m/data=!3m1!1e3!4m6!3m5!1s0x39f8979ecbf64b21:0x2266f037768de0e0!8m2!3d22.8854445!4d88.4187678!16s%2Fg%2F11fp7v64px!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: ``,
			links: [],
		},
		{
			order: 14,
			type: ItemType.PANDAL,
			area: Area.NAIHATI,
			title: "Railway Hawkers Union",
			distance: 300,
			gmapsUrl:
				"https://www.google.com/maps/place/Naihati+Railway+Hawkers+Union+Kali+Puja/@22.8875701,88.4188181,135m/data=!3m1!1e3!4m6!3m5!1s0x39f89767c12b4bcb:0x8d3992b282923cfa!8m2!3d22.8876872!4d88.4190489!16s%2Fg%2F11fp99_rtk!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: ``,
			links: [],
			dinner: true,
		},
	],
	transits: [
		{
			index: 0,
			type: ItemType.TRANSIT,
			steps: [
				{
					order: 1,
					medium: TransitMedium.TRAIN,
					src: Places.RAIL_STATIONS.BALLY,
					dest: Places.RAIL_STATIONS.CHINSURAH,
				},
				{
					order: 2,
					medium: TransitMedium.AUTO,
					dest: Places.FERRY_TERMINALS.CHINSURAH_FERRY_GHAT,
				},
				{
					order: 3,
					medium: TransitMedium.FERRY,
					dest: Places.FERRY_TERMINALS.NAIHATI_FERRY_GHAT,
				},
			],
		},
		{
			index: 1,
			type: ItemType.TRANSIT,
			steps: [
				{
					order: 1,
					medium: TransitMedium.WALK,
					distance: 400,
					dest: Places.RAIL_STATIONS.NAIHATI,
				},
				{
					order: 2,
					medium: TransitMedium.TRAIN,
					dest: Places.RAIL_STATIONS.BANDEL,
				},
				{
					order: 3,
					medium: TransitMedium.TRAIN,
					dest: Places.RAIL_STATIONS.BALLY,
				},
			],
		},
	],
};
