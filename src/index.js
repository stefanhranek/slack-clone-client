import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Routes from "./routes";

const App = <Routes />;

ReactDOM.render(App, document.getElementById("root"));

serviceWorker.unregister();
