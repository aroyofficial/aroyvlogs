export const ItemType = {
	PANDAL: 1,
	LUNCH: 2,
	TRANSIT: 3,
};

export const Zone = {
	NORTH: "North Kolkata",
	SOUTH: "South Kolkata",
	EAST: "East Kolkata",
	WEST: "West Kolkata",
	PORT: "Port Area",
	SOUTHWEST: "South West Kolkata",
	CENTRAL: "Central Kolkata",
};

export const Area = {
	BELGACHIA: ["Belgachia", Zone.NORTH],
	TALA: ["Tala", Zone.NORTH],
	MUDIALI: ["Mudiali", Zone.SOUTH],
	RABINDRA_SAROBAR: ["Rabindra Sarobar", Zone.SOUTH],
	BALLYGUNGE: ["Ballygunge", Zone.SOUTH],
	NEW_ALIPORE: ["New Alipore", Zone.SOUTH],
	CHETLA: ["Chetla", Zone.SOUTH],
	ALIPORE: ["Alipore", Zone.SOUTH],
	KALIGHAT: ["Kalighat", Zone.SOUTH],
	HAZRA: ["Hazra", Zone.SOUTH],
	BHOWANIPORE: ["Bhowanipore", Zone.SOUTH],
	BHOWANIPOPRE: ["Bhowanipopre", Zone.SOUTH],
	PARK_STREET: ["Park Street", Zone.CENTRAL],
	COLLEGE_STREET: ["College Street", Zone.CENTRAL],
	BOWBAZAR: ["Bowbazar", Zone.CENTRAL],
	ENTALLY: ["Entally", Zone.CENTRAL],
	BOSEPUKUR: ["Bosepukur", Zone.SOUTH],
	RAJDANGA: ["Rajdanga", Zone.SOUTH],
	SANTOSHPUR: ["Santoshpur", Zone.SOUTH],
	PATULI: ["Patuli", Zone.SOUTH],
	GARIA: ["Garia", Zone.SOUTH],
	NAKTALA: ["Naktala", Zone.SOUTH],
	KUDGHAT: ["Kudghat", Zone.SOUTH],
	PASCHIM_PUTIARY: ["Paschim Putiary", Zone.SOUTH],
	HARIDEVPUR: ["Haridevpur", Zone.SOUTH],
	BEHALA: ["Behala", Zone.SOUTHWEST],
	THAKURPUKUR: ["Thakurpukur", Zone.SOUTH],
};

export const LinkType = {
	FACEBOOK: 1,
	INSTAGRAM: 2,
	WEBSITE: 3,
	YOUTUBE: 4,
	X: 5,
	PHONE: 6,
	EMAIL: 7,
};

export const WALKING_PACE_METERS_PER_MINUTE = 50; // 3 km/h

export const TransitMedium = {
	WALK: 0,
	AUTO: 1,
	BUS: 2,
	TRAIN: 3,
	METRO: 4,
	CAB: 5,
};

