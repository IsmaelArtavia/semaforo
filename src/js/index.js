//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";
import Semaforo from "./component/Semaforo.js";
import Cable from "./component/cable.js";

//render your react application
ReactDOM.render(
	<div>
		<Home />
		<Cable />
		<Semaforo />
	</div>,
	document.querySelector("#app")
);
