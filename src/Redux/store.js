import { configureStore } from "@reduxjs/toolkit"
import favoritesSlice from "./favoriteSlice"

const store = configureStore({
	reducer: {
		favorites: favoritesSlice.reducer,
	},
})

export default store
