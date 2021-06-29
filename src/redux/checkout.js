import { createSlice } from "@reduxjs/toolkit";

export const checkout = createSlice({
	name: "checkout",
	initialState: {
		titles: [],
		prices: [],
		url: [],
	},
	reducers: {
		addTitle: (state, data) => {
			state.titles.push(data.payload);
		},
		addPrice: (state, data) => {
			state.prices.push(data.payload);
		},
		addUrl: (state, data) => {
			state.url.push(data.payload);
		},
	},
});

export const { addTitle, addPrice, addUrl } = checkout.actions;

export default checkout.reducer;
