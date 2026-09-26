import { Area, ItemType, LinkType, Places, TransitMedium } from "./commons.js";

export const saptami = {
	title: "Saptami",
	dateLabel: "18 OCTOBER · SUNDAY",
	meetup: {
		time: "9:00 AM",
		place: Places.RAIL_STATIONS.BALLY,
	},
	lunchStop: {
		type: ItemType.LUNCH,
		title: "Raj Hotel & Restaurant",
		distance: 500,
		fromName: "Ekdalia Evergreen",
		gmapsUrl:
			"https://www.google.com/maps/place/Raj+Hotel+%26+Restaurant/@22.520626,88.3706761,201m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a0276d25290dac3:0x5b6f972f0ba35ff7!8m2!3d22.520626!4d88.3713198!16s%2Fg%2F1tkrk6hw!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
	},
	stops: [
		{
			order: 1,
			type: ItemType.PANDAL,
			area: Area.BALLYGUNGE,
			title: "Deshapriya Park",
			distance: 850,
			gmapsUrl:
				"https://www.google.com/maps/place/Deshapriya+Park/@22.518878,88.3519183,804m/data=!3m1!1e3!4m6!3m5!1s0x3a027761da29a45d:0x9da1834309e5d8aa!8m2!3d22.5185819!4d88.3534607!16s%2Fg%2F11hdvs_mrc!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc:
				"Celebrating its <strong>89th year</strong>, the 2026\n\t\t\t\t\t\t\t\t\t\tpresentation takes the form of a\n\t\t\t\t\t\t\t\t\t\t<strong>fictional temple</strong>, featuring multiple\n\t\t\t\t\t\t\t\t\t\tspires, a grand staircase and classical architectural\n\t\t\t\t\t\t\t\t\t\tdetailing. The idol is being created by\n\t\t\t\t\t\t\t\t\t\t<strong>Sanatan Rudra Pal</strong>, with a special lighting\n\t\t\t\t\t\t\t\t\t\tpresentation planned to add to the visual experience.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/Deshapriyaparkdurgotsab",
				},
				{
					type: LinkType.EMAIL,
					value: "deshapriyaparkdurgotsab2012@gmail.com",
				},
			],
			transit: 0,
			isPreviousTransit: true,
		},
		{
			order: 2,
			type: ItemType.PANDAL,
			area: Area.BALLYGUNGE,
			title: "Tridhara Sammilani",
			distance: 600,
			gmapsUrl:
				"https://www.google.com/maps/place/Tridhara+Sammilani/@22.5195286,88.3554398,804m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a02772daca1f653:0xdbf590e266b01219!8m2!3d22.5195286!4d88.3554398!16s%2Fg%2F1pztdvrcx!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc:
				"Celebrating its <strong>80th year</strong>, this distinctive\n\t\t\t\t\t\t\t\t\t\tSouth Kolkata puja is known for blending tradition with\n\t\t\t\t\t\t\t\t\t\tcontemporary artistic expression. The 2026 presentation\n\t\t\t\t\t\t\t\t\t\tfeatures the officially announced theme\n\t\t\t\t\t\t\t\t\t\t<strong>'Surasur' (সুরাসুর)</strong>, brought to life by\n\t\t\t\t\t\t\t\t\t\tartist <strong>Gauranga Kuilya</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/Tridharaakalbodhan",
				},
				{
					type: LinkType.INSTAGRAM,
					value: "https://www.instagram.com/tridhara_akalbodhan",
				},
				{ type: LinkType.WEBSITE, value: "https://www.tridhara.org" },
				{ type: LinkType.PHONE, value: "8777032919" },
				{ type: LinkType.EMAIL, value: "tridharaakalbodhan1947@gmail.com" },
			],
		},
		{
			order: 3,
			type: ItemType.PANDAL,
			area: Area.BALLYGUNGE,
			title: "Ballygunge Cultural Association",
			distance: 1000,
			gmapsUrl:
				"https://www.google.com/maps/place/Ballygunge+Cultural+Association+Durga+Puja/@22.5162122,88.3558059,804m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a0277004f58677f:0x6b0e23aa0c96a063!8m2!3d22.5162122!4d88.3558059!16s%2Fg%2F11lv48xwd_!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc:
				"Celebrating its <strong>76th year</strong>, the 2026\n\t\t\t\t\t\t\t\t\t\tpresentation features the theme\n\t\t\t\t\t\t\t\t\t\t<strong>'Connection' (যোজন)</strong>. Known for its\n\t\t\t\t\t\t\t\t\t\tdistinctive South Kolkata style blending tradition with\n\t\t\t\t\t\t\t\t\t\tcontemporary artistic expression, the concept is led by\n\t\t\t\t\t\t\t\t\t\tartist <strong>Sushanta Shibani Paul</strong>, supported by\n\t\t\t\t\t\t\t\t\t\ta creative team including Adhir Pal, Lakshman Roy, Suman\n\t\t\t\t\t\t\t\t\t\tMaity, Shirsak Paul, Samir Mondal, Tapan Maji, Gopal Mondal,\n\t\t\t\t\t\t\t\t\t\tBikas Sardar, Tuhin Das, Nepal Maity, Goutam Das, and Tokan\n\t\t\t\t\t\t\t\t\t\tDas.",
			links: [
				{ type: LinkType.FACEBOOK, value: "https://www.facebook.com/BCA1951" },
				{ type: LinkType.PHONE, value: "9836155564" },
			],
		},
		{
			order: 4,
			type: ItemType.PANDAL,
			area: Area.BALLYGUNGE,
			title: "Samaj Sebi Sangha",
			distance: 120,
			gmapsUrl:
				"https://www.google.com/maps/place/Samaj+Sebi+Sangha/@22.5157187,88.3562819,805m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a02710006ffef83:0xac6faefbaf19d165!8m2!3d22.5157187!4d88.3562819!16s%2Fg%2F11lv47z9p2!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc:
				"Celebrating its <strong>81st year</strong>, the Puja pays\n\t\t\t\t\t\t\t\t\t\ttribute to Uttam Kumar's birth centenary through\n\t\t\t\t\t\t\t\t\t\t<strong>'Mahapujoy Mahanayak' (মহাপুজোয় মহানায়ক)</strong>.\n\t\t\t\t\t\t\t\t\t\tThe presentation recreates the nostalgia of\n\t\t\t\t\t\t\t\t\t\t<strong>1970s-80s Kolkata</strong>, bringing together film\n\t\t\t\t\t\t\t\t\t\tposters, photographs, memorabilia and stories from the\n\t\t\t\t\t\t\t\t\t\tlegendary actor's life. <strong>Bishwanath Dey</strong> is\n\t\t\t\t\t\t\t\t\t\tthe theme-maker, with the idol by\n\t\t\t\t\t\t\t\t\t\t<strong>Arighna Saha</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/samajsebisangha",
				},
				{
					type: LinkType.INSTAGRAM,
					value: "https://www.instagram.com/samaj_sebi",
				},
				{ type: LinkType.PHONE, value: "9830035979" },
				{ type: LinkType.EMAIL, value: "arijitmaitra5@gmail.com" },
			],
		},
		{
			order: 5,
			type: ItemType.PANDAL,
			area: Area.GARIAHAT,
			title: "Hindustan Park",
			distance: 750,
			gmapsUrl:
				"https://www.google.com/maps/place/Hindusthan+Park+Sarbojanin+Durgotsab+Committee/@22.5176792,88.3620716,804m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a02772a91fd37a1:0x1ab320f3b9dc32dd!8m2!3d22.5176792!4d88.3620716!16s%2Fg%2F11c2lchv5c!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc:
				"Celebrating its <strong>96th year</strong>, the 2026\n\t\t\t\t\t\t\t\t\t\tpresentation features the theme\n\t\t\t\t\t\t\t\t\t\t<strong>'Spark' (স্ফুলিঙ্গ)</strong>, placing emphasis on\n\t\t\t\t\t\t\t\t\t\tBengali craftsmanship and intricate handwork. The\n\t\t\t\t\t\t\t\t\t\tinstallation is brought to life by a creative team including\n\t\t\t\t\t\t\t\t\t\t<strong>Malay Subhomoy, Premendu Bikash Chaki, and Dipamoy\n\t\t\t\t\t\t\t\t\t\t\tDas</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/profile.php?id=100057277397392",
				},
				{ type: LinkType.PHONE, value: "9831598966" },
				{ type: LinkType.EMAIL, value: "hindustanpark@gmail.com" },
			],
		},
		{
			order: 6,
			type: ItemType.PANDAL,
			area: Area.GARIAHAT,
			title: "Gariahat Hindustan Club",
			distance: 450,
			gmapsUrl:
				"https://www.google.com/maps/place/Gariahat+Hindusthan+Club/@22.5201571,88.3609098,804m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a02772a4e8c11cb:0x28051ded4beda059!8m2!3d22.5201571!4d88.3609098!16s%2Fg%2F11cr_ltlrt!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc:
				"Celebrating its <strong>64th year</strong>, this\n\t\t\t\t\t\t\t\t\t\tlong-running Gariahat Puja continues its history of\n\t\t\t\t\t\t\t\t\t\ttraditional and colourful artistic presentations. The 2026\n\t\t\t\t\t\t\t\t\t\tpresentation features the theme\n\t\t\t\t\t\t\t\t\t\t<strong>'Durga Dalan' (দুর্গা দালান)</strong>,\n\t\t\t\t\t\t\t\t\t\tconceptualised by creative artist\n\t\t\t\t\t\t\t\t\t\t<strong>Raju Sarkar</strong>, supported by lighting design\n\t\t\t\t\t\t\t\t\t\tfrom <strong>Ashok Das and Chitralekha Pal</strong>, and\n\t\t\t\t\t\t\t\t\t\tdecorations by <strong>Golden Decorator</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/gariahat.hindusthanclub",
				},
				{
					type: LinkType.INSTAGRAM,
					value: "https://www.instagram.com/gariahathindusthanclub",
				},
				{ type: LinkType.PHONE, value: "9051336557" },
			],
		},
		{
			order: 7,
			type: ItemType.PANDAL,
			area: Area.GARIAHAT,
			title: "Singhi Park",
			distance: 700,
			gmapsUrl:
				"https://www.google.com/maps/place/Singhi+Park+Sarbojanin+Durga+Puja+Committee/@22.5209489,88.3627281,804m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a0276d5f6fa97af:0x310ce7fdfb83ca22!8m2!3d22.5209489!4d88.3627281!16s%2Fg%2F11b67g9mw4!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc:
				"Celebrating its <strong>85th year</strong>, this established\n\t\t\t\t\t\t\t\t\t\tGariahat Puja maintains a strong community and traditional\n\t\t\t\t\t\t\t\t\t\tidentity. The 2026 presentation features the theme\n\t\t\t\t\t\t\t\t\t\t<strong>'Bostario' (বস্তারীয়)</strong>, conceptualised by\n\t\t\t\t\t\t\t\t\t\t<strong>Ankita Bandyopadhyay</strong>, with an idol crafted\n\t\t\t\t\t\t\t\t\t\tby <strong>Pradip Rudra Pal</strong> and a background score\n\t\t\t\t\t\t\t\t\t\tby <strong>Subhen Chattopadhyay</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value:
						"https://www.facebook.com/SinghiParkSarbojaninDurgaPujaCommittee",
				},
				{
					type: LinkType.INSTAGRAM,
					value: "https://www.instagram.com/singhipark",
				},
				{ type: LinkType.EMAIL, value: "info@singhipark.in" },
			],
		},
		{
			order: 8,
			type: ItemType.PANDAL,
			area: Area.GARIAHAT,
			title: "Ekdalia Evergreen",
			distance: 350,
			gmapsUrl:
				"https://www.google.com/maps/place/Ekdalia+Evergreen+Club/@22.5212187,88.3665629,804m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a0276d417b26201:0x220c3a4dbd7f651a!8m2!3d22.5212187!4d88.3665629!16s%2Fg%2F1pp2txnxj!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc:
				"Celebrating its <strong>84th year</strong>, the Puja retains\n\t\t\t\t\t\t\t\t\t\tits iconic <strong>Sabeki idol</strong> while taking\n\t\t\t\t\t\t\t\t\t\tinspiration from Gujarat's magnificent\n\t\t\t\t\t\t\t\t\t\t<strong>Somnath Temple</strong> for the 2026 pandal. The\n\t\t\t\t\t\t\t\t\t\ttemple-inspired architecture provides the year's major\n\t\t\t\t\t\t\t\t\t\tvisual attraction, while the traditional idol remains at the\n\t\t\t\t\t\t\t\t\t\theart of the Puja.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/ekdaliaevergreen",
				},
				{ type: LinkType.PHONE, value: "9831095622" },
				{ type: LinkType.EMAIL, value: "evergreenclub43.ekdalia@gmail.com" },
			],
			lunch: true,
			transit: 1,
		},
		{
			order: 9,
			type: ItemType.PANDAL,
			area: Area.ULTADANGA,
			title: "Karbagan",
			distance: 850,
			gmapsUrl:
				"https://www.google.com/maps/place/Karbagan+Sarbojanin+Durgotsab+Committee/@22.5951861,88.3836376,201m/data=!3m1!1e3!4m6!3m5!1s0x3a02761671a8ad37:0x304bf77a07aa76e5!8m2!3d22.595241!4d88.3842775!16s%2Fg%2F11c54291q3!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc:
				"Celebrating its <strong>79th year</strong>, the 2026\n\t\t\t\t\t\t\t\t\t\tpresentation for this Ultadanga puja features the theme\n\t\t\t\t\t\t\t\t\t\t<strong>'Jay Bhawani' (জয় ভবানী)</strong>, brought to life\n\t\t\t\t\t\t\t\t\t\tby <strong>Saurav Saha and Team</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/profile.php?id=100073478138148",
				},
			],
		},
		{
			order: 10,
			type: ItemType.PANDAL,
			area: Area.ULTADANGA,
			title: "Pallyshree",
			distance: 100,
			gmapsUrl:
				"https://www.google.com/maps/place/Ultadanga+Pallyshree+Durga+Puja/@22.5958272,88.3827102,402m/data=!3m1!1e3!4m6!3m5!1s0x3a027616593953f5:0x48ddab9db01bd44e!8m2!3d22.5958298!4d88.3844134!16s%2Fg%2F11c521vc3l!5m1!1e1?entry=tts&g_ep=EgoyMDI2MDgxOS4wIPu8ASoASAFQAw%3D%3D&skid=e502aa45-cf7a-4bad-ad96-a4eeef5824e9",
			htmlDesc:
				"Celebrating its <strong>78th year</strong>, the 2026\n\t\t\t\t\t\t\t\t\t\tpresentation features the theme\n\t\t\t\t\t\t\t\t\t\t<strong>'Olot Palot' (ওলট পালট)</strong>. The artistic\n\t\t\t\t\t\t\t\t\t\tdirection is advised by <strong>Malay and Subhamay</strong>,\n\t\t\t\t\t\t\t\t\t\twith the visual setup and execution collaboratively handled\n\t\t\t\t\t\t\t\t\t\tby <strong>Utsav Hut</strong> alongside\n\t\t\t\t\t\t\t\t\t\t<strong>Naba Kumar Pal, Subimal Das, and Amarnath Das</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/profile.php?id=100063896414260",
				},
				{ type: LinkType.PHONE, value: "9830561561" },
			],
		},
		{
			order: 11,
			type: ItemType.PANDAL,
			area: Area.ULTADANGA,
			title: "Telengabagan",
			distance: 350,
			gmapsUrl:
				"https://www.google.com/maps/place/Telengabagan+Durgotsab/@22.5949469,88.3849412,101m/data=!3m1!1e3!4m6!3m5!1s0x3a0277004562a859:0x10daaf5102d04f58!8m2!3d22.5949468!4d88.3853031!16s%2Fg%2F11whdljshf!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc:
				"Celebrating its <strong>61st year</strong>, the 2026\n\t\t\t\t\t\t\t\t\t\tpresentation features the theme\n\t\t\t\t\t\t\t\t\t\t<strong>'Tilottamar Olinder Iti Kotha' (তিলোত্তমার অলিন্দের\n\t\t\t\t\t\t\t\t\t\t\tইতিকথা)</strong>. The concept is envisioned by <strong>Prasanta</strong>,\n\t\t\t\t\t\t\t\t\t\twith the idol crafted by <strong>Parimal Pal</strong>, and\n\t\t\t\t\t\t\t\t\t\tmusic composed by\n\t\t\t\t\t\t\t\t\t\t<strong>Anupam Mistri and Sanjay Sarkar</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/telengabagansarbojonin",
				},
			],
		},
		{
			order: 12,
			type: ItemType.PANDAL,
			area: Area.ULTADANGA,
			title: "Jagarani Sangha",
			distance: 260,
			gmapsUrl:
				"https://www.google.com/maps/place/JAGORANI+SANGHA+DURGA+PUJA+PANDAL/@22.59351,88.3845229,402m/data=!3m1!1e3!4m6!3m5!1s0x3a0277ad1e63f327:0xaf50f6fc071645e7!8m2!3d22.5929868!4d88.3848974!16s%2Fg%2F11j01zkdvt!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc:
				"Celebrating its <strong>33rd year</strong>, the 2026\n\t\t\t\t\t\t\t\t\t\tpresentation for this Ultadanga puja features the theme\n\t\t\t\t\t\t\t\t\t\t<strong>'Tulir tane Simontini' (তুলির টানে সীমন্তিনী)</strong>. The overall concept and arrangement are envisioned by\n\t\t\t\t\t\t\t\t\t\t<strong>Paritosh Talukdar</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/UltadangaJagaraniSanghaOfficial",
				},
				{ type: LinkType.PHONE, value: "9874438160" },
				{ type: LinkType.EMAIL, value: "ultadangajagaranisangha@gmail.com" },
			],
		},
		{
			order: 13,
			type: ItemType.PANDAL,
			area: Area.ULTADANGA,
			title: "Surirbagan",
			distance: 400,
			gmapsUrl:
				"https://www.google.com/maps/place/Surir+Bagan+Sarbojanin+Durgapuja/@22.5948381,88.3842146,804m/data=!3m1!1e3!4m6!3m5!1s0x3a0276114e0d1abb:0xa54c65b6ecffc475!8m2!3d22.5949974!4d88.3876018!16s%2Fg%2F1q67czm2c!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc:
				"A neighbourhood Puja in the Bidhannagar area with an\n\t\t\t\t\t\t\t\t\t\testablished community presence. A reliable\n\t\t\t\t\t\t\t\t\t\t<strong>2026 theme or artist announcement has not yet been\n\t\t\t\t\t\t\t\t\t\t\tconfirmed</strong>, so no unsupported creative details are included here.",
			links: [],
		},
		{
			order: 14,
			type: ItemType.PANDAL,
			area: Area.ULTADANGA,
			title: "Sangrami Sangha",
			distance: 1200,
			gmapsUrl:
				"https://www.google.com/maps/place/Ultadanga+Sangrami+Club+Durga+Pujo/@22.5909721,88.3932635,402m/data=!3m1!1e3!4m6!3m5!1s0x3a0277003b2d919f:0xf2f11badd7547e93!8m2!3d22.5905068!4d88.3952877!16s%2Fg%2F11wjq3whkf!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc:
				"Celebrating its <strong>64th year</strong>, the 2026\n\t\t\t\t\t\t\t\t\t\tpresentation for this Ultadanga puja features the theme\n\t\t\t\t\t\t\t\t\t\t<strong>'Roktokorobi' (রক্তকরবী)</strong>. The concept is\n\t\t\t\t\t\t\t\t\t\tenvisioned by <strong>Arindam and Tanushree</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/profile.php?id=100083241553607",
				},
				{
					type: LinkType.INSTAGRAM,
					value: "https://www.instagram.com/ultadangasangrami",
				},
				{ type: LinkType.PHONE, value: "6290987035" },
				{ type: LinkType.EMAIL, value: "sangrami1966@gmail.com" },
			],
			transit: 2,
		},
		{
			order: 15,
			type: ItemType.PANDAL,
			area: Area.NAGER_BAZAR,
			title: "Yuba Sangha",
			distance: 400,
			gmapsUrl:
				"https://www.google.com/maps/place/Yuba+Sangha/@22.621507,88.4107941,804m/data=!3m1!1e3!4m6!3m5!1s0x39f89e1b22a91d47:0xa6783326cf99a33!8m2!3d22.6202911!4d88.4125333!16s%2Fg%2F1q69kh06s!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc:
				"Stepping into a large-scale thematic presentation for the\n\t\t\t\t\t\t\t\t\t\tfirst time, this puja is generating significant hype and\n\t\t\t\t\t\t\t\t\t\tenthusiasm among pandal hoppers. The 2026 presentation\n\t\t\t\t\t\t\t\t\t\tfeatures the theme\n\t\t\t\t\t\t\t\t\t\t<strong>'Ek Pukur Bhalobasa' (এক পুকুর ভালোবাসা)</strong>,\n\t\t\t\t\t\t\t\t\t\tconceptualised and brought to life by renowned artist\n\t\t\t\t\t\t\t\t\t\t<strong>Bhabotosh Sutar</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/yubasanghatelipukur",
				},
				{
					type: LinkType.INSTAGRAM,
					value: "https://www.instagram.com/yubasangha1957",
				},
				{
					type: LinkType.YOUTUBE,
					value: "https://www.youtube.com/@YubasanghaClub",
				},
				{ type: LinkType.PHONE, value: "7003993519" },
				{ type: LinkType.EMAIL, value: "yubasangha1957@gmail.com" },
			],
			transit: 3,
		},
		{
			order: 16,
			type: ItemType.PANDAL,
			area: Area.BARANAGAR,
			title: "Bandhudal Sporting Club",
			distance: 150,
			gmapsUrl:
				"https://www.google.com/maps/place/Sinthi+More+Circus+%26+Mela+Ground/@22.6327969,88.3757876,804m/data=!3m1!1e3!4m6!3m5!1s0x39f89d942e3f5b2b:0xbe0f39589c504f4c!8m2!3d22.6319693!4d88.3778641!16s%2Fg%2F1tfh31q2!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc:
				"Celebrating its <strong>65th year</strong>, Bandhudal\n\t\t\t\t\t\t\t\t\t\tSporting Club presents the 2026 theme\n\t\t\t\t\t\t\t\t\t\t<strong>Lotus Temple</strong>. The creative concept is\n\t\t\t\t\t\t\t\t\t\tenvisioned by <strong>Shibsankar Das</strong> and executed\n\t\t\t\t\t\t\t\t\t\tby <strong>Bidyut Pal</strong>, featuring an idol crafted by\n\t\t\t\t\t\t\t\t\t\t<strong>Mintu Pal</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/bandhudalsportingclub",
				},
				{
					type: LinkType.YOUTUBE,
					value: "https://www.youtube.com/@bandhudalsportingclub",
				},
				{ type: LinkType.PHONE, value: "8910482723" },
				{ type: LinkType.EMAIL, value: "bandhudalsportingclub@gmail.com" },
			],
		},
		{
			order: 17,
			type: ItemType.PANDAL,
			area: Area.BARANAGAR,
			title: "Karmi Sangha",
			distance: 650,
			gmapsUrl:
				"https://www.google.com/maps/place/Nainan+Para+Karmisangha+Club/@22.6351084,88.3740195,402m/data=!3m1!1e3!4m6!3m5!1s0x39f89d83e594b555:0xafb805f37d54fabb!8m2!3d22.6348839!4d88.3753798!16s%2Fg%2F11h6pyzbj8!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc:
				"Celebrating its <strong>75th year</strong>, the 2026\n\t\t\t\t\t\t\t\t\t\tpresentation for this Ultadanga puja features the theme\n\t\t\t\t\t\t\t\t\t\t<strong>'Swarnabasar' (স্বর্ণবাসর)</strong>. The concept and\n\t\t\t\t\t\t\t\t\t\tidol are crafted by <strong>Indrajit Poddar</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/karmisangha1",
				},
				{ type: LinkType.PHONE, value: "9836122236" },
				{ type: LinkType.EMAIL, value: "karmisangha@gmail.com" },
			],
		},
		{
			order: 18,
			type: ItemType.PANDAL,
			area: Area.BARANAGAR,
			title: "Barangar Netaji Colony Lowland",
			distance: 1000,
			gmapsUrl:
				"https://www.google.com/maps/place/Durga+Bhavan+(Baranagar+Lowland+Durga+Puja)/@22.6354717,88.3833351,804m/data=!3m2!1e3!4b1!4m6!3m5!1s0x39f89deaa0477eb1:0x5b239c3ddad5d35e!8m2!3d22.6354717!4d88.3833351!16s%2Fg%2F11g6xp1m9h!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc:
				"Celebrating its <strong>5th year</strong>, this relatively\n\t\t\t\t\t\t\t\t\t\tyoung but rapidly rising Durga Puja in Baranagar is already\n\t\t\t\t\t\t\t\t\t\tmaking its mark on the local circuit. While the\n\t\t\t\t\t\t\t\t\t\t<strong>final 2026 theme is not yet confirmed</strong>,\n\t\t\t\t\t\t\t\t\t\tongoing preparations reveal beautiful and intricate plywood\n\t\t\t\t\t\t\t\t\t\tstructures currently taking shape.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/nclowlanddurgotsab",
				},
				{ type: LinkType.PHONE, value: "9470500704" },
			],
			transit: 4,
		},
	],
	transits: [
		{
			index: 0,
			steps: [
				{
					order: 1,
					medium: TransitMedium.TRAIN,
					src: Places.RAIL_STATIONS.BALLY,
					dest: Places.RAIL_STATIONS.HOWRAH,
				},
				{
					order: 2,
					medium: TransitMedium.WALK,
					distance: 400,
					dest: Places.BUS_STOPS.HOWRAH,
				},
				{
					order: 3,
					medium: TransitMedium.BUS,
					dest: Places.BUS_STOPS.RASHBEHARI_CROSSING,
				},
			],
		},
		{
			index: 1,
			steps: [
				{
					order: 1,
					medium: TransitMedium.WALK,
					distance: 60,
					dest: Places.RAIL_STATIONS.BALLYGUNGE,
				},
				{
					order: 2,
					medium: TransitMedium.TRAIN,
					dest: Places.RAIL_STATIONS.SEALDAH,
				},
				{
					order: 3,
					medium: TransitMedium.TRAIN,
					dest: Places.RAIL_STATIONS.BIDHANNAGAR_ROAD,
				},
			],
		},
		{
			index: 2,
			steps: [
				{
					order: 1,
					medium: TransitMedium.WALK,
					distance: 600,
					prefix: "Walk back",
					dest: Places.RAIL_STATIONS.BIDHANNAGAR_ROAD,
				},
				{
					order: 2,
					medium: TransitMedium.TRAIN,
					dest: Places.RAIL_STATIONS.DUMDUM,
				},
				{
					order: 3,
					medium: TransitMedium.BUS,
					dest: Places.BUS_STOPS.NAGERBAZAR,
				},
			],
		},
		{
			index: 3,
			steps: [
				{
					order: 1,
					medium: TransitMedium.WALK,
					distance: 400,
					prefix: "Walk back",
					dest: Places.BUS_STOPS.NAGERBAZAR,
				},
				{
					order: 2,
					medium: TransitMedium.BUS,
					dest: Places.BUS_STOPS.SINTHIR_MORE,
				},
			],
		},
		{
			index: 4,
			steps: [
				{
					order: 1,
					medium: TransitMedium.WALK,
					distance: 650,
					dest: Places.BUS_STOPS.PALPARA,
				},
				{
					order: 1,
					medium: TransitMedium.BUS,
					dest: Places.BUS_STOPS.BALLY_HALT,
				},
			],
		},
	],
};
