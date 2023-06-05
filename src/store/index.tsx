import { configureStore } from '@reduxjs/toolkit'
import postsSlice from './posts'
import usersSlice from './users'
import commentsSlice from './comments'
import createSagaMiddleware from '@redux-saga/core'

import rootSaga from './sagas/rootSaga'

const saga = createSagaMiddleware()


export const store = configureStore({
    reducer: {
      posts: postsSlice,
      comments: commentsSlice,
      users: usersSlice,
    },
    middleware: [saga]
  })

saga.run(rootSaga)

  // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch