import { CHARACTERS_ACTIONS } from './constants'

export function getAll(payload: any) {
  return {
    type: CHARACTERS_ACTIONS.GETALL,
    payload,
  }
}
