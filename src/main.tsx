// import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";

import "@coreui/coreui/dist/css/coreui.min.css";

import "./index.css";
// import "semantic-ui-css/semantic.min.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
