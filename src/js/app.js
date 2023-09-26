import "./parts/sliders.js";
import "./parts/map.js";
import "./parts/popup.js";
import "./parts/header.js";
import "./parts/parallax.js";

import { maskInputs } from "./static/inputmask.js";
import { runTicker } from "./static/ticker.js";
import { replaceDomElements } from "./static/replace.js";
import { animations, imageAnimation } from "./parts/animations.js";

replaceDomElements();
animations();
imageAnimation();
runTicker()
maskInputs('+999-99-999-9999', '.phone')