import { combineReducers } from '@reduxjs/toolkit'
import comic from './comics/comicSlice'
import characters from './characters/reducer'
import userSlice from './users/userSlice'

export const rootReducer = combineReducers({
  comic,
  characters,
  userSlice,
})
