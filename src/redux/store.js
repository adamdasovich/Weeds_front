import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartRedux';
import userReducer from './userRedux';
import {
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
}

const persistedUserReducer = persistReducer(persistConfig, userReducer)
const persistedCartReducer = persistReducer(persistConfig, cartReducer)


export const store = configureStore({
	reducer: {
		cart: persistedCartReducer,
		user: persistedUserReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

