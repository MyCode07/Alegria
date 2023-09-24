import "./parts/sliders.js";
import "./parts/map.js";
import { maskInputs } from "./static/inputmask.js";
import { runTicker } from "./static/ticker.js";
import { toTop } from "./static/to-top.js";



import "./static/replace.js";
import "./parts/header.js";
import { animations, imageAnimation } from "./parts/animations.js";

animations();
imageAnimation();
toTop();
runTicker()
maskInputs('+999-99-999-9999', '.phone')