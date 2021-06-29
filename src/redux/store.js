import { configureStore } from "@reduxjs/toolkit";
import checkout from "./checkout";

export default configureStore({
	reducer: {
		checkout: checkout,
	},
});
