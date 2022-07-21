import { combineReducers } from '@reduxjs/toolkit'
import comic from './comics/comicSlice'
import userSlice from './users/userSlice'
import { reducer as personagem } from './characters/characterSlice'

export const rootReducer = combineReducers({
  comic,
  userSlice,
  personagem,
})
