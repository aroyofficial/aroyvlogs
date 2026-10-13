import { Area, ItemType, LinkType, Places, TransitMedium } from "../commons.js";

export const chaturthi = {
	title: "Chaturthi",
	dateLabel: "14 OCTOBER &middot; WEDNESDAY",
	countdown: {
		title: "Maha Chaturthi",
		subtitle: "Feel the beats of the Dhak getting closer!",
		targetDate: new Date("2026-10-14"),
	},
	meetup: {
		time: "1:00 PM",
		place: Places.RAIL_STATIONS.BALLY_HALT,
	},
	lunchStop: null,
	stops: [
		{
			order: 1,
			transit: 0,
			nextTransit: 1,
			isPreviousTransit: true,
			type: ItemType.PANDAL,
			area: Area.KALYANI,
			title: "A9 Square Park",
			distance: 550,
			gmapsUrl:
				"https://www.google.com/maps/place/A-9+Square+Park/@22.9686018,88.4605885,802m/data=!3m2!1e3!4b1!4m6!3m5!1s0x39f8956af61d840d:0x6df29b70083dd6c1!8m2!3d22.9686018!4d88.4631634!16s%2Fg%2F1tctvzsj!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: `For the year 2026, A9 Square Park Durga Puja in Kalyani presents the spectacular <strong>'Panch Kedar' (পঞ্চ কেদার)</strong> theme, showcasing the five sacred Shiva temples of Uttarakhand - Kedarnath, Tungnath, Rudranath, Madhyamaheshwar, and Kalpeshwar.`,
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/a9durgapuja",
				},
				{
					type: LinkType.WEBSITE,
					value: "https://www.a9durgapuja.com",
				},
				{
					type: LinkType.EMAIL,
					value: "a9squareparkdurgapuja@gmail.com",
				},
			],
		},
		{
			order: 2,
			transit: 2,
			type: ItemType.PANDAL,
			area: Area.KALYANI,
			title: "Luminous Club",
			distance: 200,
			gmapsUrl:
				"https://www.google.com/maps/place/ITI+More+Durga+Puja+Ground/@22.9796125,88.4361114,401m/data=!3m2!1e3!4b1!4m6!3m5!1s0x39f89529629985dd:0xb32e85f580866520!8m2!3d22.9796125!4d88.4385469!16s%2Fg%2F11gxvs5syd!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: `For the year 2026, Kalyani Luminous Club, popularly known as Kalyani ITI More Durga Puja, presents the spectacular theme <strong>'Swe Tay Myat Pagoda'</strong>. The idol is crafted by well-known sculptor <strong>Pradip Rudra Pal</strong>.`,
			links: [],
		},
		{
			order: 3,
			transit: 3,
			type: ItemType.PANDAL,
			area: Area.KALYANI,
			title: "Rathtala",
			distance: 150,
			gmapsUrl:
				"https://www.google.com/maps/place/Rathtala+Playground/@22.9521359,88.4302134,3208m/data=!3m1!1e3!4m14!1m7!3m6!1s0x39f89529629985dd:0xb32e85f580866520!2sITI+More+Durga+Puja+Ground!8m2!3d22.9796125!4d88.4385469!16s%2Fg%2F11gxvs5syd!3m5!1s0x39f895df1d681ed3:0x456ce422008d382!8m2!3d22.9596418!4d88.4244607!16s%2Fg%2F11gjs1w33n!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D",
			htmlDesc: `For the year 2026, Kalyani Rathtala Sarbojanin Durga Puja presents the spectacular theme <strong>Mathura's Krishna Balaram Temple</strong>, featuring a magnificent pandal inspired by the iconic temple's architecture.`,
			links: [],
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
					dest: Places.RAIL_STATIONS.KALYANI,
				},
			],
		},
		{
			index: 1,
			type: ItemType.TRANSIT,
			steps: [
				{
					order: 1,
					medium: TransitMedium.AUTO,
					dest: Places.BUS_STOPS.ITI_MORE,
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
					distance: 200,
					dest: Places.BUS_STOPS.ITI_MORE,
				},
				{
					order: 2,
					medium: TransitMedium.AUTO,
					dest: Places.BUS_STOPS.RATHTALA_MORE,
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
					distance: 150,
					dest: Places.BUS_STOPS.RATHTALA_MORE,
				},
				{
					order: 2,
					medium: TransitMedium.AUTO,
					dest: Places.RAIL_STATIONS.KANCHRAPARA,
				},
				{
					order: 3,
					medium: TransitMedium.TRAIN,
					dest: Places.RAIL_STATIONS.DUMDUM,
				},
				{
					order: 4,
					medium: TransitMedium.TRAIN,
					dest: Places.RAIL_STATIONS.BALLY_HALT,
				},
			],
		},
	],
};
