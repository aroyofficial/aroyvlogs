import { barasatData } from "./barasat.js";
import { naihatiData } from "./naihati.js";
import { showPujaRadar } from "./map.js";

const data = {
	barasat: barasatData,
	naihati: naihatiData,
};

showPujaRadar(data, "puja-radar");
