import { configureStore } from "@reduxjs/toolkit";
import footerStateReducer from './reduxFeatures/footerState'
export const store = configureStore({
    reducer:{
        footerState: footerStateReducer
    }
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch