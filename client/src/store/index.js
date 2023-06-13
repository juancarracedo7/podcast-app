import { configureStore } from '@reduxjs/toolkit'
import podcast from './slices/podcast'

export default configureStore({
  reducer: {
    podcast
  }
})
