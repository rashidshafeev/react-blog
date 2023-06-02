import { configureStore, createSlice } from '@reduxjs/toolkit'
import postsSlice from './posts'
import usersSlice from './users'
import commentsSlice from './comments'


export const store = configureStore({
    reducer: {
      posts: postsSlice,
      comments: commentsSlice,
      users: usersSlice,
    },
  })

  // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch