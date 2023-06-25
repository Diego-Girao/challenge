import { combineReducers } from "@reduxjs/toolkit"
import favoritesReducer from "./favoriteSlice"

const rootReducer = combineReducers({
	favorites: favoritesReducer,
	// Outros reducers podem ser adicionados aqui
})

export default rootReducer
