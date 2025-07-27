import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { persistReducer, persistStore } from "redux-persist"

import templateReducer from "./slices/templateSlice"

const chromeStorage = {
  getItem: async (key: string) => await new Storage().get(key),
  setItem: async (key: string, value: string) =>
    await new Storage().set(key, value),
  removeItem: async (key: string) => await new Storage().remove(key)
}

const persistConfig = {
  key: "root",
  storage: chromeStorage,
  whiteList: ["templates"]
}

const rootReducer = combineReducers({
  templates: templateReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"]
      }
    })
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
