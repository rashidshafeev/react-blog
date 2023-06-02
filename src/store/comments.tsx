import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './index'

const comments = require('../testdata/comments.json')

interface BlogComment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
  }

interface commentsInitialState {
    comments: BlogComment[]
}

const initialState: commentsInitialState = {
    comments: comments
}

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    editComment: (state, action: PayloadAction<{id: number, body: string}>) => {
        console.log(action)

        if (state.comments.find( (comment: BlogComment)  => comment.id == action.payload.id)) {
            const comment = state.comments.find((comment: BlogComment)  => comment.id == action.payload.id)!
            comment.body = action.payload.body
        }
      }
  },
})

export const { editComment } = commentsSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default commentsSlice.reducer