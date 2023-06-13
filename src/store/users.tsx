import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface BlogUser {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string
      }
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
  }

interface postsState {
    users: BlogUser[],
    isLoading: boolean
}

const initialState: postsState = {
    users: [],
    isLoading: false
} 

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsersFetch: (state) => {
      state.isLoading = true
    },
    getUsersSuccess: (state, action: PayloadAction<BlogUser[]>) => {
      state.users = action.payload
      state.isLoading = false
    },
    getUsersFail: (state) => {
      state.isLoading = false
    },
    editUserUsername: (state, action: PayloadAction<{id: number, username: string}>) => {
          if (state.users.find( (user: BlogUser)  => user.id === action.payload.id)) {
              const user = state.users.find((user: BlogUser)  => user.id === action.payload.id)!
              user.username = action.payload.username
          }
      },
  },
})

export const { editUserUsername, getUsersFetch, getUsersSuccess, getUsersFail } = usersSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default usersSlice.reducer