import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./custom.scss";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import checkout from "./redux/checkout";

const store = configureStore({
	reducer: {
		checkout: checkout,
	},
});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
