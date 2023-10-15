import {configureStore} from "@reduxjs/toolkit";
import {userRequest} from "../services/PostService";


export const store = configureStore({
    reducer: {
        // userReducer,
        [userRequest.reducerPath]: userRequest.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userRequest.middleware)
})

//
//
// const rootReducer = combineReducers({
//     userReducer,
//     [postsApi.reducerPath]: postsApi.reducer
//
// })
//
// export const setupStore = () => {
//     return configureStore({
//         reducer: rootReducer,
//         middleware: (getDefaultMiddleware) =>
//             getDefaultMiddleware().concat(postsApi.middleware)
//     })
// }

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

// setupListeners(store.dispatch)