import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "../store/user/userSlice";
import {api} from "../services/api.ts";

// import postsReducer from "../store/posts/postsSlice";

export const rootReducer = combineReducers({
  userReducer,
  [api.reducerPath]: api.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

// export const store = configureStore({
//   reducer: {
//     [api.reducerPath]: api.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(api.middleware)
// })
//
// setupListeners(store.dispatch)
