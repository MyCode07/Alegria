import "./parts/sliders.js";
// import { accorden } from "./static/accordeon.js";
// import { maskInputs } from "./static/inputmask.js";
import { runTicker } from "./static/ticker.js";
import { replaceDomElements } from "./static/replace.js";
import { toTop } from "./static/to-top.js";


import "./static/replace.js";
import "./parts/header.js";


toTop();
replaceDomElements();
runTicker()
// accorden();
// maskInputs('+7 999 999 999 999', '.phone')