/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Comics = {
  id: string
  name: string
  imgPath: string
}

type InitialState = {
  loading: boolean
  comics: Comics[]
  error: string
}

const initialState: InitialState = {
  loading: false,
  comics: [],
  error: '',
}

const comicSlice = createSlice({
  name: 'comic',
  initialState,
  reducers: {
    requestComic(state) {
      state.loading = true
    },
    createComic(state: InitialState, action: PayloadAction<Comics[]>) {
      state.loading = false
      state.comics = action.payload
      state.error = ''
    },
    requestComicError(state, action) {
      state.loading = false
      state.comics = []
      state.error = action.payload
    },
    clearComic() {
      return initialState
    },
  },
})

export const { createComic, clearComic, requestComic, requestComicError } =
  comicSlice.actions
export default comicSlice.reducer

const store = { loading: false, comics: [], error: '' }

function alteraLoading() {
  store.loading = true
}

// useDispatch - alterar a store
// useSelector - para ler o que está na store
