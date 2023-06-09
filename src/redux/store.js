import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"

import { persistStore, persistReducer } from "redux-persist"
import AsyncStorage from "@react-native-async-storage/async-storage"

import rootReducer from "./reducers"

const persistConfig = {
	key: "root",
	storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware({
		serializableCheck: false,
	}),
})

export const persistor = persistStore(store)

//https://www.youtube.com/watch?v=G6qldLvWwow
