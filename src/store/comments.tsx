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
    [postId: string]: {
      comments: BlogComment[],
      isLoading: boolean,
      error: boolean
    },
 }

interface commentsState {
    comments: BlogComments
}

const initialState: commentsState = {
    comments: {}
}

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    getPostCommentsFetch: (state, action: PayloadAction<number>) => {
      if (!state.comments[String(action.payload)]) {
        state.comments[String(action.payload)] = {
          comments: [],
          isLoading: true,
          error: false
        }
      }

      state.comments[String(action.payload)].isLoading = true
    },
    getPostCommentsSuccess: (state, action: PayloadAction<BlogComment[]>) => {
      const postId = action.payload[0].postId
      state.comments[postId].comments = action.payload
      state.comments[postId].isLoading = false
    },
    getPostCommentsFail: (state, action: PayloadAction<number>) => {
      if (!state.comments[String(action.payload)]) {
        state.comments[String(action.payload)] = {
          comments: [],
          isLoading: false,
          error: true
        }
      }
      state.comments[String(action.payload)].isLoading = false
      state.comments[String(action.payload)].error = false
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