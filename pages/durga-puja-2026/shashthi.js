import { Area, ItemType, LinkType, Places, TransitMedium } from "./commons.js";

export const shashthi = {
	title: "Shashthi",
	dateLabel: "17 OCTOBER · SATURDAY",
	meetup: { time: "9:00 AM", place: Places.RAIL_STATIONS.SONARPUR },
	lunchStop: {
		type: ItemType.LUNCH,
		title: "Bhojohori Manna",
		distance: 450,
		description:
			"Lunch stop before the afternoon circuit. 🚶. 450 m · ⏱️ 9 min\n\t\t\t\t\t\t\t\t\t\tfrom Kashi Bose Lane.",
		options: [
			{
				title: "Google Maps ↗",
				gmapsUrl:
					"https://www.google.com/maps/place/Bhojohori+Manna/@22.5948062,88.3630916,1608m/data=!3m2!1e3!5s0x3a027630ce5f94fb:0xd0af07f0dbb78048!4m6!3m5!1s0x3a02762fecc3467b:0x25b854cff05f0b54!8m2!3d22.5941046!4d88.3708561!16s%2Fg%2F11hbbxnnzy!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			},
		],
		fromName: "Kashi Bose Lane",
		gmapsUrl:
			"google.com/maps/place/Bhojohori+Manna/@22.5948062,88.3630916,1098m/data=!3m2!1e3!5s0x3a027630ce5f94fb:0xd0af07f0dbb78048!4m6!3m5!1s0x3a02762fecc3467b:0x25b854cff05f0b54!8m2!3d22.5940786!4d88.3708418!16s%2Fg%2F11hbbxnnzy?entry=tts&g_ep=EgoyMDI2MDcxNS4wIPu8ASoASAFQAw%3D%3D&skid=c43f5815-3aed-4202-8689-2c4c1d2524d8",
	},
	stops: [
		{
			order: 1,
			type: ItemType.PANDAL,
			area: Area.BAGBAZAR,
			title: "Bagbazar Sarbojanin",
			distance: 300,
			gmapsUrl:
				"https://www.google.com/maps/place/(Bagbazar+Sarbojanin+Durga+Puja+Mandap)/@22.6045484,88.365572,100m/data=!3m1!1e3!4m6!3m5!1s0x3a02770037e0911d:0xfa847e12d9e36882!8m2!3d22.60478!4d88.3661767!16s%2Fg%2F11vs6f9h3d!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc:
				"Celebrating its <strong>108th year</strong>, this iconic\n\t\t\t\t\t\t\t\t\t\theritage puja is renowned for its traditional\n\t\t\t\t\t\t\t\t\t\t<strong>Sabeki idol</strong> and timeless cultural\n\t\t\t\t\t\t\t\t\t\tsignificance. Eschewing modern themes, it continues to\n\t\t\t\t\t\t\t\t\t\tpreserve the authentic spirit and grandeur of Kolkata's\n\t\t\t\t\t\t\t\t\t\tclassic Durga Puja celebrations.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value:
						"https://www.facebook.com/BaghbazarSarbojaninDurgotsavExhibition",
				},
				{ type: LinkType.WEBSITE, value: "https://www.bsde.org" },
				{ type: LinkType.PHONE, value: "9830704299" },
				{ type: LinkType.EMAIL, value: "info@bsde.org" },
			],
			transit: 0,
			isPreviousTransit: true,
		},
		{
			order: 2,
			type: ItemType.PANDAL,
			area: Area.SHYAMBAZAR,
			title: "Jagat Mukherjee Park",
			distance: 750,
			gmapsUrl:
				"https://www.google.com/maps/place/Jagat+Mukherjee+Park/@22.5995488,88.36574,115m/data=!3m1!1e3!4m6!3m5!1s0x3a02763275b71687:0xd927b406f878b566!8m2!3d22.5994903!4d88.3660388!16s%2Fg%2F1hbpwp_px!5m1!1e1?entry=tts&g_ep=EgoyMDI2MDkwMi4wIPu8ASoASAFQAw%3D%3D&skid=c6c6a053-4718-497d-a31f-3114fa8594aa",
			htmlDesc:
				"Celebrating its <strong>90th year</strong>, this North\n\t\t\t\t\t\t\t\t\t\tKolkata puja features the theme\n\t\t\t\t\t\t\t\t\t\t<strong>'Shankar Nama' (শঙ্কর নামা)</strong>, narrated by\n\t\t\t\t\t\t\t\t\t\t<strong>Avijit Ghatak</strong>, with an idol crafted by\n\t\t\t\t\t\t\t\t\t\t<strong>Amal Paul</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/jagatmukherjipark",
				},
				{ type: LinkType.WEBSITE, value: "https://www.jagatmukherjeepark.com" },
				{
					type: LinkType.YOUTUBE,
					value: "https://www.youtube.com/@jagatmukherjeepark",
				},
				{ type: LinkType.PHONE, value: "8240037520" },
				{ type: LinkType.EMAIL, value: "jagatmukherjeepark@gmail.com" },
			],
		},
		{
			order: 3,
			type: ItemType.PANDAL,
			area: Area.KUMARTULI,
			title: "Kumartuli Sarbojanin",
			distance: 500,
			gmapsUrl:
				"https://www.google.com/maps/place/Kumortuli+Sarbojonin+Durgotsab/@22.6001009,88.3593147,804m/data=!3m1!1e3!4m6!3m5!1s0x3a0277001e105093:0x8f098b9d8d1dd314!8m2!3d22.6011655!4d88.362723!16s%2Fg%2F11wh8zq0b7?entry=tts&g_ep=EgoyMDI2MDcxNS4wIPu8ASoASAFQAw%3D%3D&skid=760926ac-47c3-46bd-99db-69417d1225c6",
			htmlDesc:
				"Celebrating its <strong>96th year</strong>, the 2026\n\t\t\t\t\t\t\t\t\t\tpresentation features the theme\n\t\t\t\t\t\t\t\t\t\t<strong>'Mon Diye Dekhun' (মন দিয়ে দেখুন)</strong>,\n\t\t\t\t\t\t\t\t\t\tconceptualised by <strong>Manas Roy</strong>, with an idol\n\t\t\t\t\t\t\t\t\t\tcrafted by <strong>Dipankar Pal</strong>, lighting by\n\t\t\t\t\t\t\t\t\t\t<strong>S B Electric</strong>, and pandal decoration by\n\t\t\t\t\t\t\t\t\t\t<strong>S B Decorator</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/kumartulisarbojaninofficial",
				},
				{
					type: LinkType.INSTAGRAM,
					value: "https://www.instagram.com/kumartulisarbojaninofficial",
				},
				{ type: LinkType.WEBSITE, value: "https://kumartulysarbojanin.com" },
				{ type: LinkType.PHONE, value: "9804145557" },
				{ type: LinkType.EMAIL, value: "kumartulysarbojanin@gmail.com" },
			],
		},
		{
			order: 4,
			type: ItemType.PANDAL,
			area: Area.KUMARTULI,
			title: "Kumartuli Park",
			distance: 300,
			gmapsUrl:
				"https://www.google.com/maps/place/Kumartuli+Park/@22.5992933,88.3609198,201m/data=!3m1!1e3!4m6!3m5!1s0x3a0277000c8891f7:0x4711ffcb309c38e2!8m2!3d22.5990285!4d88.3614858!16s%2Fg%2F11wg4ngv1d!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc:
				"Celebrating its <strong>34th year</strong>, the 2026\n\t\t\t\t\t\t\t\t\t\tpresentation features the theme\n\t\t\t\t\t\t\t\t\t\t<strong>'Gangotri theke Ganga' (গঙ্গোত্রী থেকে গঙ্গা)</strong>, tracing the journey of the Ganga from its Himalayan\n\t\t\t\t\t\t\t\t\t\torigin towards the Bay of Bengal. The concept, brought to\n\t\t\t\t\t\t\t\t\t\tlife by <strong>Subol Pal</strong>, gives the pandal a\n\t\t\t\t\t\t\t\t\t\tstrong connection with India's cultural and spiritual\n\t\t\t\t\t\t\t\t\t\trelationship with the river.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/profile.php?id=100069907448030",
				},
				{ type: LinkType.PHONE, value: "7980001710" },
				{ type: LinkType.EMAIL, value: "kpsdc1993@gmail.com" },
			],
		},
		{
			order: 5,
			type: ItemType.PANDAL,
			area: Area.HATKHOLA,
			title: "Hatkhola Gosaipara Sarbojanin",
			distance: 250,
			gmapsUrl:
				"https://www.google.com/maps/place/Hatkhola+Gosaipara+Sarbojonin+Durgotsab/@22.5990953,88.359304,804m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a0277cdf3355eb5:0xd0892eea6fbc23c9!8m2!3d22.5990953!4d88.359304!16s%2Fg%2F11d_7szq9z!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc:
				"Celebrating its <strong>90th year</strong>, this\n\t\t\t\t\t\t\t\t\t\tneighbourhood puja in the historic North Kolkata belt is\n\t\t\t\t\t\t\t\t\t\tknown for its local Puja atmosphere and place within the\n\t\t\t\t\t\t\t\t\t\t<strong>Kumortuli-Hatkhola circuit</strong>. The 2026\n\t\t\t\t\t\t\t\t\t\tpresentation features the theme\n\t\t\t\t\t\t\t\t\t\t<strong>'Punoragomon' (পুনরাগমন)</strong>, conceptualised by\n\t\t\t\t\t\t\t\t\t\t<strong>Ajit Pal</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/HGSDS1936",
				},
			],
		},
		{
			order: 6,
			type: ItemType.PANDAL,
			area: Area.AHIRITOLA,
			title: "Ahiritola Sarbojanin",
			distance: 800,
			gmapsUrl:
				"https://www.google.com/maps/place/Ahiritola+Sarbojonin+Durgotsab+Samity/@22.5948383,88.3571698,804m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a02770008600949:0xf299ef5d3fc9b912!8m2!3d22.5948383!4d88.3571698!16s%2Fg%2F11wjlr5702!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc:
				"Celebrating its <strong>87th year</strong>, the 2026\n\t\t\t\t\t\t\t\t\t\tpresentation follows a\n\t\t\t\t\t\t\t\t\t\t<strong>Sabeki/traditional direction</strong> with the theme\n\t\t\t\t\t\t\t\t\t\t<strong>'Shoroter Prothom Spondon' (শরতের প্রথম স্পন্দন)</strong>. The concept and creation are handled by\n\t\t\t\t\t\t\t\t\t\t<strong>Manas Das</strong>, featuring an idol crafted by\n\t\t\t\t\t\t\t\t\t\t<strong>Subrata Mridha</strong> and lighting designed by\n\t\t\t\t\t\t\t\t\t\t<strong>Soumen Chakraborty</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/AHIRITOLASARBOJANIN",
				},
				{
					type: LinkType.INSTAGRAM,
					value: "https://www.instagram.com/ahiritolasarbojanin",
				},
				{ type: LinkType.PHONE, value: "9831598300" },
				{ type: LinkType.EMAIL, value: "ahiritolasdurgotsabskol@gmail.com" },
			],
		},
		{
			order: 7,
			type: ItemType.PANDAL,
			area: Area.JORABAGAN,
			title: "Jorabagan Chatra Sanghati",
			distance: 500,
			gmapsUrl:
				"https://www.google.com/maps/place/Jorabagan+Chhatra+sanghati/@22.5916623,88.3531274,804m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a02774659945a9b:0x5448344fc4d9ba4f!8m2!3d22.5916623!4d88.3557023!16s%2Fg%2F11gp1z8jwx!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc:
				"Celebrating its <strong>78th year</strong>, the 2026 presentation for Jorabagan Chatra Sanghati features the theme <strong>'Nobo Probha' (নবপ্রভা)</strong>. The concept is envisioned by <strong>Ratnadip Pramanik</strong>, with the idol crafted by <strong>Abhishek Bhattacharya</strong>. The presentation is supported by music from <strong>Debdeep Banik</strong>, lighting by <strong>Somnath Ghosh</strong>, sound by <strong>Barun Dutta</strong>, and decorations by <strong>Biswajit Biswas</strong>",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/jorabaganchhatra.sanghati",
				},
				{
					type: LinkType.INSTAGRAM,
					value: "https://www.instagram.com/jorabagan__chhatra_sanghati",
				},
			],
		},
		{
			order: 8,
			type: ItemType.PANDAL,
			area: Area.AHIRITOLA,
			title: "Ahiritola Jubak Brinda",
			distance: 850,
			gmapsUrl:
				"https://www.google.com/maps/place/AHIRITOLA+JUBAK+BRINDA+SARBOJONIN+SARODOTSAB/@22.5946791,88.3602117,804m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a027725480b7939:0xfcc6e76fb58b5884!8m2!3d22.5946791!4d88.3602117!16s%2Fg%2F11hdrwgyd0!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc:
				"Celebrating its <strong>56th year</strong>, this\n\t\t\t\t\t\t\t\t\t\tlong-running Ahiritola puja features the theme\n\t\t\t\t\t\t\t\t\t\t<strong>'Sesh Belay Rabir Alo' (শেষ বেলায় রবির আলো)</strong>, with art direction by <strong>Abhijit Ghatak</strong> and\n\t\t\t\t\t\t\t\t\t\tresearch by <strong>Susobhan Adhikari</strong>. The 2026\n\t\t\t\t\t\t\t\t\t\tpresentation is brought to life by a dedicated team\n\t\t\t\t\t\t\t\t\t\tincluding\n\t\t\t\t\t\t\t\t\t\t<strong>Somnath, Sudarshan, Sukumar, Samir, Bapi, Baburam, Sumon,\n\t\t\t\t\t\t\t\t\t\t\tand Prasanta</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/ahiritolajubakbrinda",
				},
				{
					type: LinkType.INSTAGRAM,
					value: "https://www.instagram.com/ahiritola_jubak_brinda1971",
				},
				{ type: LinkType.PHONE, value: "9883065346" },
				{ type: LinkType.EMAIL, value: "assajb@gmail.com" },
			],
			transit: 1,
		},
		{
			order: 9,
			type: ItemType.PANDAL,
			area: Area.CHORBAGAN,
			title: "Chorbagan Sarbojanin",
			distance: 240,
			gmapsUrl:
				"https://www.google.com/maps/place/CHOREBAGAN+SARBOJANIN+DURGOTSAB+SAMITY/@22.5834844,88.3628423,101m/data=!3m1!1e3!4m6!3m5!1s0x3a02764b30bc3abf:0xa451fb88706bf8fb!8m2!3d22.5834284!4d88.3635965!16s%2Fg%2F11stvdfpr5!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc:
				"Celebrating its <strong>91st year</strong>, the 2026\n\t\t\t\t\t\t\t\t\t\tpresentation features the theme\n\t\t\t\t\t\t\t\t\t\t<strong>'Beyond Sound - অরব'</strong>, conceptualised by\n\t\t\t\t\t\t\t\t\t\tlistener <strong>Sushanta Shibani Paul</strong>. This\n\t\t\t\t\t\t\t\t\t\thistoric North Kolkata puja is brought to life by a\n\t\t\t\t\t\t\t\t\t\tdedicated creative team including\n\t\t\t\t\t\t\t\t\t\t<strong>Adhir Pal, Sujata Kar Saha, Lakshman Roy, Tapan Maji,\n\t\t\t\t\t\t\t\t\t\t\tSuman Maity, Shirshak Paul, Nandadulal Adhikary, Nepal\n\t\t\t\t\t\t\t\t\t\t\tMaity, Ashok Roy Karmakar, Suvendu Guin, and Tokan\n\t\t\t\t\t\t\t\t\t\t\tDas</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/profile.php?id=61592332442890",
				},
				{
					type: LinkType.INSTAGRAM,
					value: "https://www.instagram.com/chorebagansarbojaninofficial",
				},
				{ type: LinkType.PHONE, value: "9073980535" },
				{
					type: LinkType.EMAIL,
					value: "chorebagansarbojaninofficial@gmail.com",
				},
			],
			transit: 2,
		},
		{
			order: 10,
			type: ItemType.PANDAL,
			area: Area.MANIKTALA,
			title: "Maniktala Chalta Bagan Lohapatty",
			distance: 240,
			gmapsUrl:
				"https://www.google.com/maps/place/Maniktala+Chaltabagan+Lohapatty+Durga+Puja+Committee/@22.5848905,88.3715554,101m/data=!3m1!1e3!4m6!3m5!1s0x3a02779e94bb4087:0x66e73dad2ff4e1b0!8m2!3d22.5848905!4d88.3721509!16s%2Fg%2F11j1m37504!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc:
				"Celebrating its <strong>84th year</strong>, the 2026\n\t\t\t\t\t\t\t\t\t\tpresentation features the theme\n\t\t\t\t\t\t\t\t\t\t<strong>'Aditi' (অদিতি)</strong>, brought to life by\n\t\t\t\t\t\t\t\t\t\tcreative artists <strong>Pallab and Arpan</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/chaltabagan",
				},
				{
					type: LinkType.WEBSITE,
					value: "http://manicktallachaltabaganlohapattydurgapuja.com",
				},
			],
		},
		{
			order: 11,
			type: ItemType.PANDAL,
			area: Area.MANIKTALA,
			title: "Lalabagan Sarbojonin",
			distance: 800,
			gmapsUrl:
				"https://www.google.com/maps/place/লালাবাগান+সর্বজনীন+পূজা+গ্রাউন্ড/@22.5873617,88.3744003,804m/data=!3m1!1e3!4m6!3m5!1s0x3a02764750e35027:0xec10aa5af490d2ab!8m2!3d22.5873616!4d88.3768746!16s%2Fg%2F11b7p_gjtv!5m1!1e1?entry=tts&g_ep=EgoyMDI2MDkwOS4wIPu8ASoASAFQAw%3D%3D&skid=fb39b560-6da9-4327-8c5a-0d038b8729d6",
			htmlDesc:
				"Celebrating its <strong>79th year</strong>, this well-known\n\t\t\t\t\t\t\t\t\t\tManiktala area puja features the theme\n\t\t\t\t\t\t\t\t\t\t<strong>'Purush Manei Dayitto' (পুরুষ মানেই দায়িত্ব)</strong>, with arrangement and concept by\n\t\t\t\t\t\t\t\t\t\t<strong>Babusona</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value:
						"https://www.facebook.com/Sammilita.Lalabagan.Sarbojanin.Durgotsav.Committee",
				},
				{ type: LinkType.X, value: "https://x.com/S_Lalabagan" },
				{ type: LinkType.PHONE, value: "8910047936" },
				{ type: LinkType.EMAIL, value: "sammilita.lalabagan@gmail.com" },
			],
		},
		{
			order: 12,
			type: ItemType.PANDAL,
			area: Area.MANIKTALA,
			title: "Lalabagan Nabankur",
			distance: 50,
			gmapsUrl:
				"https://www.google.com/maps/place/Lalabagan+Nabankur+Durga+Puja+Pandal+entrance+gate/@22.5875607,88.3743587,804m/data=!3m1!1e3!4m6!3m5!1s0x3a02770026d8bcad:0xa9e9419ef4a43e88!8m2!3d22.5883732!4d88.3767567!16s%2Fg%2F11wj5n69q3!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc:
				"Celebrating its <strong>67th year</strong>, this well-known\n\t\t\t\t\t\t\t\t\t\tManiktala area puja features the theme\n\t\t\t\t\t\t\t\t\t\t<strong>'শিকড় - a historic root'</strong>. The 2026\n\t\t\t\t\t\t\t\t\t\tpresentation is brought to life by a creative team including\n\t\t\t\t\t\t\t\t\t\t<strong>Susobhon, Debraj, Rohan, Riku, Chitralekh, and\n\t\t\t\t\t\t\t\t\t\t\tBampai</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/lalabagannabankurofficial",
				},
				{
					type: LinkType.INSTAGRAM,
					value: "https://www.instagram.com/lalabagannabankur_official",
				},
				{ type: LinkType.PHONE, value: "9163031118" },
				{ type: LinkType.EMAIL, value: "lalabagannabankur1961@gmail.com" },
			],
		},
		{
			order: 13,
			type: ItemType.PANDAL,
			area: Area.GOURIBARI,
			title: "Gouriberia Sarbojonin",
			distance: 800,
			gmapsUrl:
				"https://www.google.com/maps/place/Gouriberia+Sarbojanin+Durgotsab+O+Pradarshani/@22.5915219,88.365696,1608m/data=!3m1!1e3!4m6!3m5!1s0x3a02763c2fefbfff:0xdd24579ce736458!8m2!3d22.5945449!4d88.3792087!16s%2Fg%2F11fylwnn84!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc:
				"Celebrating its <strong>93rd year</strong>, this well-known\n\t\t\t\t\t\t\t\t\t\tManiktala area puja features the theme\n\t\t\t\t\t\t\t\t\t\t<strong>'Bankim' (বঙ্কিম)</strong>. The 2026 presentation is\n\t\t\t\t\t\t\t\t\t\tconceptualised by <strong>Madhurima Bhattacharya</strong>,\n\t\t\t\t\t\t\t\t\t\twith an idol crafted by <strong>Sanatan Rudra Pal</strong>,\n\t\t\t\t\t\t\t\t\t\tbackground music by <strong>Saikat Deb</strong>, and\n\t\t\t\t\t\t\t\t\t\tlighting directed by <strong>Kunal Pathak</strong>.",
			links: [
				{ type: LinkType.FACEBOOK, value: "https://www.facebook.com/GSDOP" },
				{ type: LinkType.PHONE, value: "9331003711" },
				{ type: LinkType.EMAIL, value: "info@gouriberia.com" },
			],
			transit: 4,
		},
		{
			order: 14,
			type: ItemType.PANDAL,
			area: Area.HATIBAGAN,
			title: "Kashi Bose Lane",
			distance: 550,
			gmapsUrl:
				"https://www.google.com/maps/place/Kashi+Bose+Lane+Durga+Puja+Committee/@22.590898,88.3665361,804m/data=!3m2!1e3!5s0x3a027630ce5f94fb:0xd0af07f0dbb78048!4m6!3m5!1s0x3a027636f4aba21b:0xd56a6b40b1520547!8m2!3d22.5908979!4d88.3689174!16s%2Fg%2F11csqf42nw!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc:
				"Celebrating its <strong>89th year</strong>, the specific\n\t\t\t\t\t\t\t\t\t\ttheme for the 2026 presentation has not been disclosed yet.\n\t\t\t\t\t\t\t\t\t\tThe overall concept and planning are being helmed by\n\t\t\t\t\t\t\t\t\t\t<strong>Anirban Das</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/kashiboselanedurgapujasamity",
				},
				{ type: LinkType.WEBSITE, value: "https://www.kashiboselane.com" },
				{ type: LinkType.PHONE, value: "8777094525" },
				{ type: LinkType.EMAIL, value: "kashiboselane@gmail.com" },
			],
			lunch: true,
		},
		{
			order: 15,
			type: ItemType.PANDAL,
			area: Area.HATIBAGAN,
			title: "Hatibagan Sarbojanin",
			distance: 170,
			gmapsUrl:
				"https://www.google.com/maps/place/Hatibagan+Sarbojonin/@22.5944256,88.3726899,201m/data=!3m2!1e3!5s0x3a027630ce5f94fb:0xd0af07f0dbb78048!4m6!3m5!1s0x3a027630b1e30443:0x78837359e84d7bc7!8m2!3d22.5943863!4d88.3720004!16s%2Fg%2F11c58gr_xh!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc:
				"Celebrating its <strong>92nd year</strong>, this\n\t\t\t\t\t\t\t\t\t\trecognisable North Kolkata puja features the theme\n\t\t\t\t\t\t\t\t\t\t<strong>'Rhythmless Orderless' (ছন্দছাড়া ছন্নছাড়া)</strong>. The 2026 presentation is brought to life by a creative\n\t\t\t\t\t\t\t\t\t\tteam including\n\t\t\t\t\t\t\t\t\t\t<strong>Rabin Roy, Surajit Pal, Ayan Mukherjee, Nandadulal\n\t\t\t\t\t\t\t\t\t\t\tAdhikari, Lakshman Roy, and Suman Maity</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/HatibaganSarbojaninDurgotsav",
				},
				{
					type: LinkType.INSTAGRAM,
					value: "https://www.instagram.com/hatibagan_sarbojanin_durgotsav",
				},
				{ type: LinkType.PHONE, value: "9433052274" },
				{ type: LinkType.EMAIL, value: "hatibagansarbojonin@gmail.com" },
			],
		},
		{
			order: 16,
			type: ItemType.PANDAL,
			area: Area.HATIBAGAN,
			title: "Nalin Sarkar Street",
			distance: 270,
			gmapsUrl:
				"https://www.google.com/maps/place/Nalin+sarkar+street+durga+puja/@22.5944002,88.370625,804m/data=!3m2!1e3!5s0x3a027630ce5f94fb:0xd0af07f0dbb78048!4m6!3m5!1s0x3a02770073edf853:0x3b8ff953c1aeb8e3!8m2!3d22.5945442!4d88.3743283!16s%2Fg%2F11xzwjphwj!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc:
				"Celebrating its <strong>94th year</strong>, the 2026\n\t\t\t\t\t\t\t\t\t\tpresentation features the theme\n\t\t\t\t\t\t\t\t\t\t<strong>'Jololipi' (জললিপি)</strong>. The concept evokes the\n\t\t\t\t\t\t\t\t\t\tidea of a script formed in water, creating a poetic\n\t\t\t\t\t\t\t\t\t\tconnection between water, memory, and expression, brought to\n\t\t\t\t\t\t\t\t\t\tlife by <strong>Team Sanatan Dinda</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value:
						"https://www.facebook.com/NalinSarkarStreetSarbojoninDurgotsab",
				},
				{
					type: LinkType.INSTAGRAM,
					value: "https://www.instagram.com/streetnalinsarkar",
				},
				{
					type: LinkType.YOUTUBE,
					value: "https://www.youtube.com/@nalinsarkarstreetsarbojani5976",
				},
				{ type: LinkType.PHONE, value: "9830241410" },
				{ type: LinkType.EMAIL, value: "n3sd17@gmail.com" },
			],
		},
		{
			order: 17,
			type: ItemType.PANDAL,
			area: Area.HATIBAGAN,
			title: "North Tridhara",
			distance: 290,
			gmapsUrl:
				"https://www.google.com/maps/place/North+Tridhara+Durga+Puja/@22.5958155,88.3733659,201m/data=!3m1!1e3!4m6!3m5!1s0x3a02779677298fb9:0x9473a4b994b8d3cc!8m2!3d22.5958155!4d88.3745568!16s%2Fg%2F11gl3y_hhy!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc:
				"A North Kolkata neighbourhood puja included in the Hatibagan\n\t\t\t\t\t\t\t\t\t\tcircuit. Reliable information confirming a specific\n\t\t\t\t\t\t\t\t\t\t<strong>2026 theme or artist</strong> is not currently\n\t\t\t\t\t\t\t\t\t\tavailable, so this stop is kept intentionally general rather\n\t\t\t\t\t\t\t\t\t\tthan attributing an unverified concept to the committee.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/NorthTridharaclub",
				},
				{ type: LinkType.PHONE, value: "9836637777" },
				{ type: LinkType.EMAIL, value: "tridhara.club1950@gmail.com" },
			],
		},
		{
			order: 18,
			type: ItemType.PANDAL,
			area: Area.HATIBAGAN,
			title: "Hatibagan Nabinpally",
			distance: 350,
			gmapsUrl:
				"https://www.google.com/maps/place/Hatibagan+NabinPally+Durga+Puja/@22.5956128,88.3725817,804m/data=!3m2!1e3!5s0x3a027630ce5f94fb:0xd0af07f0dbb78048!4m6!3m5!1s0x3a02770052163975:0x3bfe3dd2d2182a67!8m2!3d22.5959523!4d88.3735085!16s%2Fg%2F11ltwwcbzl!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc:
				"Celebrating its <strong>93rd year</strong>, this\n\t\t\t\t\t\t\t\t\t\tlong-running Hatibagan-area puja forms an integral part of\n\t\t\t\t\t\t\t\t\t\tthe traditional North Kolkata circuit. The 2026 presentation\n\t\t\t\t\t\t\t\t\t\tfeatures the theme\n\t\t\t\t\t\t\t\t\t\t<strong>'Hashi Khushi Pujo - Choto Thakar Boro Moja' (হাসি খুশি\n\t\t\t\t\t\t\t\t\t\t\tপুজো - ছোট থাকার বড় মজা)</strong>, conceptualised by <strong>Shankar Pal</strong>, with an\n\t\t\t\t\t\t\t\t\t\tidol crafted by <strong>Arighna Saha</strong>, lighting by\n\t\t\t\t\t\t\t\t\t\t<strong>Dipankar Dey</strong>, and music by\n\t\t\t\t\t\t\t\t\t\t<strong>Gautam Ghosh</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/nabinpally.hatibagan",
				},
				{
					type: LinkType.YOUTUBE,
					value: "https://www.youtube.com/@hatibagan-nabinpally",
				},
				{ type: LinkType.PHONE, value: "9831220088" },
				{ type: LinkType.EMAIL, value: "hatibagan.nabinpally@gmail.com" },
			],
		},
		{
			order: 19,
			type: ItemType.PANDAL,
			area: Area.HATIBAGAN,
			title: "Sikdar Bagan",
			distance: 200,
			gmapsUrl:
				"https://www.google.com/maps/place/Sikdar+Bagan+Durga+Puja/@22.596485,88.3704104,402m/data=!3m1!1e3!4m6!3m5!1s0x3a0277007ded3faf:0x9800f918c0a72fcf!8m2!3d22.596625!4d88.3721388!16s%2Fg%2F11wqs5z38q!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc:
				"Celebrating its <strong>114th year</strong>, the 2026 presentation for Sikdar Bagan features the theme <strong>'Paanche Panchoban' (পাঁচে পঞ্চবাণ)</strong>. The concept is envisioned by <strong>Bibhas Mukherjee</strong>, with the idol crafted by <strong>Santan Pal</strong>. The presentation is further enhanced by background music from <strong>Mallar Ghosh</strong> and lighting by <strong>Ashok Haldar</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/sikdarbagandurgotsov",
				},
				{
					type: LinkType.INSTAGRAM,
					value: "https://www.instagram.com/sikdarbagansadharandurgotsov",
				},
				{
					type: LinkType.YOUTUBE,
					value: "https://www.youtube.com/@sikdarbagandurgotsov1913",
				},
				{ type: LinkType.PHONE, value: "9903905896" },
				{ type: LinkType.EMAIL, value: "sikdarbagandurgotsov@gmail.com" },
			],
		},
		{
			order: 20,
			type: ItemType.PANDAL,
			area: Area.SOVABAZAR,
			title: "Sovabazar Rajbari",
			distance: 650,
			gmapsUrl:
				"https://www.google.com/maps/place/Sovabazar+Rajbari/@22.5962643,88.362616,804m/data=!3m2!1e3!5s0x3a027630ce5f94fb:0xd0af07f0dbb78048!4m6!3m5!1s0x3a027633ccbc0001:0x91c63cb1189b5816!8m2!3d22.5962644!4d88.3673797!16s%2Fm%2F0j7h_09!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc:
				"Celebrating its <strong>269th year</strong>, this iconic\n\t\t\t\t\t\t\t\t\t\tbonedi bari (household) puja was established in\n\t\t\t\t\t\t\t\t\t\t<strong>1757 by Raja Nabakrishna Deb</strong>. Held in the\n\t\t\t\t\t\t\t\t\t\tgrand Nat Mandap, it is renowned for its traditional\n\t\t\t\t\t\t\t\t\t\t<strong>Ek-chala sabeki idol</strong>, ancient family\n\t\t\t\t\t\t\t\t\t\trituals, and a rich heritage that has hosted historical\n\t\t\t\t\t\t\t\t\t\tfigures from Lord Clive to Rabindranath Tagore.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/sovabazar.rajbari.official",
				},
				{ type: LinkType.PHONE, value: "7595985168" },
				{ type: LinkType.EMAIL, value: "sovabazarrajbari@yahoo.com" },
			],
			transit: 3,
		},
	],
	transits: [
		{
			index: 0,
			steps: [
				{
					order: 1,
					medium: TransitMedium.CAB,
					src: Places.RAIL_STATIONS.SONARPUR,
					dest: Places.BUS_STOPS.BAGBAZAR_ROAD,
				},
			],
		},
		{
			index: 1,
			steps: [
				{
					order: 1,
					medium: TransitMedium.BUS,
					src: Places.BUS_STOPS.SOVABAZAR,
					dest: Places.BUS_STOPS.JORASANKO_THAKURBARI,
				},
			],
		},
		{
			index: 2,
			steps: [
				{
					order: 1,
					medium: TransitMedium.BUS,
					src: Places.BUS_STOPS.RAM_MANDIR,
					dest: Places.BUS_STOPS.CHALTABAGAN,
				},
			],
		},
		{
			index: 3,
			steps: [
				{
					order: 1,
					medium: TransitMedium.WALK,
					distance: 220,
					dest: Places.BUS_STOPS.JAIPURIA_COLLEGE,
				},
				{
					order: 2,
					medium: TransitMedium.CAB,
					dest: Places.RAIL_STATIONS.SONARPUR,
				},
			],
		},
		{
			index: 4,
			steps: [
				{
					order: 1,
					medium: TransitMedium.WALK,
					distance: 170,
					dest: Places.BUS_STOPS.GOURIBARI,
				},
				{
					order: 2,
					medium: TransitMedium.BUS,
					dest: Places.BUS_STOPS.GREY_STREET,
				},
			],
		},
	],
};
