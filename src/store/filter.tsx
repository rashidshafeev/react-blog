import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface BlogPost {
  userId: number,
  id: number,
  title: string,
  body: string
}

interface postsInitialState {
  posts: BlogPost[],
  isLoading: boolean
}

const initialState: postsInitialState = {
  posts: [],
  isLoading: false
} 

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    getPostsFetch: (state) => {
      state.isLoading = true
    },
    getPostsSuccess: (state, action: PayloadAction<BlogPost[]>) => {
      state.posts = action.payload
      state.isLoading = false
    },
    getPostsFail: (state) => {
      state.isLoading = false
    },
    editPost: (state, action: PayloadAction<{id: number, body: string}>) => {
        if (state.posts.find( (post: BlogPost)  => post.id === action.payload.id)) {
            const comment = state.posts.find((post: BlogPost)  => post.id === action.payload.id)!
            comment.body = action.payload.body
        }
    },
  },
})

export const { editPost, getPostsFetch, getPostsSuccess, getPostsFail } = filterSlice.actions

export default filterSlice.reducer