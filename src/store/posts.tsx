import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './index'

const posts = require('../testdata/posts.json')

interface BlogPost {
  userId: number,
  id: number,
  title: string,
  body: string
}

interface postsInitialState {
  posts: BlogPost[]
}

const initialState: postsInitialState = {
  posts: posts
} 

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    editPost: (state, action: PayloadAction<{id: number, body: string}>) => {
      console.log(action)
        
        if (state.posts.find( (post: BlogPost)  => post.id == action.payload.id)) {
            const comment = state.posts.find((post: BlogPost)  => post.id == action.payload.id)!
            comment.body = action.payload.body
        }
    },
  },
})

export const { editPost } = postsSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default postsSlice.reducer