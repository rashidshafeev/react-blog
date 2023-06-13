import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface BlogComment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
  }

interface BlogComments {
    [postId: string]: BlogComment[],
 }

interface commentsState {
    comments: BlogComments,
    isLoading: boolean
}

const initialState: commentsState = {
    comments: {},
    isLoading: false
}

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    getPostCommentsFetch: (state, action: PayloadAction<{id: number}>) => {
      state.isLoading = true
    },
    getPostCommentsSuccess: (state, action: PayloadAction<BlogComment[]>) => {
      const postId = action.payload[0].postId
      state.comments[postId] = action.payload
      state.isLoading = false
    },
    getPostCommentsFail: (state) => {
      state.isLoading = false
    },
    editComment: (state, action: PayloadAction<{id: number, body: string}>) => {
        // if (state.comments.find((comment: BlogComment)  => comment.id === action.payload.id)) {
        //     const comment = state.comments.find((comment: BlogComment)  => comment.id === action.payload.id)!
        //     comment.body = action.payload.body
        // }
      }
  },
})

export const { editComment, getPostCommentsFetch, getPostCommentsSuccess, getPostCommentsFail } = commentsSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default commentsSlice.reducer