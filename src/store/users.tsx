import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './index'

const users = require('../testdata/users.json')

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

interface postsInitialState {
    users: BlogUser[]
}

const initialState: postsInitialState = {
    users: users
} 

export const usersSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    editUserUsername: (state, action: PayloadAction<{id: number, username: string}>) => {
        console.log(action)
          
          if (state.users.find( (user: BlogUser)  => user.id == action.payload.id)) {
              const user = state.users.find((user: BlogUser)  => user.id == action.payload.id)!
              user.username = action.payload.username
          }
      },
  },
})

export const { editUserUsername } = usersSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default usersSlice.reducer