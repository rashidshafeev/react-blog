import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface BlogUser {
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

interface BlogUsers {
    [userId: string]: BlogUser,
}

interface usersState {
    users: BlogUsers,
    isLoading: boolean
}

const initialState: usersState = {
    users: {},
    isLoading: false
} 

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUserFetch: (state, action: PayloadAction<number>) => {
      state.isLoading = true
    },
    getUserSuccess: (state, action: PayloadAction<BlogUser>) => {
      const userId = action.payload.id
      state.users[userId] = action.payload
      state.isLoading = false
    },
    getUserFail: (state) => {
      state.isLoading = false
    },
    editUserUsername: (state, action: PayloadAction<{id: number, username: string}>) => {
          // if (state.users.find( (user: BlogUser)  => user.id === action.payload.id)) {
          //     const user = state.users.find((user: BlogUser)  => user.id === action.payload.id)!
          //     user.username = action.payload.username
          // }
      },
  },
})

export const { editUserUsername, getUserFetch, getUserSuccess, getUserFail} = usersSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default usersSlice.reducer