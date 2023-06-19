import { createSlice } from '@reduxjs/toolkit'
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
  error: boolean,
  postCount: number,
  pageCount: number,
  currentPage: number,
  perPage: number,
  filterValue: string,
  sorting: string
}

const initialState: postsState = {
  posts: [],
  isLoading: false,
  error: false,
  postCount: 0,
  pageCount: 0,
  currentPage: 1,
  perPage: 10,
  filterValue: '',
  sorting: ''
} 

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getAllPostsFetch: (state) => {
      state.isLoading = true
    },
    getUserPostsFetch: (state, action: PayloadAction<number>) => {
      state.isLoading = true
    },
    getPostsSuccess: (state, action: PayloadAction<BlogPost[]>) => {
      state.posts = action.payload
      state.isLoading = false
    },
    getPostsFail: (state) => {
      state.isLoading = false
      state.error = true
    },
    postCountUpdate: (state, action: PayloadAction<number>) => {
      state.postCount = action.payload
    },
    pageCountUpdate: (state, action: PayloadAction<number>) => {
      state.pageCount = action.payload
    },
    switchPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    filterChange: (state, action: PayloadAction<string>) => {
      state.filterValue = action.payload
    },
    sortingChange: (state, action: PayloadAction<string>) => {
      state.sorting = action.payload
    },
    perPageChange: (state, action: PayloadAction<number>) => {
      state.perPage = action.payload
    },
    editPost: (state, action: PayloadAction<{id: number, body: string}>) => {
        if (state.posts.find( (post: BlogPost)  => post.id === action.payload.id)) {
            const comment = state.posts.find((post: BlogPost)  => post.id === action.payload.id)!
            comment.body = action.payload.body
        }
    },
  },
})

export const { editPost, getAllPostsFetch, getUserPostsFetch, getPostsSuccess, getPostsFail, pageCountUpdate, postCountUpdate, switchPage, filterChange, sortingChange, perPageChange } = postsSlice.actions

export default postsSlice.reducer