import { CHARACTERS_ACTIONS } from './constants'

interface IAction {
  type: string
  payload: any
}

export interface ICharacters {
  result: any
  status: any
}

const initialState: ICharacters = {
  result: '',
  status: '',
}

const charactersReducer = (
  state: ICharacters = initialState,
  { type, payload }: IAction
) => {
  switch (type) {
    case CHARACTERS_ACTIONS.GETALL:
      return payload

    default:
      return state
  }
}

export default charactersReducer
