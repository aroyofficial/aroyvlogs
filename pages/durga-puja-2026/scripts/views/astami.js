import { Area, ItemType, LinkType, Places, TransitMedium } from "../commons.js";

export const astami = {
	title: "Astami",
	dateLabel: "19 OCTOBER · MONDAY",
	meetup: {
		time: "4:00 PM",
		place: Places.RAIL_STATIONS.RAMRAJATALA,
	},
	lunchStop: null,
	stops: [
		{
			order: 1,
			type: ItemType.PANDAL,
			area: Area.KHIDIRPUR,
			title: "25 Pally",
			distance: 150,
			gmapsUrl:
				"https://www.google.com/maps/place/25+Pally+Park/@22.5392274,88.3265078,804m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a02775e2cf54a5b:0x8a10174b09248eea!8m2!3d22.5392274!4d88.3265078!16s%2Fg%2F11g7nw34fv?entry=tts&g_ep=EgoyMDI2MDkwNi4wIPu8ASoASAFQAw%3D%3D&skid=fd9a7535-9eb5-41df-b22d-002fa2795e7a",
			htmlDesc:
				"Celebrating its <strong>82nd year</strong>, this\n\t\t\t\t\t\t\t\t\t\tlong-running Khidirpur community Puja boasts a rich history\n\t\t\t\t\t\t\t\t\t\tof thematic installations dating back to 1945. The 2026\n\t\t\t\t\t\t\t\t\t\tpresentation features the theme\n\t\t\t\t\t\t\t\t\t\t<strong>'Durga Bandana' (দুর্গা বন্দনা)</strong>, brought to\n\t\t\t\t\t\t\t\t\t\tlife by creative artists\n\t\t\t\t\t\t\t\t\t\t<strong>Sujit Das and Buddhadeb Karmakar</strong>.",
			links: [
				{ type: LinkType.FACEBOOK, value: "https://www.facebook.com/25Pally" },
				{ type: LinkType.PHONE, value: "9831566910" },
				{ type: LinkType.EMAIL, value: "25pallyclub@gmail.com" },
			],
			transit: 0,
			isPreviousTransit: true,
		},
		{
			order: 2,
			type: ItemType.PANDAL,
			area: Area.KHIDIRPUR,
			title: "74 Pally",
			distance: 550,
			gmapsUrl:
				"https://www.google.com/maps/place/74+Pally+Club/@22.5396499,88.3252172,804m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a0277607577297f:0x49f4c63c8f2b7292!8m2!3d22.5396498!4d88.3252173!16s%2Fg%2F1pp2tzr8g!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMS4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc:
				"Celebrating its <strong>71st year</strong>, this puja is\n\t\t\t\t\t\t\t\t\t\tknown for its long tradition of community-led thematic work\n\t\t\t\t\t\t\t\t\t\tand traditional craftsmanship. The 2026 presentation\n\t\t\t\t\t\t\t\t\t\tfeatures the theme\n\t\t\t\t\t\t\t\t\t\t<strong>'Porlo Pujo 71 e, Nojor Rakhun 74 e' (পড়ল পুজো ৭১ এ, নজর\n\t\t\t\t\t\t\t\t\t\t\tরাখুন ৭৪ এ)</strong>, brought to life by a creative team including\n\t\t\t\t\t\t\t\t\t\t<strong>Iman Chandra, Akash Chakraborty, Shuvam Banerjee, Avik\n\t\t\t\t\t\t\t\t\t\t\tSen, Sudip Sanyal, and Pallab Sekhar Das</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value:
						"https://www.facebook.com/74PalliSarbojaninDurgotsavKidderpore",
				},
				{ type: LinkType.EMAIL, value: "74pallyclub@gmail.com" },
			],
		},
		{
			order: 3,
			type: ItemType.PANDAL,
			area: Area.KHIDIRPUR,
			title: "75 Pally",
			distance: 650,
			gmapsUrl:
				"https://www.google.com/maps/place/75+Pally+Khidderpore/@22.5402695,88.3179492,743m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a0279de1f6ee7b5:0x7cf2bbf2cc8db51f!8m2!3d22.5402695!4d88.3205241!16s%2Fg%2F11h0vk23_?entry=tts&g_ep=EgoyMDI2MDkwNi4wIPu8ASoASAFQAw%3D%3D&skid=f50914fc-db49-4911-9cce-86900afdef19",
			htmlDesc:
				"Celebrating its <strong>63rd year</strong>, the 2026\n\t\t\t\t\t\t\t\t\t\tpresentation features the theme\n\t\t\t\t\t\t\t\t\t\t<strong>'Parasray - Ek Chironton Satya' (পরাশ্রয় - এক চিরন্তন\n\t\t\t\t\t\t\t\t\t\t\tসত্য)</strong>. The concept draws on the koel's brood-parasitic behaviour\n\t\t\t\t\t\t\t\t\t\tto explore human exploitation of nature and the wider\n\t\t\t\t\t\t\t\t\t\tecological balance, brought to life by a creative team\n\t\t\t\t\t\t\t\t\t\tincluding\n\t\t\t\t\t\t\t\t\t\t<strong>Pradipta Karmakar, Parimal Pal, Soumen Haldar, Koustav\n\t\t\t\t\t\t\t\t\t\t\tBiswas, Azaan Chakraborty, and Paresh Bera</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/75pallykhidderpore",
				},
				{
					type: LinkType.YOUTUBE,
					value: "https://www.youtube.com/@75pallykhidderpore",
				},
				{ type: LinkType.PHONE, value: "6290427717" },
			],
		},
		{
			order: 4,
			type: ItemType.PANDAL,
			area: Area.KHIDIRPUR,
			title: "Khidderpore Pally Sharadiya",
			distance: 350,
			gmapsUrl:
				"https://www.google.com/maps/place/Khidderpore+Pally+Saradiya/@22.5432531,88.3189289,743m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a0279de55bc9fb1:0x982082f962201187!8m2!3d22.5432531!4d88.3215038!16s%2Fg%2F11bz0cfnrn?entry=tts&g_ep=EgoyMDI2MDkwNi4wIPu8ASoASAFQAw%3D%3D&skid=b7b2334e-3933-4eb8-ada4-c98d619343f3",
			htmlDesc:
				"Celebrating its <strong>85th year</strong>, this established\n\t\t\t\t\t\t\t\t\t\tKhidirpur puja presents a nostalgic tribute to Kolkata's\n\t\t\t\t\t\t\t\t\t\tcity heritage Tram. The 2026 presentation features the theme\n\t\t\t\t\t\t\t\t\t\t<strong>'Chol Jabo Toke Niye' (চল যাবো তোকে নিয়ে)</strong>,\n\t\t\t\t\t\t\t\t\t\tbrought to life by a creative team including\n\t\t\t\t\t\t\t\t\t\t<strong>Dipankar Dey, Soumen Pal, Ashu Chakraborty, and Debajyoti\n\t\t\t\t\t\t\t\t\t\t\tJana</strong>.",
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/kidderpore.pallysaradiya",
				},
				{
					type: LinkType.INSTAGRAM,
					value: "https://www.instagram.com/kidderporepallysaradiya",
				},
				{ type: LinkType.PHONE, value: "9830817718" },
				{ type: LinkType.EMAIL, value: "pallysaradiyakidderpore@gmail.com" },
			],
			transit: 1,
		},
	],
	transits: [
		{
			index: 0,
			steps: [
				{
					order: 1,
					medium: TransitMedium.CAB,
					src: Places.RAIL_STATIONS.RAMRAJATALA,
					dest: Places.BUS_STOPS.MANASHA_MANDIR,
				},
			],
		},
		{
			index: 1,
			steps: [
				{
					order: 1,
					medium: TransitMedium.WALK,
					distance: 600,
					dest: Places.BUS_STOPS.FANCY_MARKET,
				},
				{
					order: 2,
					medium: TransitMedium.CAB,
					dest: Places.RAIL_STATIONS.BALLY,
				},
			],
		},
	],
};