export const Places = {
	BUS_STOPS: {
		BALLY_HALT: {
			name: "Bally Halt",
			gmapsUrl:
				"https://www.google.com/maps/place/Bally+Halt+Stand/@22.65278,88.3369251,804m/data=!3m1!1e3!4m14!1m7!3m6!1s0x39f89d23e11303f1:0xde6d8afeb1caf408!2sBally+Halt+Bus+Stop!8m2!3d22.65278!4d88.3395!16s%2Fg%2F11zf6hxkpn!3m5!1s0x39f89d65c9aea4e3:0xf139f4b47a387628!8m2!3d22.6523756!4d88.3411888!16s%2Fg%2F11h6rz93bn!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		DAKSHINESHWAR: {
			name: "Dakshineshwar",
			gmapsUrl:
				"https://www.google.com/maps/place/Dakshineswar/@22.6535562,88.3608603,201m/data=!3m1!1e3!4m10!1m2!2m1!1sdakshineswar+bus+stand!3m6!1s0x39f89d00ca774131:0x495f6e8ecd21345a!8m2!3d22.6535562!4d88.3620512!15sChZkYWtzaGluZXN3YXIgYnVzIHN0YW5kkgEIYnVzX3N0b3DgAQA!16s%2Fg%2F11b7q54s18!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		PAIKPARA: {
			name: "Paikpara",
			gmapsUrl:
				"https://www.google.com/maps/place/Paikpara/@22.612392,88.3749801,804m/data=!3m2!1e3!4b1!4m6!3m5!1s0x39f89d8a1ce403b1:0x9b765751996bb9e9!8m2!3d22.612392!4d88.377555!16s%2Fg%2F1ptxrm21l!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		TALA_POST_OFFICE: {
			name: "Tala Post Office",
			gmapsUrl:
				"https://www.google.com/maps/place/Tala+Post+Office/@22.6059158,88.3744661,177m/data=!3m1!1e3!4m6!3m5!1s0x3a02762679d49381:0x5f5418e1e2837d91!8m2!3d22.6059168!4d88.3743949!16s%2Fg%2F1tj29f0b!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		TOLLYGUNGE_POLICE_STATION: {
			name: "Tollygunge Police Station",
			gmapsUrl:
				"https://www.google.com/maps/place/Tollygunge+P.S./@22.5141026,88.3453757,158m/data=!3m1!1e3!4m12!1m5!3m4!2zMjLCsDMwJzUxLjkiTiA4OMKwMjAnNDYuMiJF!8m2!3d22.514406!4d88.346158!3m5!1s0x3a0270cae1d81e07:0xbba029c5459a46c0!8m2!3d22.5142588!4d88.3458392!16s%2Fg%2F11bymy99ff!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		NEW_ALIPORE_PETROL_PUMP: {
			name: "New Alipore Petrol Pump",
			gmapsUrl:
				"https://www.google.com/maps/place/New+Alipore+Petrol+Pump/@22.5089637,88.3329027,71m/data=!3m1!1e3!4m12!1m5!3m4!2zMjLCsDMwJzMyLjQiTiA4OMKwMTknNTguMSJF!8m2!3d22.508994!4d88.332794!3m5!1s0x3a0270ae1f3b3a1f:0xad38aea6506c853f!8m2!3d22.5085775!4d88.3335009!16s%2Fg%2F11b7pzm0gb!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		BANKIM_MUKHERJEE_SARANI: {
			name: "Bankim Mukherjee Sarani",
			gmapsUrl:
				"https://www.google.com/maps/place/Bankim+Mukherjee+Sarani+-+Army+Camp/@22.5099505,88.3319888,72m/data=!3m1!1e3!4m12!1m5!3m4!2zMjLCsDMwJzM1LjIiTiA4OMKwMTknNTYuNCJF!8m2!3d22.509788!4d88.332329!3m5!1s0x3a0270add9c46a1f:0x36110ede91aa82e6!8m2!3d22.509789!4d88.332329!16s%2Fg%2F11c6_c8ryg!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		CHETLA: {
			name: "Chetla",
			gmapsUrl:
				"https://www.google.com/maps/place/Chetla/@22.5174824,88.3364584,122m/data=!3m1!1e3!4m12!1m5!3m4!2zMjLCsDMxJzAzLjMiTiA4OMKwMjAnMTIuMCJF!8m2!3d22.517572!4d88.336662!3m5!1s0x3a02774cc00e30f7:0x9973bbda1738dc1e!8m2!3d22.517572!4d88.336662!16s%2Fg%2F11b7pz3q71!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		ALIPORE_CHETLA_CROSSING: {
			name: "Alipore Chetla Crossing",
			gmapsUrl:
				"https://www.google.com/maps/place/Alipore+Chetla+Crossing/@22.5179859,88.332985,90m/data=!3m1!1e3!4m12!1m5!3m4!2zMjLCsDMxJzA0LjciTiA4OMKwMTknNTkuMyJF!8m2!3d22.517972!4d88.33313!3m5!1s0x3a0277529ba3889d:0x5a753a463cbb2bcb!8m2!3d22.517856!4d88.333302!16s%2Fg%2F11bymy85vp!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		KEORATALA_SHAMSHAN: {
			name: "Keoratala Shamshan",
			gmapsUrl:
				"https://www.google.com/maps/place/Keoratala+Shamshan/@22.5167306,88.3417102,85m/data=!3m1!1e3!4m12!1m5!3m4!2zMjLCsDMxJzAwLjgiTiA4OMKwMjAnMzAuNCJF!8m2!3d22.516899!4d88.341787!3m5!1s0x3a02774ad86edec7:0x36cb97593a4b3d98!8m2!3d22.5169015!4d88.3417867!16s%2Fg%2F11gbfbx_dv!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		RASHBEHARI_AVENUE_CROSSING: {
			name: "Rashbehari Avenue Crossing",
			gmapsUrl:
				"https://www.google.com/maps/place/S.P.+Mukherjee+Road+%2F+R.B.+Avenue+Crossing/@22.5175479,88.3458279,67m/data=!3m1!1e3!4m12!1m5!3m4!2zMjLCsDMxJzAzLjciTiA4OMKwMjAnNDQuOCJF!8m2!3d22.517695!4d88.345767!3m5!1s0x3a02773527497b0f:0xbbdb51e20b59da07!8m2!3d22.5176996!4d88.345781!16s%2Fg%2F11g__28mb!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		KALIGHAT: {
			name: "Kalighat",
			gmapsUrl:
				"https://www.google.com/maps/place/Kalighat+-+Near+Main+Toron/@22.523751,88.3417395,366m/data=!3m1!1e3!4m12!1m5!3m4!2zMjLCsDMxJzI0LjciTiA4OMKwMjAnMzAuOSJF!8m2!3d22.523526!4d88.341925!3m5!1s0x3a027749c1be4b93:0xdfc2e21ccf95469d!8m2!3d22.523523!4d88.341923!16s%2Fg%2F11byl4qpbd!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		NRS_HOSPITAL: {
			name: "NRS Hospital",
			gmapsUrl:
				"https://www.google.com/maps/place/A.J.C.+Bose+Road+-+NRS+Hospital/@22.5639571,88.3668778,402m/data=!3m1!1e3!4m6!3m5!1s0x3a0276561c799ea3:0xe566b5ffdddb4814!8m2!3d22.563957!4d88.368409!16s%2Fg%2F12hkbq_ks!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		RAMLILA_MAIDAN: {
			name: "Ramlila Maidan",
			gmapsUrl:
				"https://www.google.com/maps/place/Ramlila+Maidan/@22.559633,88.3674661,804m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a0276f9a062f333:0xff9cab9b31b3cd91!8m2!3d22.559633!4d88.370041!16s%2Fg%2F11g8bblzl9!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		RAJDANGA_NABA_PALLY: {
			name: "Rajdanga Naba Pally",
			gmapsUrl:
				"https://www.google.com/maps/place/Raj+Danga+Nabapally/@22.5146703,88.3902557,78m/data=!3m1!1e3!4m12!1m5!3m4!2zMjLCsDMwJzUyLjciTiA4OMKwMjMnMjUuMiJF!8m2!3d22.514643!4d88.390323!3m5!1s0x3a02714d19cfe4a5:0x72787fc5c458e230!8m2!3d22.514644!4d88.390324!16s%2Fg%2F12hq5tgj9!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMS4wIKXMDSoASAFQAw%3D%3D",
		},
		EKDALIA: {
			name: "Ekdalia",
			gmapsUrl:
				"https://www.google.com/maps/place/Ekdalia/@22.5206963,88.3682383,198m/data=!3m1!1e3!4m12!1m5!3m4!2zMjLCsDMxJzE0LjciTiA4OMKwMjInMDUuNiJF!8m2!3d22.520756!4d88.368214!3m5!1s0x3a0276d3f33de6e5:0x97850b9a0b12ab86!8m2!3d22.520876!4d88.368025!16s%2Fg%2F11gbfp22l_!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMS4wIKXMDSoASAFQAw%3D%3D",
		},
		GARIAHAT_MORE: {
			name: "Gariahat More",
			gmapsUrl:
				"https://www.google.com/maps/place/Gariahat+More/@22.5200923,88.363544,804m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a0276d450e5e077:0xe5043a36e48122e7!8m2!3d22.5200923!4d88.3661189!16s%2Fg%2F1ydnvm__p!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMS4wIKXMDSoASAFQAw%3D%3D",
		},
		SANTOSHPUR_LAKE: {
			name: "Santoshpur Lake",
			gmapsUrl:
				"https://www.google.com/maps/place/Santoshpur+Lake/@22.4918288,88.3824248,191m/am=t/data=!3m1!1e3!4m6!3m5!1s0x3a02716aa95f0f75:0x8443281c805ee1aa!8m2!3d22.491824!4d88.383126!16s%2Fg%2F11b7qd5rc7!5m1!1e1?entry=tts&g_ep=EgoyMDI2MDkwMi4wIPu8ASoASAFQAw%3D%3D&skid=59ae0639-ec08-468e-be55-e8524e982dd9",
		},
		SANTOSHPUR_BOTTOLA: {
			name: "Santoshpur Bottola",
			gmapsUrl:
				"https://www.google.com/maps/place/Santoshpur+Bottala/@22.4930523,88.3798409,50m/data=!3m1!1e3!4m12!1m5!3m4!2zMjLCsDI5JzM0LjkiTiA4OMKwMjInNDcuNiJF!8m2!3d22.493035!4d88.379878!3m5!1s0x3a02713e2c935b79:0x3526bfff908b3edd!8m2!3d22.4930262!4d88.3798778!16s%2Fg%2F11b7q10qtz!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMS4wIKXMDSoASAFQAw%3D%3D",
		},
		SULEKHA_MORE: {
			name: "Sulekha More",
			gmapsUrl:
				"https://www.google.com/maps/place/Sulekha+More/@22.4916501,88.3714729,201m/am=t/data=!3m1!1e3!4m6!3m5!1s0x3a027118064959e5:0xb0b301350b1539db!8m2!3d22.49165!4d88.372248!16s%2Fg%2F1hjgydcy9!5m1!1e1?entry=tts&g_ep=EgoyMDI2MDkwMi4wIPu8ASoASAFQAw%3D%3D&skid=608e706a-8891-4543-abe9-285535832aa1",
		},
		KK_DAS_COLLEGE: {
			name: "KK Das College",
			gmapsUrl:
				"https://www.google.com/maps/place/K.K.+Das+College/@22.4711722,88.3806125,179m/data=!3m1!1e3!4m12!1m5!3m4!2zMjLCsDI4JzE3LjIiTiA4OMKwMjInNTAuNyJF!8m2!3d22.471442!4d88.380746!3m5!1s0x3a02710ae4add2b3:0x13bd8220f494133!8m2!3d22.471439!4d88.380747!16s%2Fg%2F11b7q6kp0n!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMS4wIKXMDSoASAFQAw%3D%3D",
		},
		GARIA_NO_6_BUS_TERMINUS: {
			name: "Garia No. 6 Bus Terminus",
			gmapsUrl:
				"https://www.google.com/maps/place/Garia+No.+6/@22.4652144,88.3774054,116m/data=!3m1!1e3!4m12!1m5!3m4!2zMjLCsDI3JzU0LjciTiA4OMKwMjInMzguMyJF!8m2!3d22.465182!4d88.377306!3m5!1s0x3a0271a6d2859f21:0xa895964d52e7d3bb!8m2!3d22.465182!4d88.377305!16s%2Fg%2F1tp_4tf9!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMS4wIKXMDSoASAFQAw%3D%3D",
		},
		ANANDA_ASHRAM: {
			name: "Ananda Ashram",
			gmapsUrl:
				"https://www.google.com/maps/place/Ananda+Ashram/@22.4715265,88.3673922,136m/data=!3m1!1e3!4m12!1m5!3m4!2zMjLCsDI4JzE3LjUiTiA4OMKwMjInMDMuMCJF!8m2!3d22.471534!4d88.367492!3m5!1s0x3a0271012a1daba9:0xe828e01792c35e0f!8m2!3d22.471541!4d88.3675!16s%2Fg%2F1tnpjf1w!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMS4wIKXMDSoASAFQAw%3D%3D",
		},
		KARUNAMOYEE: {
			name: "Karunamoyee",
			gmapsUrl:
				"https://www.google.com/maps/place/Karunamayee/@22.4861149,88.3402206,135m/data=!3m1!1e3!4m12!1m5!3m4!2zMjLCsDI5JzEwLjQiTiA4OMKwMjAnMjQuMiJF!8m2!3d22.486214!4d88.340042!3m5!1s0x3a0270938a042c9f:0xe0783cb628868336!8m2!3d22.486215!4d88.340041!16s%2Fg%2F11f0wnv4kn!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMS4wIKXMDSoASAFQAw%3D%3D",
		},
		MUCHIPARA: {
			name: "Muchipara",
			gmapsUrl:
				"https://www.google.com/maps/place/Muchipara/@22.4871732,88.3324175,66m/data=!3m1!1e3!4m12!1m5!3m4!2zMjLCsDI5JzEzLjciTiA4OMKwMTknNTYuNSJF!8m2!3d22.487138!4d88.33235!3m5!1s0x3a0270999325aca3:0x30dc04062a9364fc!8m2!3d22.4871814!4d88.3323339!16s%2Fg%2F11gbfbvq9h!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMS4wIKXMDSoASAFQAw%3D%3D",
		},
		BEHALA_CHOWRASTA: {
			name: "Behala Chowrasta",
			gmapsUrl:
				"https://www.google.com/maps/place/Behala+Chowrasta/@22.4871511,88.3129405,171m/data=!3m1!1e3!4m14!1m7!3m6!1s0x3a027a6d9190f669:0x4dcef2ce2623eb60!2sBehala+Chowrasta!8m2!3d22.4870602!4d88.3131928!16s%2Fg%2F1pp2vlpvk!3m5!1s0x3a027a6debfee4f9:0x663ed9bd2228e65!8m2!3d22.486941!4d88.313366!16s%2Fg%2F1tsyn5x_!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMS4wIKXMDSoASAFQAw%3D%3D",
		},
		SAKHERBAZAR: {
			name: "Sakherbazar",
			gmapsUrl:
				"https://www.google.com/maps/place/Sakher+Bazar/@22.4817473,88.3113353,189m/data=!3m1!1e3!4m12!1m5!3m4!2zMjLCsDI4JzU0LjgiTiA4OMKwMTgnMzkuOSJF!8m2!3d22.481899!4d88.311089!3m5!1s0x3a027a6f6b0ffacd:0xf3e25cf29c32d37b!8m2!3d22.481902!4d88.311092!16s%2Fg%2F11b7q86d_x!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMS4wIKXMDSoASAFQAw%3D%3D",
		},
		AJANTA_CINEMA: {
			name: "Ajanta Cinema",
			gmapsUrl:
				"https://www.google.com/maps/place/Ajanta+Cinema/@22.5079328,88.3166994,1240m/data=!3m1!1e3!4m6!3m5!1s0x3a027a06d092224f:0xb72abb8c0a0d05b4!8m2!3d22.5091892!4d88.3211371!16s%2Fg%2F11b7q4h0nq!5m1!1e1?entry=tts&g_ep=EgoyMDI2MDkxNi4wIPu8ASoASAFQAw%3D%3D&skid=e839ca7b-8ae2-46e1-974d-da1ea2bda4a1",
		},
		PANCHANANTALA: {
			name: "Panchanantala",
			gmapsUrl:
				"https://www.google.com/maps/place/Panchanantala/@22.4674026,88.3070362,402m/data=!3m1!1e3!4m10!1m2!2m1!1spanchanantala+near+thakurpukur!3m6!1s0x3a027a8a0f9d5903:0x262825028bb1593b!8m2!3d22.467561!4d88.308826!15sCh5wYW5jaGFuYW50YWxhIG5lYXIgdGhha3VycHVrdXJaICIecGFuY2hhbmFudGFsYSBuZWFyIHRoYWt1cnB1a3VykgEIYnVzX3N0b3CaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMnQwY2xGdVFsbFZiVGxOV1RCT1FtSkZWVEpsUldoc1ducEtSRTlZWXhBQuABAPoBBAgAEEQ!16s%2Fg%2F11bylf9k7v!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMS4wIKXMDSoASAFQAw%3D%3D",
		},
	},
	METRO_STATIONS: {
		DAKSHINESHWAR: {
			name: "Dakshineshwar",
			gmapsUrl:
				"https://www.google.com/maps/place/Dakshineswar/@22.6538276,88.3611228,804m/data=!3m2!1e3!4b1!4m6!3m5!1s0x39f89daa1748bbcb:0xa27c675d829f7253!8m2!3d22.6538276!4d88.3636977!16s%2Fg%2F11r1s77q7s!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		BELGACHIA: {
			name: "Belgachia",
			gmapsUrl:
				"https://www.google.com/maps/place/Belgachia/@22.605973,88.3837781,804m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a02761eb2edc24b:0x907a8d18e3d19993!8m2!3d22.605973!4d88.386353!16s%2Fm%2F0gtszc_!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		RABINDRA_SAROBAR: {
			name: "Rabindra Sarobar",
			gmapsUrl:
				"https://www.google.com/maps/place/Rabindra+Sarobor/@22.5078864,88.3429822,805m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a0270c9a7b32055:0x4752ac60f521069!8m2!3d22.5078864!4d88.3455571!16s%2Fm%2F0gtwz05!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		NETAJI_BHAVAN: {
			name: "Netaji Bhavan",
			gmapsUrl:
				"https://www.google.com/maps/place/Netaji+Bhavan/@22.532977,88.3431375,804m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a027738d8f3509f:0x50f16bdb507d7d94!8m2!3d22.532977!4d88.3457124!16s%2Fm%2F0bmfz9v!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		PARK_STREET: {
			name: "Park Street",
			gmapsUrl:
				"https://www.google.com/maps/place/Park+Street/@22.55445,88.3472751,804m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a02770e57b33743:0x76896b81976ccd02!8m2!3d22.55445!4d88.34985!16s%2Fm%2F0gttv70!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		CENTRAL: {
			name: "Central",
			gmapsUrl:
				"https://www.google.com/maps/place/Central/@22.5725237,88.3556674,804m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a0277ac0161c411:0xa1c2fcf3868f35f3!8m2!3d22.5725237!4d88.3582423!16s%2Fm%2F0gtwrz3!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		BEHALA_BAZAR: {
			name: "Behala Bazar",
			gmapsUrl:
				"https://www.google.com/maps/place/Behala+Bazar/@22.5003316,88.3192637,1549m/data=!3m1!1e3!4m6!3m5!1s0x3a027a0ee4cea537:0x53edb209775aeb4!8m2!3d22.500378!4d88.3172706!16s%2Fg%2F1ptxv86p1!5m1!1e1?entry=tts&g_ep=EgoyMDI2MDkxNi4wIPu8ASoASAFQAw%3D%3D&skid=dad2a5f9-8fbc-4c4d-8407-ceefb4f132f5",
		},
		GEETANJALI: {
			name: "Geetanjali",
			gmapsUrl:
				"https://www.google.com/maps/place/Gitanjali/@22.469425,88.3673474,805m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a02710777f15313:0x89774f7a8b6e951f!8m2!3d22.469425!4d88.3699223!16s%2Fg%2F1hm6s202z?entry=tts&g_ep=EgoyMDI2MDgxOS4wIPu8ASoASAFQAw%3D%3D&skid=757ff03e-6f00-4000-9fc1-f3722ceb8645",
		},
		THAKURPUKUR: {
			name: "Thakurpukur",
			gmapsUrl:
				"https://www.google.com/maps/place/Thakurpukur/@22.4627778,88.2729664,6203m/data=!3m1!1e3!4m6!3m5!1s0x3a027a8ba16f9511:0xa766c9189ed14f7d!8m2!3d22.4642826!4d88.3074849!16s%2Fg%2F1hf6jkfmc?entry=tts&g_ep=EgoyMDI2MDgxOS4wIPu8ASoASAFQAw%3D%3D&skid=9747849a-f8b3-4dfa-8e00-ff0f668980a2",
		},
		NETAJI: {
			name: "Netaji",
			gmapsUrl:
				"https://www.google.com/maps/place/Netaji/@22.4809362,88.3433862,805m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a0270ed8471e3fb:0xf8876f7c9d7c7ba7!8m2!3d22.4809362!4d88.3459611!16s%2Fm%2F0gtv5rk!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMS4wIKXMDSoASAFQAw%3D%3D",
		},
	},
	RAIL_STATIONS: {
		TALA: {
			name: "Tala",
			gmapsUrl:
				"https://www.google.com/maps/place/Tala/@22.6063823,88.3762971,804m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a0276216235b991:0x36fcc1cfa1da07b8!8m2!3d22.6063823!4d88.378872!16s%2Fg%2F11gk_36m3p!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		SEALDAH: {
			name: "Sealdah",
			gmapsUrl:
				"https://www.google.com/maps/place/Sealdah/@22.567792,88.3684454,804m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a027659c5555555:0xa3968ffa1950bfd0!8m2!3d22.567792!4d88.3710203!16zL20vMDV2MWM5!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		BALLY_HALT: {
			name: "Bally Halt",
			gmapsUrl:
				"https://www.google.com/maps/place/Bally+Halt/@22.6522445,88.3366672,804m/data=!3m2!1e3!4b1!4m6!3m5!1s0x39f89d2407d0b96d:0xbc21f779dc795ff2!8m2!3d22.6522445!4d88.3392421!16s%2Fg%2F1vs1q8hf!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
		},
		BALLYGUNGE: {
			name: "Ballygunge",
			gmapsUrl:
				"https://www.google.com/maps/place/Ballygunge+Jn/@22.5194391,88.3717059,302m/data=!3m1!1e3!4m6!3m5!1s0x3a0276d27c71e5b1:0xdfc52b39229e41e1!8m2!3d22.5193772!4d88.3721353!16s%2Fg%2F11f776gnq7!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMS4wIKXMDSoASAFQAw%3D%3D",
		},
	},
};

