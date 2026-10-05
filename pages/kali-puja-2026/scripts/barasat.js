import { Area, ItemType, LinkType, Places, TransitMedium } from "./commons.js";

export const barasatData = {
	title: "Barasat Kali Puja",
	dateLabel: "9 NOVEMBER &middot; MONDAY",
	meetup: {
		time: "12:00 PM",
		place: Places.RAIL_STATIONS.BALLY_HALT,
	},
	countdown: {
		title: "Diwali",
		subtitle: "The festival of lights is almost here! ✨",
		targetDate: new Date("2026-11-08"),
	},
	dinnerStop: {
		type: ItemType.DINNER,
		title: "Cuisine Hut",
		distance: 140,
		fromName: "Jagriti Sangha",
		gmapsUrl:
			"https://www.google.com/maps/place/CuisineHut/@22.7182559,88.4754528,201m/data=!3m1!1e3!4m6!3m5!1s0x39f898a8ebf74a23:0xd94015e77051083a!8m2!3d22.7181861!4d88.4756637!16s%2Fg%2F11t6s9j72d!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
	},
	stops: [
		{
			order: 1,
			type: ItemType.PANDAL,
			area: Area.BARASAT,
			title: "United Associations",
			distance: 300,
			gmapsUrl:
				"https://www.google.com/maps/place/United+Association/@22.7249036,88.4799263,803m/data=!3m1!1e3!4m6!3m5!1s0x39f8a2099eef799b:0x473828bf734d1721!8m2!3d22.7247962!4d88.4811254!16s%2Fg%2F11c525yzm1!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: ``,
			links: [],
			transit: 0,
			isPreviousTransit: true,
		},
		{
			order: 2,
			type: ItemType.PANDAL,
			area: Area.BARASAT,
			title: "Pioneer Park",
			distance: 300,
			gmapsUrl:
				"https://www.google.com/maps/place/Pioneer+Maath/@22.7237566,88.4807476,261m/data=!3m1!1e3!4m6!3m5!1s0x39f8a20909955555:0x43b3cb0e3a2caaac!8m2!3d22.7239638!4d88.4816339!16s%2Fg%2F11yk7q5094!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: ``,
			links: [],
		},
		{
			order: 3,
			type: ItemType.PANDAL,
			area: Area.BARASAT,
			title: "Kishore Sporting Club",
			distance: 1200,
			gmapsUrl:
				"https://www.google.com/maps/place/Kishore+Sporting+Club+ground/@22.7313246,88.4811645,256m/data=!3m1!1e3!4m14!1m7!3m6!1s0x39f8a274d5a05541:0x66537fad50e51dae!2sKISHORE+SPORTING+CLUB!8m2!3d22.7319182!4d88.4816515!16s%2Fg%2F1q6j2ydss!3m5!1s0x39f8a3007aaefe9f:0xb674aca5179c2c63!8m2!3d22.7319656!4d88.4813175!16s%2Fg%2F11wg4nq50s!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: ``,
			links: [],
		},
		{
			order: 4,
			type: ItemType.PANDAL,
			area: Area.BARASAT,
			title: "Regiment Club",
			distance: 600,
			gmapsUrl:
				"https://www.google.com/maps/place/Regiment+Club/@22.7270244,88.4802167,333m/data=!3m1!1e3!4m6!3m5!1s0x39f8a20a7184be73:0xf46189c09574d241!8m2!3d22.7278023!4d88.479614!16s%2Fg%2F1q6j83jcc!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: ``,
			links: [],
		},
		{
			order: 5,
			type: ItemType.PANDAL,
			area: Area.BARASAT,
			title: "Nabapally Association",
			distance: 800,
			gmapsUrl:
				"https://www.google.com/maps/place/Nabapally+Association+Kali+Puja+Pandal/@22.7234819,88.4758867,408m/data=!3m1!1e3!4m14!1m7!3m6!1s0x39f8a274d5a05541:0x66537fad50e51dae!2sKISHORE+SPORTING+CLUB!8m2!3d22.7319182!4d88.4816515!16s%2Fg%2F1q6j2ydss!3m5!1s0x39f899001b0ccfc9:0x505e0ba6051e8077!8m2!3d22.7227375!4d88.4766474!16s%2Fg%2F11y0jzgp38!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: ``,
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/nabapallyassociation",
				},
			],
		},
		{
			order: 6,
			type: ItemType.PANDAL,
			area: Area.BARASAT,
			title: "Amra Sabai Club",
			distance: 1000,
			gmapsUrl:
				"https://www.google.com/maps/place/Nabapally+Boys+School+ground/@22.7194115,88.469191,306m/data=!3m1!1e3!4m14!1m7!3m6!1s0x39f8a274d5a05541:0x66537fad50e51dae!2sKISHORE+SPORTING+CLUB!8m2!3d22.7319182!4d88.4816515!16s%2Fg%2F1q6j2ydss!3m5!1s0x39f898b001b98ad9:0x17aae38c50579490!8m2!3d22.719606!4d88.4693595!16s%2Fg%2F11g9fqctf5!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: ``,
			links: [],
		},
		{
			order: 7,
			type: ItemType.PANDAL,
			area: Area.BARASAT,
			title: "Jagriti Sangha",
			distance: 700,
			gmapsUrl:
				"https://www.google.com/maps/place/Jagriti+Math/@22.7184179,88.475306,57m/data=!3m1!1e3!4m14!1m7!3m6!1s0x39f898a8b14b9881:0x3be047cce0a65687!2sJagrity+Sangha!8m2!3d22.7182789!4d88.4757677!16s%2Fg%2F1th7l9lh!3m5!1s0x39f898a8c7be6b47:0xcc3bc940e6055b2a!8m2!3d22.7184552!4d88.4753295!16s%2Fg%2F11fzwh22jf!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: ``,
			links: [],
			dinner: true,
		},
		{
			order: 8,
			type: ItemType.PANDAL,
			area: Area.BARASAT,
			title: "Tarucchaya Club",
			distance: 140,
			gmapsUrl:
				"https://www.google.com/maps/place/Taruchhaya+Club/@22.7184866,88.4735701,803m/data=!3m1!1e3!4m6!3m5!1s0x39f898a8899e4e0d:0xeca6dd01f57f4406!8m2!3d22.7188761!4d88.4765723!16s%2Fg%2F1q6kk0683!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: ``,
			links: [],
		},
		{
			order: 9,
			type: ItemType.PANDAL,
			area: Area.BARASAT,
			title: "Sandhani Club",
			distance: 550,
			gmapsUrl:
				"https://www.google.com/maps/place/Sandhani+Ground/@22.7167598,88.4731881,803m/data=!3m1!1e3!4m6!3m5!1s0x39f89950f15aa355:0x6593355cc94ebc29!8m2!3d22.714658!4d88.4758538!16s%2Fg%2F11qzwgb6cj!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: ``,
			links: [],
		},
		{
			order: 10,
			type: ItemType.PANDAL,
			area: Area.BARASAT,
			title: "K.N.C Regiment",
			distance: 1500,
			gmapsUrl:
				"https://www.google.com/maps/place/K.N.C+Regiment+Kali+Pujo/@22.7190775,88.4790001,803m/data=!3m1!1e3!4m6!3m5!1s0x39f8a207d4a987c9:0xb3d9ec05b2105393!8m2!3d22.7195624!4d88.4813604!16s%2Fg%2F11c1_w1sxn!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: `Celebrating its <strong>67th year in 2026</strong>, K.N.C Regiment Kali Puja presents the theme <strong>'Kalpataru Mandir' (কল্পতরু মন্দির)</strong>. The pandal is designed by <strong>Asim Pal</strong>, assisted by co-artist <strong>Sukumar</strong>. The idol is crafted by Krishnanagar's <strong>Rajib Pal</strong>, with lighting designed by Chandannagar's <strong>Pintu Electric</strong>.`,
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/profile.php?id=100086931754939",
				},
				{
					type: LinkType.INSTAGRAM,
					value: "https://www.instagram.com/knc.regiment.barasat",
				},
				{
					type: LinkType.PHONE,
					value: "9331888669",
				},
				{
					type: LinkType.EMAIL,
					value: "kncregiment@gmail.com",
				},
			],
		},
		{
			order: 11,
			type: ItemType.PANDAL,
			area: Area.BARASAT,
			title: "Bidhan Park",
			distance: 1100,
			gmapsUrl:
				"https://www.google.com/maps/place/Bidhan+Park+Children's+Park/@22.7175695,88.4911011,402m/data=!3m1!1e3!4m6!3m5!1s0x39f8a3a3303001f1:0x34345f8247acc6f8!8m2!3d22.7179628!4d88.4903884!16s%2Fg%2F11h0yjk19y!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: ``,
			links: [],
		},
		{
			order: 12,
			type: ItemType.PANDAL,
			area: Area.BARASAT,
			title: "Shatadal Sangha",
			distance: 140,
			gmapsUrl:
				"https://www.google.com/maps/place/Shatadal+Sangha+Playground/@22.7175695,88.4911011,402m/data=!3m1!1e3!4m6!3m5!1s0x39f8a34a3820f793:0x4cdd44056db08722!8m2!3d22.7173608!4d88.4905789!16s%2Fg%2F11h5vdvfvw!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: ``,
			links: [],
		},
		{
			order: 13,
			type: ItemType.PANDAL,
			area: Area.BARASAT,
			title: "Bidrohi Club",
			distance: 450,
			gmapsUrl:
				"https://www.google.com/maps/place/Bidrohi+Club+Playground/@22.7175156,88.490277,402m/data=!3m1!1e3!4m6!3m5!1s0x39f8a21a3f4fe6af:0x5f0ec5f9c10c6358!8m2!3d22.718256!4d88.4926854!16s%2Fg%2F11c6s2v3vn!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: ``,
			links: [],
		},
		{
			order: 14,
			type: ItemType.PANDAL,
			area: Area.BARASAT,
			title: "Aguyan Sangha",
			distance: 800,
			gmapsUrl:
				"https://www.google.com/maps/place/Football+Ground/@22.7174622,88.4938041,906m/data=!3m1!1e3!4m6!3m5!1s0x39f8a2188c542511:0x28fb7fddaf58edfa!8m2!3d22.7165934!4d88.4974527!16s%2Fg%2F11hbpn8hzp!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: ``,
			links: [],
		},
		{
			order: 15,
			type: ItemType.PANDAL,
			area: Area.BARASAT,
			title: "Jubo Gosthi",
			distance: 550,
			gmapsUrl:
				"https://www.google.com/maps/place/Jubogoshthi+Playground/@22.7152387,88.4949104,171m/data=!3m1!1e3!4m6!3m5!1s0x39f8a398982a47e1:0x8110e9735e027d6b!8m2!3d22.7153789!4d88.4949569!16s%2Fg%2F11t444wnk6!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: ``,
			links: [],
		},
		{
			order: 16,
			type: ItemType.PANDAL,
			area: Area.BARASAT,
			title: "Balak Brindo",
			distance: 260,
			gmapsUrl:
				"https://www.google.com/maps/place/Taki+Road+Balak+Brinda+Sporting+Club/@22.7154542,88.492041,171m/data=!3m1!1e3!4m6!3m5!1s0x39f8a21b950d442b:0xf709bba0e4199c00!8m2!3d22.7153996!4d88.492456!16s%2Fg%2F1pzsc1qnj!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: ``,
			links: [],
			transit: 1,
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
					src: Places.RAIL_STATIONS.BALLY_HALT,
					dest: Places.RAIL_STATIONS.SEALDAH,
				},
				{
					order: 2,
					medium: TransitMedium.TRAIN,
					dest: Places.RAIL_STATIONS.BARASAT,
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
					distance: 1600,
					dest: Places.RAIL_STATIONS.BARASAT,
				},
				{
					order: 2,
					medium: TransitMedium.TRAIN,
					dest: Places.RAIL_STATIONS.DUMDUM,
				},
				{
					order: 3,
					medium: TransitMedium.TRAIN,
					dest: Places.RAIL_STATIONS.BALLY_HALT,
				},
			],
		},
	],
};
