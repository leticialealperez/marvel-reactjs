/* eslint-disable no-param-reassign */
/* eslint-disable prettier/prettier */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Personagem {
  id: string
  nome: string
  descricao: string
  imgUrl: string
}

interface IState {
  loading: boolean
  personagens: Personagem[]
  erroAPI: string
  dataUpdate: number
}

const initialState: IState = {
  loading: false,
  erroAPI: '',
  personagens: [],
  dataUpdate: new Date().getTime(),
}

// action = type, payload

const personagemSlice = createSlice({
  name: 'personagensAPI',
  initialState,
  reducers: {
    dispararRequisicao(state: IState) {
      state.loading = true
    },
    registrarErroAPI(state: IState, action) {
      state.loading = false
      state.erroAPI = action.payload
      state.dataUpdate = new Date().getTime()
    },
    inserirPersonagensAPI(state: IState, action: PayloadAction<Personagem[]>) {
      state.loading = false
      state.erroAPI = ''
      state.dataUpdate = new Date().getTime()
      state.personagens = action.payload
    },
  },
})

export const { actions, reducer } = personagemSlice
export const { dispararRequisicao, inserirPersonagensAPI, registrarErroAPI } =
  actions