export function getPinLocation(urlString) {
	try {
		const path = new URL(urlString).pathname;
		const latitude = path.match(/!3d(-?\d+(?:\.\d+)?)/)?.[1];
		const longitude = path.match(/!4d(-?\d+(?:\.\d+)?)/)?.[1];

		return latitude && longitude ? { latitude, longitude } : null;
	} catch {
		return null;
	}
}

export function getToiletsUrl(gmapsUrl) {
	const pin = getPinLocation(gmapsUrl);
	return pin
		? `https://www.google.com/maps/search/toilets/@${pin.latitude},${pin.longitude},17z?entry=ttu`
		: "";
}

export function renderPandal(item, routeData) {
	const safe = (value) =>
		String(value).replace(
			/[&<>"']/g,
			(char) =>
				({
					"&": "&amp;",
					"<": "&lt;",
					">": "&gt;",
					'"': "&quot;",
					"'": "&#39;",
				})[char],
		);
	const icons = {
		[LinkType.FACEBOOK]: "facebook",
		[LinkType.INSTAGRAM]: "instagram",
		[LinkType.WEBSITE]: "chrome",
		[LinkType.YOUTUBE]: "youtube",
		[LinkType.X]: "x-twitter",
		[LinkType.PHONE]: "phone",
		[LinkType.EMAIL]: "envelope",
	};
	const links = item.links
		.map(({ type, value }) => {
			const href =
				type === LinkType.PHONE
					? `tel:${value}`
					: type === LinkType.EMAIL
						? `mailto:${value}`
						: value;
			const external = type !== LinkType.PHONE && type !== LinkType.EMAIL;
			const style =
				type === LinkType.PHONE || type === LinkType.EMAIL ? "solid" : "brands";
			return `<div class="itinerary-item-fa-btn"><a href="${safe(href)}"${external ? ' target="_blank" rel="noopener"' : ""}><i class="fa-${style} fa-${icons[type]}"></i></a></div>`;
		})
		.join("");
	const linkFooter = links
		? `<div class="itinerary-item-expansion-panel-footer">${links}</div>`
		: "";
	const toiletsUrl = getToiletsUrl(item.gmapsUrl);
	const toiletsLink = toiletsUrl
		? `<a class="map-btn" target="_blank" rel="noopener" href="${safe(toiletsUrl)}">Toilets &#8599;</a>`
		: "";
	const area = `${item.area[0].toUpperCase()} (${item.area[1].toUpperCase()})`;
	const previousStop = routeData.stops.find(
		(stop) => stop.order === item.order - 1,
	);
	const transitBeforeStopIndex = item.isPreviousTransit
		? item.transit
		: previousStop?.isPreviousTransit
			? undefined
			: previousStop?.transit;
	const transitBeforeStop = routeData.transits.find(
		(transit) => transit.index === transitBeforeStopIndex,
	);
	const lastTransitDestination = transitBeforeStop?.steps.at(-1)?.dest?.name;
	const fromLocation = lastTransitDestination || previousStop?.title;
	const walkingTime = Math.ceil(item.distance / WALKING_PACE_METERS_PER_MINUTE);

	return `<span class="itinerary-item-order">${String(item.order).padStart(2, "0")}</span><div class="itinerary-item pandal" aria-expanded="false"><div class="itinerary-item-body"><div><div class="geo-area">${safe(area)}</div><h3>${safe(item.title)}</h3><p>&#128694; ${safe(item.distance)} m &middot; &#9201;&#65039; ${walkingTime} min${fromLocation ? ` from ${safe(fromLocation)}` : ""}</p></div><div class="route-actions"><a class="map-btn" target="_blank" rel="noopener" href="${safe(item.gmapsUrl)}">Google Maps &#8599;</a>${toiletsLink}</div></div><div class="itinerary-item-expansion-panel" aria-hidden="true"><div><div class="itinerary-item-expansion-panel-body">${item.htmlDesc}</div>${linkFooter}</div></div></div>`;
}

export function renderTransit(transit) {
	const getPlaceType = (place) => {
		if (Object.values(Places.BUS_STOPS).includes(place)) {
			return { chipClass: "place-chip--bus" };
		}
		if (Object.values(Places.METRO_STATIONS).includes(place)) {
			return { chipClass: "place-chip--metro" };
		}
		if (Object.values(Places.RAIL_STATIONS).includes(place)) {
			return { chipClass: "place-chip--rail" };
		}
		return null;
	};
	const locationLink = (place) => {
		const placeType = getPlaceType(place);
		const chipClass = placeType ? ` ${placeType.chipClass}` : "";
		return place?.gmapsUrl
			? `<a class="route-location-link${chipClass}" target="_blank" rel="noopener" href="${place.gmapsUrl}">${place.name}</a>`
			: place.name;
	};
	const steps = transit.steps.map((step) => {
		const destination = locationLink(step.dest);
		switch (step.medium) {
			case TransitMedium.WALK: {
				const prefix = step.prefix ? `${step.prefix} ` : "";
				const from = step.fromName ? `from ${step.fromName} to` : "to";
				const duration = Math.ceil(
					step.distance / WALKING_PACE_METERS_PER_MINUTE,
				);
				return `${prefix}&#128694; ${step.distance} m &middot; &#9201;&#65039; ${duration} min ${from} ${destination}`;
			}
			case TransitMedium.BUS:
				return step.src
					? `Take a bus from ${locationLink(step.src)} to ${destination}`
					: `Then take a bus to ${destination}`;
			case TransitMedium.METRO:
				return `take a metro to ${destination}`;
			case TransitMedium.AUTO:
				return `then take ${step.modeLabel || "an auto"} to ${destination}`;
			case TransitMedium.TRAIN:
				return step.src
					? `Take ${step.service || "a train"} from ${locationLink(step.src)} to ${destination}`
					: `Then take ${step.service || "a train"} to ${destination}`;
			case TransitMedium.CAB:
				return `Then book a cab to ${destination}`;
			default:
				return destination;
		}
	});
	return `<strong>Transit:</strong> ${steps.join(" &rarr; ")}${transit.note ? ` &middot; ${transit.note}` : ""}.`;
}

export function renderLunch(lunch) {
	const walkingTime = Math.ceil(
		lunch.distance / WALKING_PACE_METERS_PER_MINUTE,
	);
	return `<li class="itinerary-stop lunch-stop-step"><div class="itinerary-item lunch-stop"><div class="itinerary-item-body"><div><div class="geo-area">&#127869; LUNCH</div><h3>${lunch.title}</h3><p>Lunch stop. &#128694; ${lunch.distance} m &middot; &#9201;&#65039; ${walkingTime} min from ${lunch.fromName}.</p></div><div class="route-actions"><a class="map-btn" target="_blank" rel="noopener" href="${lunch.gmapsUrl}">Google Maps &#8599;</a></div></div></div></li>`;
}
