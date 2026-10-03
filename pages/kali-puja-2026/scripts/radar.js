import { chaturthi as barasatData } from "./barasat.js";
import { panchami as naihatiData } from "./naihati.js";
import { showPujaRadar } from "./map.js";

const data = {
	barasat: barasatData,
	naihati: naihatiData,
};

showPujaRadar(data, "puja-radar");
