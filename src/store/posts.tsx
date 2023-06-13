import { createSlice, current } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface BlogPost {
  userId: number,
  id: number,
  title: string,
  body: string
}

export interface postsState {
  posts: BlogPost[],
  isLoading: boolean,
  currentPage: number,
  perPage: number,
  totalCount: number,
  filterValue: string,
  sorting: string
}

const initialState: postsState = {
  posts: [],
  isLoading: false,
  currentPage: 1,
  perPage: 10,
  totalCount: 0,
  filterValue: '',
  sorting: ''
} 

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPostsFetch: (state) => {
      state.isLoading = true
    },
    getPostsSuccess: (state, action: PayloadAction<BlogPost[]>) => {
      state.posts = action.payload
      state.totalCount = action.payload.length
      state.isLoading = false
    },
    getPostsFail: (state) => {
      state.isLoading = false
    },
    switchPage: (state, action: PayloadAction<{page: number}>) => {
      state.currentPage = action.payload.page
    },
    editPost: (state, action: PayloadAction<{id: number, body: string}>) => {
        if (state.posts.find( (post: BlogPost)  => post.id === action.payload.id)) {
            const comment = state.posts.find((post: BlogPost)  => post.id === action.payload.id)!
            comment.body = action.payload.body
        }
    },
  },
})

export const { editPost, getPostsFetch, getPostsSuccess, getPostsFail, switchPage } = postsSlice.actions

export default postsSlice.reducer