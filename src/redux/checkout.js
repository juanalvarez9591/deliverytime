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
		removeTitle: (state, data) => {
			const index = state.titles.indexOf(data.payload);
			if (index > -1) {
				state.titles.splice(index, 1);
			}
		},
		removePrice: (state, data) => {
			const index = state.prices.indexOf(data.payload);
			if (index > -1) {
				state.prices.splice(index, 1);
			}
		},
	},
});

export const { addTitle, addPrice, removeTitle, removePrice } =
	checkout.actions;

export default checkout.reducer;
