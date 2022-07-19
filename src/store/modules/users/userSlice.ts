/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

type User = {
  id: number
  name: string
}

type InitialState = {
  loading: boolean
  users: User[]
  error: string
}

const initialState: InitialState = {
  loading: false,
  users: [],
  error: '',
}

// Gerar os tipos de ações pendentes, cumpridas e rejeitadas
export const fetchUsers = createAsyncThunk('users/fetchUsers', () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.data)
})

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true
    })
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<User[]>) => {
        state.loading = false
        state.users = action.payload
        state.error = ''
      }
    )
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false
      state.users = []
      state.error =
        action.error.message ||
        'Alguma coisa deu errado. Entre em contato com o dev'
    })
  },
})

export default userSlice.reducer
