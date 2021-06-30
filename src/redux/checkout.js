import { createSlice } from "@reduxjs/toolkit";

export const checkout = createSlice({
	name: "checkout",
	initialState: {
		titles: [],
		prices: [],
	},
	reducers: {
		addTitle: (state, data) => {
			state.titles.push(data.payload);
		},
		addPrice: (state, data) => {
			state.prices.push(data.payload);
		},
	},
});

export const { addTitle, addPrice } = checkout.actions;

export default checkout.reducer;
