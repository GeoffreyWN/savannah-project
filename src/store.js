import { configureStore } from '@reduxjs/toolkit'
import users from './containers/Home/store'

export const store = configureStore({
  reducer: { users }
})
