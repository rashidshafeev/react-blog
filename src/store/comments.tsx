import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface BlogComment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
  }

interface commentsInitialState {
    comments: BlogComment[],
    isLoading: boolean
}

const initialState: commentsInitialState = {
    comments: [],
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
      state.comments = action.payload
      state.isLoading = false
    },
    getPostCommentsFail: (state) => {
      state.isLoading = false
    },
    editComment: (state, action: PayloadAction<{id: number, body: string}>) => {
        console.log(action)

        if (state.comments.find( (comment: BlogComment)  => comment.id === action.payload.id)) {
            const comment = state.comments.find((comment: BlogComment)  => comment.id === action.payload.id)!
            comment.body = action.payload.body
        }
      }
  },
})

export const { editComment, getPostCommentsFetch, getPostCommentsSuccess, getPostCommentsFail } = commentsSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default commentsSlice.reducer