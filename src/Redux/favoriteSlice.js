import { createSlice } from "@reduxjs/toolkit"

const favoritesSlice = createSlice({
	name: "favorites",
	initialState: [],
	reducers: {
		addFavorite: (state, action) => {
			const { restaurant } = action.payload
			const existingFavorite = state.find((fav) => fav._id === restaurant._id)
			if (!existingFavorite) {
				state.push(restaurant)
			}
		},
		removeFavorite: (state, action) => {
			const { restaurantId } = action.payload
			return state.filter((fav) => fav._id !== restaurantId)
		},
	},
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions

export default favoritesSlice
