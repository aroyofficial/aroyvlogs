import { Area, ItemType, LinkType, Places, TransitMedium } from "../commons.js";

export const panchami = {
	title: "Panchami",
	dateLabel: "16 OCTOBER &middot; FRIDAY",
	meetup: {
		time: "7:30 AM",
		place: Places.RAIL_STATIONS.BALLY_HALT,
	},
	lunchStop: {
		type: ItemType.LUNCH,
		title: "Khao More Cafe",
		distance: 350,
		fromName: "Naktala Udayan Sangha",
		gmapsUrl:
			"https://www.google.com/maps/place/Khao+More+Cafe/@22.4719942,88.3653771,402m/data=!3m1!1e3!4m6!3m5!1s0x3a0271fdf24dcc0d:0x95190477bf42a175!8m2!3d22.4719988!4d88.366844!16s%2Fg%2F11q_0q4r6l?entry=tts&g_ep=EgoyMDI2MDgxOS4wIPu8ASoASAFQAw%3D%3D&skid=4eb394e4-780c-41ef-a2d0-80a8d389877b",
	},
	stops: [
		{
			order: 1,
			type: ItemType.PANDAL,
			area: Area.BOSEPUKUR,
			title: "Bosepukur Sitala Mandir",
			distance: 1200,
			gmapsUrl:
				"https://www.google.com/maps/place/Siddhartha+Shankar+Roy+Smriti+Udyan/@22.519136,88.3821418,131m/data=!3m1!1e3!4m6!3m5!1s0x3a0276b57943424f:0x7dbe43c1ec527139!8m2!3d22.5190895!4d88.3825622!16s%2Fg%2F1pzrb28g5!5m1!1e1?entry=tts&g_ep=EgoyMDI2MDkwMi4wIPu8ASoASAFQAw%3D%3D&skid=bdaaa7ed-7570-41e9-af0e-5deb0305b97d",
			htmlDesc:
				"Celebrating its <strong>77th year</strong>, this established community puja in the Bosepukur area presents the 2026 theme <strong>'Chup' (চুপ)</strong>, with concept and execution by artist <strong>Tushar Kanti Pradhan</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/profile.php?id=100068788567572",
				},
				{ type: LinkType.PHONE, value: "9830999107" },
				{ type: LinkType.EMAIL, value: "bosepukursitalamandir01@gmail.com" },
			],
			transit: 0,
			isPreviousTransit: true,
		},
		{
			order: 2,
			type: ItemType.PANDAL,
			area: Area.BOSEPUKUR,
			title: "Bosepukur Talbagan Sarbojanin",
			distance: 230,
			gmapsUrl:
				"https://www.google.com/maps/place/Bosepukur+Talbagan+Durgotsav/@22.5184989,88.3852037,131m/data=!3m1!1e3!4m6!3m5!1s0x3a02770062c52db1:0x5fd67c2a49209af8!8m2!3d22.5183226!4d88.3855348!16s%2Fg%2F11z0wzglxp!5m1!1e1?entry=tts&g_ep=EgoyMDI2MDkwMi4wIPu8ASoASAFQAw%3D%3D&skid=be94ccc6-d4bc-4577-bc24-45cbd19d08d9",
			htmlDesc:
				"Celebrating its <strong>35th year in 2026</strong>, this neighbourhood puja combines traditional community worship with contemporary thematic presentations, though the <strong>final 2026 theme and creative team are not yet confirmed</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/profile.php?id=100063720683654",
				},
				{ type: LinkType.PHONE, value: "9831151932" },
				{ type: LinkType.EMAIL, value: "bosepukurtalbagan@yahoo.co.in" },
			],
		},
		{
			order: 3,
			type: ItemType.PANDAL,
			area: Area.RAJDANGA,
			title: "Rajdanga Naba Uday Sangha",
			distance: 750,
			gmapsUrl:
				"https://www.google.com/maps/place/Rajdanga+Naba+Uday+Sangha/@22.5135749,88.3848674,1609m/data=!3m1!1e3!4m6!3m5!1s0x3a0276b2b3107ed9:0xd35ddc049a639f57!8m2!3d22.5166272!4d88.3902285!16s%2Fg%2F11gbss8hw_!5m1!1e1?entry=tts&g_ep=EgoyMDI2MDkwMi4wIPu8ASoASAFQAw%3D%3D&skid=20b9720a-7482-4f00-9e90-01722ffb4124",
			htmlDesc:
				"Celebrating its <strong>54th year</strong>, this prominent puja in the Rajdanga area presents the 2026 theme <strong>'Sodhon' (শোধন)</strong>, with concept and creation by artist <strong>Debasish Barui</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/RNUSOfficialpage",
				},
				{
					type: LinkType.INSTAGRAM,
					value: "https://www.instagram.com/rajdanga_naba_uday_sangha",
				},
				{ type: LinkType.PHONE, value: "9836313399" },
			],
			transit: 1,
		},
		{
			order: 4,
			type: ItemType.PANDAL,
			area: Area.SANTOSHPUR,
			title: "Santoshpur Lake Pally",
			distance: 53,
			gmapsUrl:
				"https://www.google.com/maps/place/Santoshpur+Lake+Pally/@22.4823671,88.3732592,3219m/data=!3m1!1e3!4m6!3m5!1s0x3a02719a325a3895:0x18dd71d29af7e857!8m2!3d22.4917563!4d88.3829267!16s%2Fg%2F1ptwb889h!5m1!1e1?entry=tts&g_ep=EgoyMDI2MDkwMi4wIPu8ASoASAFQAw%3D%3D&skid=5f2a988a-c45b-4606-9301-8575c13868e1",
			htmlDesc:
				"Celebrating its <strong>69th year</strong>, this major Santoshpur puja presents the theme <strong>'Tandav' (তাণ্ডব)</strong>, conceived by celebrated artist <strong>Rintu Das</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/profile.php?id=100068132243900",
				},
				{ type: LinkType.EMAIL, value: "santoshpurlakepally@gmail.com" },
			],
		},
		{
			order: 5,
			type: ItemType.PANDAL,
			area: Area.SANTOSHPUR,
			title: "Santoshpur Avenue South Pallymangal Samity",
			distance: 400,
			gmapsUrl:
				"https://www.google.com/maps/place/Santoshpur+Avenue+South+Pallymangal+Samity/@22.4921878,88.3750629,805m/data=!3m1!1e3!4m6!3m5!1s0x3a02711578cbcb61:0x84f83080ddf9e08f!8m2!3d22.4921878!4d88.3798265!16s%2Fg%2F11ckqj66cx!5m1!1e1?entry=tts&g_ep=EgoyMDI2MDkwMi4wIPu8ASoASAFQAw%3D%3D&skid=fa4cb95c-b8e2-4dfe-a87f-a423c367bbd9",
			htmlDesc:
				"Celebrating its <strong>60th year</strong>, this neighbourhood puja forms part of the Santoshpur cluster. The <strong>final 2026 theme and artist details are not yet confirmed</strong> and will be updated when official information is available.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/AvenueSouth.Pallymangal",
				},
				{ type: LinkType.PHONE, value: "6201422811" },
				{ type: LinkType.EMAIL, value: "pallymangal.avenuesouth@gmail.com" },
			],
		},
		{
			order: 6,
			type: ItemType.PANDAL,
			area: Area.SANTOSHPUR,
			title: "Santoshpur Trikon Park",
			distance: 270,
			gmapsUrl:
				"https://www.google.com/maps/place/Santoshpur+Trikon+Park+Durgotsab/@22.4924824,88.3766126,805m/data=!3m1!1e3!4m6!3m5!1s0x3a02713e1850c74b:0xaffa07324320d69d!8m2!3d22.4931559!4d88.3784752!16s%2Fg%2F11b807yckt!5m1!1e1?entry=tts&g_ep=EgoyMDI2MDkwMi4wIPu8ASoASAFQAw%3D%3D&skid=ed6269d0-6b9c-41ce-a35a-e5646b8e908b",
			htmlDesc:
				"Celebrating its <strong>77th year</strong>, this familiar name in the Santoshpur Puja circuit features the artistic collaboration of <strong>Purnendu Dey and Dibyendu Dey</strong>. The <strong>final 2026 theme is not yet confirmed</strong> and will be updated when official information is available.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/trikonpark001",
				},
				{ type: LinkType.PHONE, value: "9831079620" },
				{ type: LinkType.EMAIL, value: "info@trikonparkdurgotsab.in" },
			],
			transit: 2,
		},
		{
			order: 7,
			type: ItemType.PANDAL,
			area: Area.PATULI,
			title: "Vaishnavghata Jatra Shuru Sangha",
			distance: 83,
			gmapsUrl:
				"https://www.google.com/maps/place/Baishnabghata+Yatra+Shuru+Sangha/@22.4706735,88.374376,802m/data=!3m1!1e3!4m6!3m5!1s0x3a02710a21494a3d:0x45dd40db6757a4b4!8m2!3d22.4707001!4d88.3778402!16s%2Fg%2F1w4f6j9c?entry=tts&g_ep=EgoyMDI2MDgxOS4wIPu8ASoASAFQAw%3D%3D&skid=7edbaec7-2466-4a52-86ed-ed6f68d6549c",
			htmlDesc:
				"This Garia-area community puja brings the route into the Vaishnavghata-Garia neighbourhood circuit. It represents the more local, community-driven side of Kolkata's Puja culture, while <strong>specific 2026 theme and creative-team details are still awaiting reliable confirmation</strong>.",
			links: [],
		},
		{
			order: 8,
			type: ItemType.PANDAL,
			area: Area.GARIA,
			title: "Kendua Shanti Sangha",
			distance: 450,
			gmapsUrl:
				"https://www.google.com/maps/place/Kendua+Shanti+Sangha/@22.4705161,88.3765913,1610m/data=!3m1!1e3!4m6!3m5!1s0x3a02710b2646bc05:0x467e1acc52723dad!8m2!3d22.471984!4d88.381501!16s%2Fg%2F1tjhw1y4?entry=tts&g_ep=EgoyMDI2MDgxOS4wIPu8ASoASAFQAw%3D%3D&skid=f62c4edc-a1a9-44a8-8afc-6fa1e3b7da14",
			htmlDesc:
				"Celebrating its <strong>53rd year in 2026</strong>, this puja presents the theme <strong>'Aishwari' (ঐশ্বরী)</strong>. The artistic vision is led by curators <strong>Avik Sen and Shuvam Banerjee</strong>, alongside a creative team that includes <strong>Tapan Majhi, Sudip Sanyal, Iman, and Akash</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/kenduashantisanghadurgapuja",
				},
				{
					type: LinkType.INSTAGRAM,
					value: "https://www.instagram.com/shantisangha",
				},
				{ type: LinkType.PHONE, value: "03324620093" },
				{ type: LinkType.EMAIL, value: "shantisanghakendua@gmail.com" },
			],
			transit: 3,
		},
		{
			order: 9,
			type: ItemType.PANDAL,
			area: Area.NAKTALA,
			title: "Naktala Udayan Sangha",
			distance: 450,
			gmapsUrl:
				"https://www.google.com/maps/place/Naktala+Udayan+Sangha/@22.4742942,88.3572734,1609m/data=!3m1!1e3!4m6!3m5!1s0x3a027107aa5b8751:0x9999c634b4271a8f!8m2!3d22.4742929!4d88.3665898!16s%2Fg%2F1hm67fx6z?entry=tts&g_ep=EgoyMDI2MDgxOS4wIPu8ASoASAFQAw%3D%3D&skid=fac41e86-5508-41ad-ac63-fafa0964145c",
			htmlDesc:
				"Marking its <strong>40th year in 2026</strong>, this well-known Naktala puja has announced <strong>&ldquo;Kaal Dhwani&rdquo;</strong> as its 2026 banner concept, with artwork by <strong>Anirban Das (Anirban Pandalwala)</strong>. The banner has been revealed ahead of the main installation, but the <strong>final pandal theme is still officially unconfirmed</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/profile.php?id=100064769104330",
				},
				{
					type: LinkType.INSTAGRAM,
					value: "https://www.instagram.com/naktala.udayansangha",
				},
				{ type: LinkType.EMAIL, value: "udayansangha@gmail.com" },
			],
			transit: 4,
			lunch: true,
		},
		{
			order: 10,
			type: ItemType.PANDAL,
			area: Area.KUDGHAT,
			title: "Putiyari Club",
			distance: 500,
			gmapsUrl:
				"https://www.google.com/maps/place/Putiary+Club/@22.479082,88.3418124,492m/data=!3m1!1e3!4m6!3m5!1s0x3a02708d573d3c0b:0x2daa100825dbb91e!8m2!3d22.47995!4d88.3432042!16s%2Fg%2F1tftvcqs?entry=tts&g_ep=EgoyMDI2MDgxOS4wIPu8ASoASAFQAw%3D%3D&skid=ca4fc091-5aa1-4c6f-9339-7288fc6aaab8",
			htmlDesc:
				"This neighbourhood puja forms part of the Haridevpur-Putiyari stretch of the Panchami route. It offers a chance to explore the area's community celebrations alongside the larger thematic pujas, while <strong>reliable information about the final 2026 theme and artist is still awaited</strong>.",
			links: [],
		},
		{
			order: 11,
			type: ItemType.PANDAL,
			area: Area.PASCHIM_PUTIARY,
			title: "Pally Unnayan Samiti",
			distance: 280,
			gmapsUrl:
				"https://www.google.com/maps/place/Pally+Unnayan+Samity/@22.478206,88.3382427,805m/data=!3m1!1e3!4m6!3m5!1s0x3a02708d17dd8eb5:0xdad7eac5c6f0b51!8m2!3d22.478206!4d88.3424768!16s%2Fg%2F1tg4v7sh?entry=tts&g_ep=EgoyMDI2MDgxOS4wIPu8ASoASAFQAw%3D%3D&skid=10c460a8-ac48-48bc-bfbe-28d44b747e44",
			htmlDesc:
				"Celebrating its <strong>72nd year</strong>, the 2026 presentation carries the theme <strong>'Prachalan' (প্রচলন)</strong>, exploring ideas around continuity and evolving customs. The concept is brought to life by a creative team including <strong>Avisek Bhattacharya, Kaustav, Azaan, Dipankar Dey, and Pradipta Karmakar</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/pusbppara",
				},
				{ type: LinkType.PHONE, value: "8697047854" },
				{ type: LinkType.EMAIL, value: "pusbppara@gmail.com" },
			],
		},
		{
			order: 12,
			type: ItemType.PANDAL,
			area: Area.HARIDEVPUR,
			title: "Haridevpur Adarsha Samiti Club",
			distance: 1100,
			gmapsUrl:
				"https://www.google.com/maps/place/Adarsha+Samiti+Club/@22.4769552,88.3306955,805m/data=!3m1!1e3!4m6!3m5!1s0x3a02708f6b1c4ce9:0xf669358176165cf8!8m2!3d22.475908!4d88.3347884!16s%2Fg%2F11g8v4d4j8?entry=tts&g_ep=EgoyMDI2MDgxOS4wIPu8ASoASAFQAw%3D%3D&skid=4282045b-d2f0-4815-9a45-fbb3b4076d84",
			htmlDesc:
				"Celebrating its <strong>58th year</strong>, this community puja is part of the long-running Haridevpur neighbourhood circuit. The 2026 theme is <strong>'Mrinmoyi' (মৃন্ময়ী)</strong>, conceptualised and executed by artist <strong>Chand Ratan Halder</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/haridevpuradarshasamity",
				},
				{ type: LinkType.PHONE, value: "7278387889" },
				{ type: LinkType.EMAIL, value: "haridevpuradarshasamity04@gmail.com" },
			],
		},
		{
			order: 13,
			type: ItemType.PANDAL,
			area: Area.HARIDEVPUR,
			title: "Haridevpur New Sporting Club",
			distance: 700,
			gmapsUrl:
				"https://www.google.com/maps/place/Haridevpur+New+Sporting+Club/@22.4778825,88.3310438,805m/data=!3m1!1e3!4m6!3m5!1s0x3a02708fd67defdd:0xea4eb942b5ef83f!8m2!3d22.4800684!4d88.3357882!16s%2Fg%2F11c32fkmmf?entry=tts&g_ep=EgoyMDI2MDgxOS4wIPu8ASoASAFQAw%3D%3D&skid=0a86c2ed-66db-4484-a89c-9fcd0f736be3",
			htmlDesc:
				"Celebrating its <strong>21st year</strong>, this neighbourhood puja within the Haridevpur circuit presents the 2026 theme <strong>'Harano Soisob, Kurano Sei Sob' (হারানো শৈশব, কুড়ানো সেই সব)</strong>, executed by artist <strong>Anil Gupta</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/haridevpurnewsporting.club.10",
				},
			],
		},
		{
			order: 14,
			type: ItemType.PANDAL,
			area: Area.HARIDEVPUR,
			title: "Ajeya Sanghati Club",
			distance: 290,
			gmapsUrl:
				"https://www.google.com/maps/place/Ajeya+Sanghati+Club/@22.4808596,88.3329427,805m/data=!3m1!1e3!4m6!3m5!1s0x3a027091e5eed5d1:0x7fc068a8d695b5ea!8m2!3d22.4808597!4d88.3377053!16s%2Fg%2F11bw7ck2mj?entry=tts&g_ep=EgoyMDI2MDgxOS4wIPu8ASoASAFQAw%3D%3D&skid=9215167c-88b5-42f4-b6a2-8c60683c88a5",
			htmlDesc:
				"Celebrating its <strong>66th year</strong>, this community celebration in the Haridevpur circuit presents the 2026 theme <strong>'Swatantra' (স্বতন্ত্র)</strong>. The artistic installation is envisioned by <strong>Thinkers</strong>, featuring an idol crafted by <strong>Arighna Saha</strong>, lighting design by <strong>Saikat Manna</strong>, and a background score by <strong>Debayan Banerjee</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/ajeyasanghati63",
				},
				{ type: LinkType.PHONE, value: "9038006178" },
				{ type: LinkType.EMAIL, value: "ajeyasanghati@gmail.com" },
			],
		},
		{
			order: 15,
			type: ItemType.PANDAL,
			area: Area.HARIDEVPUR,
			title: "Vivekananda Park Athletic Club",
			distance: 90,
			gmapsUrl:
				"https://www.google.com/maps/place/Vivekananda+Park+Athletic+Club+Durga+Puja+Ground/@22.4812775,88.3369581,83m/data=!3m1!1e3!4m6!3m5!1s0x3a027091e9ee4913:0xd3932648aea55adc!8m2!3d22.4813755!4d88.3373073!16s%2Fg%2F11cs4jf_xm!5m1!1e1?entry=tts&g_ep=EgoyMDI2MDkwMi4wIPu8ASoASAFQAw%3D%3D&skid=afe65d4f-0cdb-4836-9dac-dd76bd9619dc",
			htmlDesc:
				"Celebrating its <strong>56th year</strong>, this neighbourhood puja forms another stop in the Haridevpur cluster. The 2026 presentation carries the theme <strong>'Mrittika' (মৃত্তিকা)</strong>, with the creative vision executed by artist <strong>Mithun Datta</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/haridevpurvivacananda.park",
				},
				{
					type: LinkType.INSTAGRAM,
					value: "https://www.instagram.com/vivekananda_park_athletic_club",
				},
				{
					type: LinkType.YOUTUBE,
					value: "https://www.youtube.com/@vivekanandaparkathleticclub",
				},
				{ type: LinkType.EMAIL, value: "vpacharidevpur@gmail.com" },
			],
		},
		{
			order: 16,
			type: ItemType.PANDAL,
			area: Area.HARIDEVPUR,
			title: "Haridevpur 41 Palli",
			distance: 300,
			gmapsUrl:
				"https://www.google.com/maps/place/Haridevpur+41+Pally+Club/@22.4818484,88.3356354,805m/data=!3m1!1e3!4m6!3m5!1s0x3a02709181521d97:0xf1857bb9a5819e49!8m2!3d22.4827837!4d88.3387153!16s%2Fg%2F1thn3y5f?entry=tts&g_ep=EgoyMDI2MDgxOS4wIPu8ASoASAFQAw%3D%3D&skid=7b67f6cb-f6f0-4152-9a10-a4f0353faf08",
			htmlDesc:
				"Celebrating its <strong>69th year</strong>, this puja represents the community-driven character of Haridevpur's Durga Puja circuit and provides a convenient final stop before the route moves towards Behala. The 2026 presentation features the theme <strong>'Daito' (দ্বৈত)</strong>, with creative execution by artist <strong>Gauranga Kuilya</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/profile.php?id=61593339364824",
				},
				{ type: LinkType.WEBSITE, value: "https://www.41pally.org" },
				{ type: LinkType.PHONE, value: "9875683913" },
				{ type: LinkType.EMAIL, value: "41.pallyclub@gmail.com" },
			],
			transit: 5,
		},
		{
			order: 17,
			type: ItemType.PANDAL,
			area: Area.BEHALA,
			title: "Netaji Sarak Ancholik Adhibasi Brindo",
			distance: 350,
			gmapsUrl:
				"https://www.google.com/maps/place/Netaji+Sarak+Football+Ground/@22.4892412,88.3266619,805m/am=t/data=!3m1!1e3!4m6!3m5!1s0x3a02709854fcce6d:0xa5bc53d64c561975!8m2!3d22.4892409!4d88.3313827!16s%2Fg%2F11hcd8x121!5m1!1e1?entry=tts&g_ep=EgoyMDI2MDkxNi4wIPu8ASoASAFQAw%3D%3D&skid=e858d010-0fc9-4b54-8c94-0463ce2f8462",
			htmlDesc:
				"Celebrating its milestone <strong>50th year</strong>, the 2026 presentation features the theme <strong>'China' (চীন)</strong>, conceptualised and brought to life by <strong>Subho Sraboni</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/Netajisaraksarbojonin",
				},
				{ type: LinkType.PHONE, value: "9681447362" },
				{ type: LinkType.EMAIL, value: "shyamal.srpb@gmail.com" },
			],
			transit: 6,
		},
		{
			order: 18,
			type: ItemType.PANDAL,
			area: Area.BEHALA,
			title: "Barisha Players Corner",
			distance: 290,
			gmapsUrl:
				"https://www.google.com/maps/place/Behala+Player's+Corner+Durga+Puja/@22.4858436,88.2998163,3219m/data=!3m1!1e3!4m6!3m5!1s0x3a027a6e0797f0bb:0x67f287a97397de17!8m2!3d22.4858476!4d88.313717!16s%2Fg%2F11cs3fm3dt?entry=tts&g_ep=EgoyMDI2MDgxOS4wIPu8ASoASAFQAw%3D%3D&skid=d6e4e2bc-8e28-446d-9639-2d449f2c210d",
			htmlDesc:
				"Celebrating its <strong>54th year</strong>, this Behala-area community puja brings the Panchami route into the historic Barisha neighbourhood. The 2026 presentation features the theme <strong>'Evolution' (বিবর্তন)</strong>, with creative execution by artists <strong>Saurav Nag and Utpal Ghosh</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/BarishaPlayersCorner",
				},
				{ type: LinkType.PHONE, value: "9836888808" },
				{ type: LinkType.EMAIL, value: "barishaplayerscorner@rediffmail.com" },
			],
		},
		{
			order: 19,
			type: ItemType.PANDAL,
			area: Area.BEHALA,
			title: "Barisha Club",
			distance: 1000,
			gmapsUrl:
				"https://www.google.com/maps/place/Barisha+Club+Puja+Ground+and+Community+Hall/@22.4858436,88.2998163,3219m/data=!3m1!1e3!4m6!3m5!1s0x3a027a6fe9697123:0xe1530cae4fe5b431!8m2!3d22.4812859!4d88.3132412!16s%2Fg%2F1pp2tl9jp?entry=tts&g_ep=EgoyMDI2MDgxOS4wIPu8ASoASAFQAw%3D%3D&skid=39bb6e34-a5cd-43cc-8ddb-0de622be73eb",
			htmlDesc:
				"Celebrating its <strong>38th year</strong>, this long-standing name within the Barisha festive circuit adds an important community puja to the Behala route. The artistic execution is led by a creative team including <strong>Deep, Eshika, Saikat, and others</strong>, though the <strong>final 2026 theme is not yet confirmed</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/BarishaClub",
				},
				{ type: LinkType.WEBSITE, value: "https://barishaclub.com" },
				{ type: LinkType.PHONE, value: "9830124761" },
				{ type: LinkType.EMAIL, value: "barishaclub@gmail.com" },
			],
		},
		{
			order: 20,
			type: ItemType.PANDAL,
			area: Area.BEHALA,
			title: "Barisha Sarbojanin",
			distance: 650,
			gmapsUrl:
				"https://www.google.com/maps/place/Barisha+Sarbojonin/@22.4806671,88.3008648,1666m/data=!3m1!1e3!4m6!3m5!1s0x3a027a68a113ecfb:0xda8048281915bda3!8m2!3d22.4798533!4d88.3081233!16s%2Fg%2F11fy1kq4f4?entry=tts&g_ep=EgoyMDI2MDgxOS4wIPu8ASoASAFQAw%3D%3D&skid=4936b62e-1270-430c-91e9-c348878cb646",
			htmlDesc:
				"Celebrating its <strong>78th year</strong>, this community celebration continues the route through one of South-West Kolkata's important Barisha neighbourhoods. The 2026 presentation features the theme <strong>'80 te asio, 8 er tore' (৮০ তে আসিও ৮ এর তরে)</strong>, conceptualised by <strong>Bapai Sen</strong>, with an idol crafted by <strong>Tapan Maji</strong>, lighting design by <strong>Jayanta Das</strong>, and a background score by <strong>Raja Bhattacharya</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/Barishasarbojaninpage",
				},
				{ type: LinkType.PHONE, value: "9674999555" },
				{ type: LinkType.EMAIL, value: "barishasarbojanindurgotsab@gmail.com" },
			],
			transit: 7,
		},
		{
			order: 21,
			type: ItemType.PANDAL,
			area: Area.THAKURPUKUR,
			title: "Thakurpukur State Bank Park",
			distance: 56,
			gmapsUrl:
				"https://www.google.com/maps/place/State+Bank+Park/@22.4690077,88.3009315,1666m/data=!3m1!1e3!4m6!3m5!1s0x3a027a8a074c4ad3:0x567c947fef1f6a8f!8m2!3d22.4677772!4d88.3090707!16s%2Fg%2F1q5grjfsw?entry=tts&g_ep=EgoyMDI2MDgxOS4wIPu8ASoASAFQAw%3D%3D&skid=fd841201-5de7-4a3c-a2c9-5c8f50e0e93a",
			htmlDesc:
				"This Thakurpukur-area puja provides a compact stop after the Barisha section before the route moves towards Behala Bazar. The 2026 presentation features the theme <strong>'Coaliari' (কোলিয়ারি)</strong>, with concept and idol by <strong>Raju Sarkar</strong>, assisted by <strong>Pritam Pal</strong>. The installation is supported by research from <strong>Somnath Mondal</strong>, lighting design by <strong>Debabrata Maiti</strong>, and a background score by <strong>Sujoynil</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/statebankpark",
				},
				{
					type: LinkType.INSTAGRAM,
					value: "https://www.instagram.com/sbpark_sarbojonin",
				},
				{ type: LinkType.EMAIL, value: "sbparksarbajanin@gmail.com" },
			],
			transit: 8,
		},
		{
			order: 22,
			type: ItemType.PANDAL,
			area: Area.BEHALA,
			title: "Behala Friends Club",
			distance: 450,
			gmapsUrl:
				"https://www.google.com/maps/place/Behala+Friends'+Club/@22.5011315,88.3198731,201m/data=!3m1!1e3!4m6!3m5!1s0x3a027a0ef9bcd14d:0x73e8aabbc63c45a2!8m2!3d22.5013531!4d88.3198079!16s%2Fg%2F1pp2vbhgf!5m1!1e1?entry=tts&g_ep=EgoyMDI2MDkxNi4wIPu8ASoASAFQAw%3D%3D&skid=c15d02e4-6cc4-47b7-a2ee-23a4be512cea",
			htmlDesc:
				"Celebrating its <strong>61st year</strong>, this community puja located close to Behala Bazar makes for a convenient opening stop in the final Behala section of the route. The 2026 presentation features the theme <strong>'Suddhikoron' (শুদ্ধিকরণ)</strong>, conceptualised by <strong>Shitangshu</strong>, with an idol crafted by <strong>Minakshi Pal</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/behalafriends",
				},
				{ type: LinkType.EMAIL, value: "behalafriends@gmail.com" },
			],
		},
		{
			order: 23,
			type: ItemType.PANDAL,
			area: Area.BEHALA,
			title: "Behala Nutan Dal",
			distance: 180,
			gmapsUrl:
				"https://www.google.com/maps/place/Behala+Nutan+Dal/@22.5073293,88.3153296,1609m/data=!3m1!1e3!4m6!3m5!1s0x3a027a091884e2f5:0xeda7dc93f955e9f4!8m2!3d22.5002078!4d88.320287!16s%2Fg%2F11g9mfkbvz?entry=tts&g_ep=EgoyMDI2MDgxOS4wIPu8ASoASAFQAw%3D%3D&skid=0db90018-f8a3-4343-ac4b-1460924e32d4",
			htmlDesc:
				"Celebrating its <strong>61st year</strong>, this community puja located close to Behala Bazar makes for a convenient opening stop in the final Behala section of the route. The 2026 presentation features the theme <strong>'Parbon' (পার্বণ)</strong>, conceptualised by <strong>Somnath Tamli</strong>, with an idol crafted by <strong>Arighna Saha</strong> and a background score by <strong>Arpan Thakur Chakraborty</strong>.",
			links: [
				{ type: LinkType.FACEBOOK, value: "https://www.facebook.com/bndpujo" },
				{
					type: LinkType.INSTAGRAM,
					value: "https://www.instagram.com/behalanotundal",
				},
				{ type: LinkType.PHONE, value: "9830012407" },
				{ type: LinkType.EMAIL, value: "behalanutandal@gmail.com" },
			],
		},
		{
			order: 24,
			type: ItemType.PANDAL,
			area: Area.BEHALA,
			title: "Adarsha Pally",
			distance: 950,
			gmapsUrl:
				"https://www.google.com/maps/place/Adarsha+Pally/@22.5053271,88.320694,1609m/data=!3m1!1e3!4m6!3m5!1s0x3a0270a6935d64b9:0xa1ef113ea8156a6a!8m2!3d22.4998455!4d88.3277164!16s%2Fg%2F1q69w5w00?entry=tts&g_ep=EgoyMDI2MDgxOS4wIPu8ASoASAFQAw%3D%3D&skid=0d372218-522c-4d97-9461-7927814f4112",
			htmlDesc:
				"Celebrating its <strong>69th year</strong>, this neighbourhood puja adds another community celebration to the Behala circuit and extends the Panchami route beyond the major headline pandals. The <strong>final 2026 theme and artist details are not yet confirmed</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/behala.adarshapally",
				},
			],
		},
		{
			order: 25,
			type: ItemType.PANDAL,
			area: Area.BEHALA,
			title: "Behala Club Sarbojanin",
			distance: 1700,
			gmapsUrl:
				"https://www.google.com/maps/place/Behala+Club+Sarbojanin+Durgotsav+Committee/@22.5096288,88.3053947,1609m/data=!3m1!1e3!4m6!3m5!1s0x3a027a1ab5524559:0x402ace7b7e4059b4!8m2!3d22.5052597!4d88.3140807!16s%2Fg%2F11j007yzc1?entry=tts&g_ep=EgoyMDI2MDgxOS4wIPu8ASoASAFQAw%3D%3D&skid=b3740658-08bb-4d6b-89c5-732dfaac3fdf",
			htmlDesc:
				"The final pandal of the Panchami route brings the day to a close within Behala's extensive community Puja circuit. Its position makes it a natural final stop before the journey home. The 2026 presentation features the theme <strong>'Pujo Ebar Boro' (পুজো এবার বড়)</strong>, brought to life by a creative team including <strong>Bikram Dey, Chandranath Saha, and others</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/behalaclub",
				},
				{
					type: LinkType.INSTAGRAM,
					value: "https://www.instagram.com/behalaclub",
				},
				{
					type: LinkType.YOUTUBE,
					value: "https://www.youtube.com/@behalaclub",
				},
				{ type: LinkType.PHONE, value: "9051999614" },
				{ type: LinkType.EMAIL, value: "contactbehalaclub@gmail.com" },
			],
		},
		{
			order: 26,
			type: ItemType.PANDAL,
			area: Area.BEHALA,
			title: "Behala Young Men's Association",
			distance: 1500,
			gmapsUrl:
				"https://www.google.com/maps/place/Behala+Young+Mens+Association/@22.5069548,88.3143361,1609m/data=!3m1!1e3!4m6!3m5!1s0x3a0270a834aa7d5d:0x8293754529b5a2ea!8m2!3d22.5073293!4d88.3248569!16s%2Fg%2F1tg_7x5s!5m1!1e1?entry=tts&g_ep=EgoyMDI2MDkxNi4wIPu8ASoASAFQAw%3D%3D&skid=77ff549e-7551-4ced-b156-1fd3587b2894",
			htmlDesc:
				"Celebrating its <strong>77th year</strong>, the final pandal of the Panchami route brings the day to a close within Behala's extensive community Puja circuit. Its position makes it a natural final stop before the journey home. The 2026 presentation features the theme <strong>'Sonatoni Satattor' (সনাতনী সাতাত্তর)</strong>, conceptualised and executed by <strong>Team Sanatan Dinda</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/club.byma",
				},
				{ type: LinkType.PHONE, value: "9831656463" },
				{
					type: LinkType.EMAIL,
					value: "behalayoungmensassociation5@gmail.com",
				},
			],
			transit: 9,
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
					service: "a train",
					dest: Places.RAIL_STATIONS.BALLYGUNGE,
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
					distance: 260,
					dest: Places.BUS_STOPS.RAJDANGA_NABA_PALLY,
				},
				{ order: 2, medium: TransitMedium.BUS, dest: Places.BUS_STOPS.EKDALIA },
				{
					order: 3,
					medium: TransitMedium.WALK,
					distance: 240,
					dest: Places.BUS_STOPS.GARIAHAT_MORE,
				},
				{
					order: 4,
					medium: TransitMedium.BUS,
					dest: Places.BUS_STOPS.SANTOSHPUR_LAKE,
				},
			],
		},
		{
			index: 2,
			type: ItemType.TRANSIT,
			steps: [
				{
					order: 1,
					medium: TransitMedium.WALK,
					distance: 150,
					dest: Places.BUS_STOPS.SANTOSHPUR_BOTTOLA,
				},
				{
					order: 2,
					medium: TransitMedium.BUS,
					dest: Places.BUS_STOPS.SULEKHA_MORE,
				},
			],
		},
		{
			index: 3,
			type: ItemType.TRANSIT,
			steps: [
				{
					order: 1,
					medium: TransitMedium.WALK,
					distance: 110,
					dest: Places.BUS_STOPS.KK_DAS_COLLEGE,
				},
				{
					order: 2,
					medium: TransitMedium.BUS,
					dest: Places.BUS_STOPS.GARIA_NO_6_BUS_TERMINUS,
				},
				{
					order: 3,
					medium: TransitMedium.BUS,
					dest: Places.BUS_STOPS.ANANDA_ASHRAM,
				},
			],
		},
		{
			index: 4,
			type: ItemType.TRANSIT,
			steps: [
				{
					order: 1,
					medium: TransitMedium.WALK,
					distance: 450,
					dest: Places.METRO_STATIONS.GEETANJALI,
				},
				{
					order: 2,
					medium: TransitMedium.METRO,
					dest: Places.METRO_STATIONS.NETAJI,
				},
			],
		},
		{
			index: 5,
			type: ItemType.TRANSIT,
			steps: [
				{
					order: 1,
					medium: TransitMedium.WALK,
					distance: 550,
					dest: Places.BUS_STOPS.KARUNAMOYEE,
				},
				{
					order: 2,
					medium: TransitMedium.BUS,
					dest: Places.BUS_STOPS.MUCHIPARA,
				},
			],
		},
		{
			index: 6,
			type: ItemType.TRANSIT,
			steps: [
				{
					order: 1,
					medium: TransitMedium.WALK,
					distance: 350,
					prefix: "Walk back",
					dest: Places.BUS_STOPS.MUCHIPARA,
				},
				{
					order: 2,
					medium: TransitMedium.BUS,
					dest: Places.BUS_STOPS.BEHALA_CHOWRASTA,
				},
			],
		},
		{
			index: 7,
			type: ItemType.TRANSIT,
			steps: [
				{
					order: 1,
					medium: TransitMedium.WALK,
					distance: 450,
					dest: Places.BUS_STOPS.SAKHERBAZAR,
				},
				{
					order: 2,
					medium: TransitMedium.BUS,
					dest: Places.BUS_STOPS.PANCHANANTALA,
				},
			],
		},
		{
			index: 8,
			type: ItemType.TRANSIT,
			steps: [
				{
					order: 1,
					medium: TransitMedium.WALK,
					distance: 500,
					dest: Places.METRO_STATIONS.THAKURPUKUR,
				},
				{
					order: 2,
					medium: TransitMedium.METRO,
					dest: Places.METRO_STATIONS.BEHALA_BAZAR,
				},
			],
		},
		{
			index: 9,
			type: ItemType.TRANSIT,
			steps: [
				{
					order: 1,
					medium: TransitMedium.WALK,
					distance: 650,
					dest: Places.BUS_STOPS.AJANTA_CINEMA,
				},
				{
					order: 2,
					medium: TransitMedium.CAB,
					dest: Places.RAIL_STATIONS.BALLY_HALT,
				},
			],
		},
	],
};
