import { Area, ItemType, LinkType, Places, TransitMedium } from "./commons.js";

export const chaturthi = {
	title: "Chaturthi",
	dateLabel: "15 OCTOBER &middot; THURSDAY",
	meetup: {
		time: "7:30 AM",
		place: Places.RAIL_STATIONS.BALLY_HALT,
	},
	lunchStop: {
		type: ItemType.LUNCH,
		title: "Allen Kitchen",
		distance: 230,
		fromName: "Hazra Park",
		gmapsUrl:
			"https://www.google.com/maps/place/Allen+Kitchen+-+Saveurs+de+Calcutta/@22.5238133,88.345164,310m/data=!3m1!1e3!4m6!3m5!1s0x3a0277091eaf1cb9:0xf13bcf4321444544!8m2!3d22.5242545!4d88.3473219!16s%2Fg%2F11h1dmgbf9?entry=tts&g_ep=EgoyMDI2MDgxOS4wIPu8ASoASAFQAw%3D%3D&skid=00806ce5-b610-44e0-bd61-5676a0bda95b",
	},
	stops: [
		{
			order: 1,
			transit: 0,
			isPreviousTransit: true,
			type: ItemType.PANDAL,
			area: Area.BELGACHIA,
			title: "Belgachia Sadharon Durgotsav",
			distance: 550,
			gmapsUrl:
				"https://www.google.com/maps/place/Belgachia+Sadharon+Durgotsav/@22.6075652,88.382969,247m/data=!3m1!1e3!4m6!3m5!1s0x3a02761f65e977c5:0xb4a2aa7574f820e1!8m2!3d22.6077319!4d88.3827393!16s%2Fg%2F11f505v6__!5m1!1e1?entry=tts&g_ep=EgoyMDI2MDkwMi4wIPu8ASoASAFQAw%3D%3D&skid=fc633876-8a98-4af2-85c5-86924cfd9c25",
			htmlDesc: `Celebrating its <strong>79th year in 2026</strong>, <strong>one of North Kolkata&rsquo;s traditional community pujas</strong> combines neighbourhood festive culture with a contemporary pandal presentation. Artist <strong>Anirban Das</strong> brings to life the 2026 theme, <strong>'Unbound' (বন্ধনমুক্ত)</strong>.`,
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/profile.php?id=100064660990883",
				},
				{
					type: LinkType.PHONE,
					value: "9831001057",
				},
				{
					type: LinkType.EMAIL,
					value: "jaydeep_saha@rediffmail.com",
				},
			],
		},
		{
			order: 2,
			type: ItemType.PANDAL,
			area: Area.TALA,
			title: "Tala Prattoy",
			distance: 400,
			gmapsUrl:
				"https://www.google.com/maps/place/Tala+Prattoy+Durga+Puja+Art/@22.6088062,88.3814719,402m/data=!3m1!1e3!4m6!3m5!1s0x3a02770066793be3:0xa2bba210b58b73f6!8m2!3d22.6087911!4d88.382502!16s%2Fg%2F11wft8rqd_?entry=tts&g_ep=EgoyMDI2MDgxOS4wIPu8ASoASAFQAw%3D%3D&skid=8b676d16-874e-46eb-9b51-5f314720b595",
			htmlDesc: `Celebrating its <strong>101st year in 2026</strong>, this puja is known for treating Durga Puja as an ambitious form of public art. Artist <strong>Susanta Shibani Paul</strong> is leading the <strong>2026 artistic work</strong>, featuring the newly announced theme, <strong>'Detachment' (বিয়োজন)</strong>.`,
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/talaprattoy",
				},
				{
					type: LinkType.INSTAGRAM,
					value: "https://www.instagram.com/talaprattoy",
				},
				{
					type: LinkType.WEBSITE,
					value: "https://www.talaprattoy.com",
				},
				{
					type: LinkType.YOUTUBE,
					value: "https://www.youtube.com/@talaprattoy",
				},
				{
					type: LinkType.X,
					value: "https://x.com/talaprattoy",
				},
				{
					type: LinkType.PHONE,
					value: "8777575830",
				},
				{
					type: LinkType.EMAIL,
					value: "talaprattoy.official@gmail.com",
				},
			],
		},
		{
			order: 3,
			transit: 1,
			type: ItemType.PANDAL,
			area: Area.TALA,
			title: "Paikpara 31 Pally",
			distance: 1200,
			gmapsUrl:
				"https://www.google.com/maps/place/Paikpara+31+Pally+Sadharan+Durgotsab+Samity/@22.6124807,88.3702066,1608m/data=!3m1!1e3!4m6!3m5!1s0x39f89d0054ac0cc1:0x7ce63d6159892a6c!8m2!3d22.6124798!4d88.3795877!16s%2Fg%2F11xvdvp25z!5m1!1e1?entry=tts&g_ep=EgoyMDI2MDkxNi4wIPu8ASoASAFQAw%3D%3D&skid=c6dbe4aa-eeb9-43b4-8c88-6b74c547bc30",
			htmlDesc: `Celebrating its <strong>73rd year</strong>, the 2026 presentation for Paikpara 31 Pally Sarbojonin Durgotsav features the theme <strong>'Jolodhi' (জলধি)</strong>. The concept is envisioned by <strong>Mitriya Art Group</strong>, with the idol crafted by <strong>Sayantan</strong>.`,
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/31PallySadharanDurgotsabSamity",
				},
			],
		},
		{
			order: 4,
			type: ItemType.PANDAL,
			area: Area.TALA,
			title: "Tala Barowari",
			distance: 300,
			gmapsUrl:
				"https://www.google.com/maps/place/Tala+Barowari+Durgotsob/@22.6071881,88.3746354,402m/data=!3m1!1e3!4m6!3m5!1s0x3a02770037205ccb:0xb107f0749334100a!8m2!3d22.6072038!4d88.3760758!16s%2Fg%2F11yll_t8vt!5m1!1e1?entry=tts&g_ep=EgoyMDI2MDkwMi4wIPu8ASoASAFQAw%3D%3D&skid=27390f21-7662-487b-a009-1ad154c89ce5",
			htmlDesc: `Celebrating its <strong>106th year in 2026</strong>, Tala Barowari presents the theme <strong>'Barowarir Durgabari' (বারোয়ারির দুর্গাবাড়ি)</strong>, envisioned by artist <strong>Prathama Prashant Paul</strong>. The puja continues its "Uttorer Uttor" legacy with a simple, relatable concept that prioritizes the sacred space of the Goddess over complex abstractions. The pandal's design is inspired by the manifestation of <em>Adishakti</em> (primal energy) as described in Hindu scriptures, aiming to evoke pure devotion while showcasing India's rich traditional art and culture to the world.`,
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/talabarowari.durgotsab",
				},
				{
					type: LinkType.PHONE,
					value: "9830362836",
				},
				{
					type: LinkType.EMAIL,
					value: "talabarowari@gmail.com",
				},
			],
		},
		{
			order: 5,
			transit: 2,
			type: ItemType.PANDAL,
			area: Area.TALA,
			title: "Sarkar Bagan Sammilita Sangha",
			distance: 210,
			gmapsUrl:
				"https://www.google.com/maps/place/Sarkar+Bagan+Sammilita+Sangha/@22.6062589,88.3766331,201m/data=!3m1!1e3!4m6!3m5!1s0x3a02762152b845c9:0xd998b0c2467d6482!8m2!3d22.6062589!4d88.3772957!16s%2Fg%2F11ggnc9w3j!5m1!1e1?entry=tts&g_ep=EgoyMDI2MDkxNi4wIPu8ASoASAFQAw%3D%3D&skid=fe10d9fa-3d29-48e1-a0ba-9e28fc3549d5",
			htmlDesc: `Celebrating its <strong>109th year</strong>, the 2026 presentation for Sarkar Bagan Sammilita Sangha features the theme <strong>'Sobar Upore' (সবার উপরে)</strong>. The concept is envisioned by <strong>Amit Chattopadhyay</strong>, with the idol crafted by <strong>Sanatan Pal</strong>.`,
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/SarkarBaganSammilitaSanghatala",
				},
				{
					type: LinkType.PHONE,
					value: "9830362836",
				},
				{
					type: LinkType.EMAIL,
					value: "talabarowari@gmail.com",
				},
			],
		},
		{
			order: 6,
			type: ItemType.PANDAL,
			area: Area.MUDIALI,
			title: "Mudiali Club",
			distance: 290,
			gmapsUrl:
				"https://www.google.com/maps/place/Mudiali+Club/@22.510194,88.3437373,805m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a0270cbdf5173cd:0x5518c1c09c9335f0!8m2!3d22.510194!4d88.3463122!16s%2Fg%2F11xjbv0sk?entry=tts&g_ep=EgoyMDI2MDgxOS4wIPu8ASoASAFQAw%3D%3D&skid=e52e7684-22e7-4769-937a-a5c213b9d1ff",
			htmlDesc: `Dating back to <strong>1935</strong>, this puja reaches its <strong>92nd year in 2026</strong>. Known for its artistic approach, distinctive idol, and carefully designed pandal environments, the 2026 presentation features the theme <strong>'Traditional Folktales' (ঐতিহ্যের লোককথা) - Timeless Tales, Timeless Devotion</strong>, conceptualized by artist <strong>Biman Saha</strong>.`,
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/mudialiclubdurgapuja",
				},
				{
					type: LinkType.WEBSITE,
					value: "https://mudialiclub.org",
				},
				{
					type: LinkType.EMAIL,
					value: "mudialiclub1935@gmail.com",
				},
			],
		},
		{
			order: 7,
			type: ItemType.PANDAL,
			area: Area.RABINDRA_SAROBAR,
			title: "Shib Mandir Sarbojonin",
			distance: 400,
			gmapsUrl:
				"https://www.google.com/maps/place/Shibmandir+Sarbojanin+Durgotsab+Samiti/@22.5106174,88.3474943,402m/data=!3m1!1e3!4m6!3m5!1s0x3a0270cbe5b2856b:0xf51855f3c4f17b8a!8m2!3d22.5109975!4d88.3498496!16s%2Fg%2F11gblfptpm!5m1!1e1?entry=tts&g_ep=EgoyMDI2MDkwMi4wIPu8ASoASAFQAw%3D%3D&skid=eaaa3b94-f882-4e66-b83d-389c23788e26",
			htmlDesc: `Celebrating its <strong>90th year</strong>, this South Kolkata neighbourhood puja brings together <strong>traditional community worship and contemporary pandal decoration</strong>. Directed by artist <strong>Prashant Paul</strong>, the 2026 presentation features the theme <strong>'Festival' (পরব)</strong>. The extensive creative team bringing this 90-year heritage to life includes research by <strong>Shubhojit Santra</strong>, the idol by <strong>Tapan Majhi</strong>, background music by <strong>Sujoy Rudra</strong>, lighting design by <strong>Premendu Bikash Chaki</strong> and <strong>Sushanta Haldar</strong>, and pandal structure by <strong>Maa Kali Decorator</strong>.`,
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/ShibmandirDurgaPuja",
				},
				{
					type: LinkType.INSTAGRAM,
					value: "https://www.instagram.com/shibmandirdurgapuja",
				},
				{
					type: LinkType.EMAIL,
					value: "shibmandir1936@gmail.com",
				},
			],
		},
		{
			order: 8,
			transit: 3,
			type: ItemType.PANDAL,
			area: Area.BALLYGUNGE,
			title: "Tricone Park",
			distance: 600,
			gmapsUrl:
				"https://www.google.com/maps/place/Trikon+Park/@22.5134552,88.3444298,50m/data=!3m1!1e3!4m6!3m5!1s0x3a0270cb1d1a6955:0x2df0cb98705cfbb5!8m2!3d22.5134551!4d88.3447357!16s%2Fg%2F1pp2vf1xf!5m1!1e1?entry=tts&g_ep=EgoyMDI2MDkwMi4wIPu8ASoASAFQAw%3D%3D&skid=f6270de5-ce7c-4524-ba8a-09db8fdea9ca",
			htmlDesc: `Celebrating its <strong>97th year</strong>, this South Kolkata neighbourhood puja is known for its <strong>local festive atmosphere and thematic presentation</strong>, fitting naturally into the Chakraberia&ndash;Ballygunge circuit. The 2026 theme is <strong>'Sharad Natyatsav' (শারদ নাট্যোৎসব)</strong>, directed by <strong>Bimal Samanta</strong>. The creative team features the idol by <strong>Amal Pal</strong>, lighting by <strong>Premendu Bikash Chaki</strong>, and background music by <strong>Ashu Chakraborty</strong>.`,
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/profile.php?id=100090937562678",
				},
				{
					type: LinkType.INSTAGRAM,
					value: "https://www.instagram.com/triconepark",
				},
				{
					type: LinkType.PHONE,
					value: "6289872609",
				},
				{
					type: LinkType.EMAIL,
					value: "pratapadityaroadtriconepark@gmail.com",
				},
			],
		},
		{
			order: 9,
			transit: 4,
			type: ItemType.PANDAL,
			area: Area.NEW_ALIPORE,
			title: "Suruchi Sangha",
			distance: 120,
			gmapsUrl:
				"https://www.google.com/maps/place/Suruchi+Sangha/@22.5095181,88.3327839,475m/data=!3m1!1e3!4m6!3m5!1s0x3a027112d9c0466f:0x21832239a8285502!8m2!3d22.5089855!4d88.3339522!16s%2Fg%2F124yfytbp?entry=tts&g_ep=EgoyMDI2MDgxOS4wIPu8ASoASAFQAw%3D%3D&skid=defb59d0-90b4-4171-96f6-24190fbbae09",
			htmlDesc: `Celebrating its <strong>73rd year in 2026</strong>, this is one of South Kolkata&rsquo;s best-known thematic pujas. The 2026 theme is <strong>'Source' (উৎস)</strong>, conceptualized and brought to life by artist <strong>Anirban</strong>.`,
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/suruchisanghaofficial",
				},
				{
					type: LinkType.INSTAGRAM,
					value: "https://www.instagram.com/suruchisangha",
				},
				{
					type: LinkType.YOUTUBE,
					value: "https://www.youtube.com/channel/UCJYNAssfKEJTgwcxb7mhP7Q",
				},
				{
					type: LinkType.EMAIL,
					value: "suruchisangha1952@gmail.com",
				},
			],
		},
		{
			order: 10,
			type: ItemType.PANDAL,
			area: Area.CHETLA,
			title: "Chetla Agrani",
			distance: 200,
			gmapsUrl:
				"https://www.google.com/maps/place/Chetla+Agrani+Durga+Puja+Pandal/@22.5151917,88.3274745,1438m/data=!3m1!1e3!4m6!3m5!1s0x3a02774cc9065925:0x8664b2ff7895f91d!8m2!3d22.5163878!4d88.337111!16s%2Fg%2F11gbwr1xtx?entry=tts&g_ep=EgoyMDI2MDgxOS4wIPu8ASoASAFQAw%3D%3D&skid=67b26e54-445a-43bf-a647-2ed0b51168c0",
			htmlDesc: `Celebrating its <strong>67th year</strong>, this long-running South Kolkata community tradition is known for its large-scale thematic presentations. The 2026 celebration features the theme <strong>'Lotus' (পদ্ম)</strong>, conceptualised by <strong>Bhabotosh Sutar</strong>.`,
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/ChetlaAgraniClub",
				},
				{
					type: LinkType.INSTAGRAM,
					value: "https://www.instagram.com/chetla_agrani",
				},
				{
					type: LinkType.WEBSITE,
					value: "https://chetlaagraniclub.com",
				},
				{
					type: LinkType.PHONE,
					value: "9147709399",
				},
				{
					type: LinkType.EMAIL,
					value: "chetlaagraniclub27@gmail.com",
				},
			],
		},
		{
			order: 11,
			transit: 5,
			type: ItemType.PANDAL,
			area: Area.ALIPORE,
			title: "Alipore Sarbajonin",
			distance: 650,
			gmapsUrl:
				"https://www.google.com/maps/place/Alipore+Sarbojanin+Durgapuja/@22.5191626,88.3310544,402m/data=!3m1!1e3!4m6!3m5!1s0x3a0277000c3971f7:0x5ae5475fd7c3b77c!8m2!3d22.5191675!4d88.333401!16s%2Fg%2F11xzt2tt4_!5m1!1e1?entry=tts&g_ep=EgoyMDI2MDkwMi4wIPu8ASoASAFQAw%3D%3D&skid=eaa494ec-2c11-4a84-a0ae-037ce64746ce",
			htmlDesc: `Celebrating its <strong>81st year in 2026</strong>, this year's presentation brings the epic to life with the theme <strong>'Ramayana' (রামায়ণ)</strong>. The concept is envisioned by artist <strong>Anirban Das</strong>, accompanied by a background score from <strong>Dipanwita Acharya</strong>.`,
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/aliporesarbojaninofficial",
				},
				{
					type: LinkType.EMAIL,
					value: "alipore.sarbojanin50@gmail.com",
				},
			],
		},
		{
			order: 12,
			type: ItemType.PANDAL,
			area: Area.KALIGHAT,
			title: "Nepal Bhattacharjee Street Club",
			distance: 170,
			gmapsUrl:
				"https://www.google.com/maps/place/Nepal+Bhattacharya+Street+Club+Durga+Puja/@22.5171406,88.3380093,402m/data=!3m1!1e3!4m6!3m5!1s0x3a0277004591ccb9:0xfafb5819a0685fcc!8m2!3d22.5178934!4d88.3412609!16s%2Fg%2F11wf_g_v2m?entry=tts&g_ep=EgoyMDI2MDgxOS4wIPu8ASoASAFQAw%3D%3D&skid=b8dcf2e5-96db-4a7a-9214-12d55134cab2",
			htmlDesc: `This neighbourhood puja represents the traditional community character of Kalighat&rsquo;s Durga Puja circuit, combining worship with an artistic pandal environment. Celebrating its <strong>47th year in 2026</strong>, the grand theme for this edition is <strong>'Maa Ekhane 1 Rupi Noy 64 Rupini' (মা এখানে ১ রুপী নয়, ৬৪ রূপিণী)</strong>.`,
			links: [],
		},
		{
			order: 13,
			type: ItemType.PANDAL,
			area: Area.KALIGHAT,
			title: "66 Pally",
			distance: 160,
			gmapsUrl:
				"https://www.google.com/maps/place/66+Pally+Durgapuja+Pandal/@22.5177987,88.3411935,437m/data=!3m1!1e3!4m6!3m5!1s0x3a0277005a00bfb7:0x26118fb10c31fc81!8m2!3d22.5180613!4d88.3427526!16s%2Fg%2F11ltzxvw6y?entry=tts&g_ep=EgoyMDI2MDgxOS4wIPu8ASoASAFQAw%3D%3D&skid=32ef27ba-20be-4b4a-9c26-1e424f1fbe25",
			htmlDesc: `Celebrating its <strong>76th year</strong>, this well-known South Kolkata community puja presents the theme <strong>'Tomar Pore Thekai Matha' (তোমার পরে ঠেকাই মাথা)</strong>. The creative vision is brought to life by <strong>Partha Maiti, Soumya Laha, and Sumanta Aditya</strong>, featuring an idol crafted by <strong>Sayan Pathira</strong> and lighting design by <strong>Pinaki Guha</strong>.`,
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/66pallyClub",
				},
				{
					type: LinkType.EMAIL,
					value: "66palli@gmail.com",
				},
			],
		},
		{
			order: 14,
			transit: 6,
			type: ItemType.PANDAL,
			area: Area.KALIGHAT,
			title: "Badamtala Ashar Sangha",
			distance: 100,
			gmapsUrl:
				"https://www.google.com/maps/place/66+Pally+Durgapuja+Pandal/@22.5180005,88.3406636,804m/data=!3m1!1e3!4m6!3m5!1s0x3a0277005a00bfb7:0x26118fb10c31fc81!8m2!3d22.5180613!4d88.3427526!16s%2Fg%2F11ltzxvw6y?entry=tts&g_ep=EgoyMDI2MDgxOS4wIPu8ASoASAFQAw%3D%3D&skid=1d877fb2-e760-4083-8e84-ccb051cf3157",
			htmlDesc: `Celebrating its <strong>88th year in 2026</strong>, this is one of Kolkata&rsquo;s most recognisable Durga Puja names. The 2026 theme is <strong>'Swopne Paoa Ruper Rani, Jagroto Maa Jogot Jononi' (স্বপ্নে পাওয়া রূপের রাণী, জাগ্রত মা জগৎ জননী)</strong>, guided by creative advisor <strong>Rano Banerjee</strong>. The presentation features an idol crafted by <strong>Pallab Jana</strong> and lighting design by <strong>Pinaki Guha</strong>.`,
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/badamtalaasharsanghabas",
				},
				{
					type: LinkType.EMAIL,
					value: "info@badamtalaasharsangha.com",
				},
			],
		},
		{
			order: 15,
			type: ItemType.PANDAL,
			area: Area.KALIGHAT,
			title: "Kalighat Milan Sangha",
			distance: 300,
			gmapsUrl:
				"https://www.google.com/maps/place/Kalighat+Milan+Sangha/@22.5242864,88.3396569,402m/data=!3m1!1e3!4m6!3m5!1s0x3a02774908f26f31:0x7ca309b32ad6d38e!8m2!3d22.5243173!4d88.3410395!16s%2Fg%2F1ptynvfrz?entry=tts&g_ep=EgoyMDI2MDgxOS4wIPu8ASoASAFQAw%3D%3D&skid=daac541d-106d-4e2d-86ba-d395b1127140",
			htmlDesc: `Part of the historic Kalighat neighbourhood&rsquo;s vibrant puja circuit, this celebration reflects the area&rsquo;s <strong>deep Bengali religious and cultural traditions</strong> while incorporating a thematic pandal experience. <strong>Final 2026 theme and creative-team details have not yet been reliably confirmed</strong>.`,
			links: [],
		},
		{
			order: 16,
			lunch: true,
			type: ItemType.PANDAL,
			area: Area.HAZRA,
			title: "Hazra Park",
			distance: 850,
			gmapsUrl:
				"https://www.google.com/maps/place/Hazra+Park+Durga+Puja/@22.5244125,88.3456922,68m/data=!3m1!1e3!4m6!3m5!1s0x3a0277462c52433f:0x370b5ca4df318b2a!8m2!3d22.524434!4d88.3460535!16s%2Fg%2F11ff203hpx?entry=tts&g_ep=EgoyMDI2MDgxOS4wIPu8ASoASAFQAw%3D%3D&skid=0ba721e3-bc89-4576-a4dd-03b20c40cccf",
			htmlDesc: `Celebrating its <strong>84th year in 2026</strong>, the <strong>final theme and artist details are not yet confirmed</strong> and will be updated when official information is available.`,
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/kpksdurgotsab",
				},
				{
					type: LinkType.EMAIL,
					value: "hazraparkdurgotsab@gmail.com",
				},
			],
		},
		{
			order: 17,
			type: ItemType.PANDAL,
			area: Area.BHOWANIPORE,
			title: "Bakul Bagan Sarbojonin",
			distance: 350,
			gmapsUrl:
				"https://www.google.com/maps/place/Bakul+Bagan+Sarbojanin+Durgotsav/@22.5259649,88.3468278,444m/data=!3m1!1e3!4m6!3m5!1s0x3a0277374a1ee63d:0xdd54c54430847f8e!8m2!3d22.5267621!4d88.34826!16s%2Fg%2F11cs4c99sb?entry=tts&g_ep=EgoyMDI2MDkwOS4wIPu8ASoASAFQAw%3D%3D&skid=6ddda853-093e-40dc-adc7-1f80177ea26b",
			htmlDesc: `Celebrating its <strong>99th year</strong>, the 2026 theme is <strong>'Bakul Kothay Phire Dekha' (বকুল কথায় ফিরে দেখা)</strong>, featuring the artistic vision of <strong>Joy Chandra Chandra</strong> and lighting design by <strong>Premendu Bikash Chaki</strong>.`,
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/bakulbagan",
				},
				{
					type: LinkType.INSTAGRAM,
					value: "https://www.instagram.com/bakulbagansarbojanindurgotsab",
				},
				{
					type: LinkType.PHONE,
					value: "8617797830",
				},
				{
					type: LinkType.EMAIL,
					value: "bakulbagansarbojanin1928@gmail.com",
				},
			],
		},
		{
			order: 18,
			type: ItemType.PANDAL,
			area: Area.BHOWANIPORE,
			title: "Chakraberia Sarbojonin",
			distance: 1100,
			gmapsUrl:
				"https://www.google.com/maps/place/Chakraberia+Sarbojanin+Durgotsab/@22.5289154,88.3473694,1770m/am=t/data=!3m1!1e3!4m6!3m5!1s0x3a02773bbf310017:0xf6d48ad98db4016a!8m2!3d22.5336065!4d88.3519214!16s%2Fg%2F11f1yd4cb_!5m1!1e1?entry=tts&g_ep=EgoyMDI2MDkwMi4wIPu8ASoASAFQAw%3D%3D&skid=e34de491-8e8b-45dd-9f30-c1d99c247cf1",
			htmlDesc: `Celebrating its <strong>81st year in 2026</strong>, the theme is <strong>&ldquo;Padmodighir Ghate&rdquo; (At the Ghat of the Lotus Pond)</strong>. The creative team includes <strong>Sumi Majumder, Shubhodip Majumder and Trisha Dutta</strong>; <strong>Parimal Paul</strong> is creating the idol, with <strong>Dinesh Poddar</strong> handling lighting and <strong>Goutam Brahma</strong> the music.`,
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/chakraberiasarbojanin.durgotsab",
				},
			],
		},
		{
			order: 19,
			transit: 7,
			type: ItemType.PANDAL,
			area: Area.BHOWANIPOPRE,
			title: "Bhowanipore 75 Pally",
			distance: 750,
			gmapsUrl:
				"https://www.google.com/maps/place/Bhowanipur+75+Palli/@22.5299822,88.3451846,1609m/data=!3m1!1e3!4m6!3m5!1s0x3a027738d78d4fbd:0x4d0b78b9bd98a1fd!8m2!3d22.533319!4d88.3457086!16s%2Fg%2F11b5wlr8qh!5m1!1e1?entry=tts&g_ep=EgoyMDI2MDkwOS4wIPu8ASoASAFQAw%3D%3D&skid=ebe0a73c-7e5f-49b8-bba3-4fae05a8ac91",
			htmlDesc: `Celebrating its <strong>77th year in 2026</strong>, the <strong>final theme and artist details are not yet confirmed</strong> and will be updated when official information is available.`,
			links: [],
		},
		{
			order: 20,
			transit: 8,
			type: ItemType.PANDAL,
			area: Area.PARK_STREET,
			title: "Allen Park",
			distance: 850,
			gmapsUrl:
				"https://www.google.com/maps/place/Allen+Park/@22.5501724,88.3518833,804m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a02771abf9cca49:0x9065ead23b1f2677!8m2!3d22.5501724!4d88.3544582!16s%2Fg%2F1q2w0pfxf!5m1!1e1?entry=tts&g_ep=EgoyMDI2MDkxNi4wIPu8ASoASAFQAw%3D%3D&skid=6aa28a58-4c49-4e15-ad4e-1a0c05e43adb",
			htmlDesc: `Marking its <strong>first-ever year</strong>, this debut celebration is organised by the <strong>Kolkata Sanatani Sangha</strong>. The inaugural presentation features the theme <strong>'Tandav' (তাণ্ডব)</strong>, thoughtfully designed to enrich rather than disrupt traditional Sanatan culture.`,
			links: [],
		},
		{
			order: 21,
			type: ItemType.PANDAL,
			area: Area.COLLEGE_STREET,
			title: "College Square",
			distance: 850,
			gmapsUrl:
				"https://www.google.com/maps/place/College+Square+Durga+Puja/@22.5734912,88.3587824,804m/data=!3m1!1e3!4m6!3m5!1s0x3a0277f855b8772d:0xebfd1e10c9feb763!8m2!3d22.5745279!4d88.3644724!16s%2Fg%2F11h_wz1xzw?entry=tts&g_ep=EgoyMDI2MDgxOS4wIPu8ASoASAFQAw%3D%3D&skid=a6204bfe-4775-425b-a775-a9cbd15e3ce2",
			htmlDesc: `Celebrating its <strong>79th year</strong>, this remains one of Kolkata&rsquo;s most visually distinctive Durga Puja destinations, famous for its spectacular illumination reflected across the adjoining water body. The 2026 theme recreates <strong>Rajasthan's Albert Museum</strong>. The combination of the illuminated pandal, lake, and historic surroundings creates a signature Puja-night scene, featuring an idol crafted by artist <strong>Sanatan Rudra Pal</strong>.`,
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/profile.php?id=100080437296005",
				},
				{
					type: LinkType.INSTAGRAM,
					value: "https://www.instagram.com/_collegesquaredurgapuja_1948_",
				},
			],
		},
		{
			order: 22,
			transit: 9,
			type: ItemType.PANDAL,
			area: Area.BOWBAZAR,
			title: "Santosh Mitra Square",
			distance: 1300,
			gmapsUrl:
				"https://www.google.com/maps/place/Santosh+Mitra+Square/@22.5701875,88.3598466,1608m/data=!3m1!1e3!4m6!3m5!1s0x3a027655a41c9633:0xd230742cc8f8580b!8m2!3d22.5660201!4d88.3656532!16s%2Fg%2F1th0l9d3?entry=tts&g_ep=EgoyMDI2MDgxOS4wIPu8ASoASAFQAw%3D%3D&skid=1cbb777e-47fe-4a62-b826-e0adbfa1c212",
			htmlDesc: `The 2026 theme is <strong>'Sanatani Chetanay Vande Mataram' (সনাতনী চেতনায় বন্দেমাতরম)</strong>. <strong>Artist Shibashankar Das</strong> is responsible for the thematic design, while <strong>Mintu Paul</strong> is creating the idol. The puja is known for ambitious installations and large-scale visual storytelling.`,
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/profile.php?id=100064801173745",
				},
				{
					type: LinkType.PHONE,
					value: "8017070690",
				},
			],
		},
		{
			order: 23,
			transit: 10,
			type: ItemType.PANDAL,
			area: Area.ENTALLY,
			title: "Kanthal Bagan Sarbojonin",
			distance: 280,
			gmapsUrl:
				"https://www.google.com/maps/place/Entally+Kanthal+Bagan+Durga+Mandir/@22.5577612,88.3705911,804m/data=!3m1!1e3!4m6!3m5!1s0x3a0276fa04d78ca1:0xf28d9ba4a6cc053!8m2!3d22.5577611!4d88.37062!16s%2Fg%2F11fx7p9prx!5m1!1e1?entry=tts&g_ep=EgoyMDI2MDkyMC4wIPu8ASoASAFQAw%3D%3D&skid=602ee121-10e6-4004-9948-bfbd78869f0d",
			htmlDesc: `Celebrating its <strong>80th year</strong>, the 2026 presentation for Entally Kantha Bagan features the theme <strong>'Kath Putuler Deshe' (কাঠ পুতুলের দেশে)</strong>.`,
			links: [
				{
					type: LinkType.FACEBOOK,
					value: "https://www.facebook.com/entallykanthalbagan",
				},
				{
					type: LinkType.INSTAGRAM,
					value: "https://www.instagram.com/kb1.947",
				},
				{
					type: LinkType.EMAIL,
					value: "kb.durgapuja1947@gmail.com",
				},
			],
		},
	],
	transits: [
		{
			index: 0,
			type: ItemType.TRANSIT,
			steps: [
				{
					order: 1,
					medium: TransitMedium.BUS,
					src: Places.BUS_STOPS.BALLY_HALT,
					dest: Places.METRO_STATIONS.DAKSHINESHWAR,
				},
				{
					order: 2,
					medium: TransitMedium.METRO,
					dest: Places.METRO_STATIONS.BELGACHIA,
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
					distance: 210,
					dest: Places.BUS_STOPS.PAIKPARA,
				},
				{
					order: 2,
					medium: TransitMedium.BUS,
					dest: Places.BUS_STOPS.TALA_POST_OFFICE,
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
					distance: 120,
					dest: Places.RAIL_STATIONS.TALA,
				},
				{
					order: 2,
					medium: TransitMedium.AUTO,
					modeLabel: "an auto/bus",
					dest: Places.METRO_STATIONS.BELGACHIA,
				},
				{
					order: 3,
					medium: TransitMedium.METRO,
					dest: Places.METRO_STATIONS.RABINDRA_SAROBAR,
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
					distance: 290,
					dest: Places.BUS_STOPS.TOLLYGUNGE_POLICE_STATION,
				},
				{
					order: 2,
					medium: TransitMedium.BUS,
					dest: Places.BUS_STOPS.NEW_ALIPORE_PETROL_PUMP,
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
					distance: 210,
					dest: Places.BUS_STOPS.BANKIM_MUKHERJEE_SARANI,
				},
				{
					order: 2,
					medium: TransitMedium.BUS,
					dest: Places.BUS_STOPS.CHETLA,
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
					distance: 140,
					dest: Places.BUS_STOPS.ALIPORE_CHETLA_CROSSING,
				},
				{
					order: 2,
					medium: TransitMedium.BUS,
					dest: Places.BUS_STOPS.KEORATALA_SHAMSHAN,
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
					dest: Places.BUS_STOPS.RASHBEHARI_AVENUE_CROSSING,
				},
				{
					order: 2,
					medium: TransitMedium.BUS,
					dest: Places.BUS_STOPS.KALIGHAT,
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
					distance: 34,
					prefix: "Walk back",
					dest: Places.METRO_STATIONS.NETAJI_BHAVAN,
				},
				{
					order: 2,
					medium: TransitMedium.METRO,
					dest: Places.METRO_STATIONS.PARK_STREET,
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
					distance: 850,
					prefix: "Walk back",
					dest: Places.METRO_STATIONS.PARK_STREET,
				},
				{
					order: 2,
					medium: TransitMedium.METRO,
					dest: Places.METRO_STATIONS.CENTRAL,
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
					distance: 450,
					fromName: "Santosh Mitra Square",
					dest: Places.BUS_STOPS.NRS_HOSPITAL,
				},
				{
					order: 2,
					medium: TransitMedium.BUS,
					dest: Places.BUS_STOPS.RAMLILA_MAIDAN,
				},
			],
		},
		{
			index: 10,
			type: ItemType.TRANSIT,
			steps: [
				{
					order: 1,
					medium: TransitMedium.WALK,
					distance: 280,
					fromName: "Entall Kanthal Bagan",
					dest: Places.BUS_STOPS.RAMLILA_MAIDAN,
				},
				{
					order: 2,
					medium: TransitMedium.BUS,
					dest: Places.BUS_STOPS.NRS_HOSPITAL,
				},
				{
					order: 3,
					medium: TransitMedium.WALK,
					distance: 500,
					dest: Places.RAIL_STATIONS.SEALDAH,
				},
				{
					order: 4,
					medium: TransitMedium.TRAIN,
					service: "Dankuni Local",
					dest: Places.RAIL_STATIONS.BALLY_HALT,
				},
			],
		},
	],
};
