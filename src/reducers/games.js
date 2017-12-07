import { CREATE_GAME } from '../actions/games/create'

const initialState = []

export default function(state = initialState, action = {}) {
  switch(action.type) {

    case 'CREATE_GAME' :
      return [...state, {...action.payload}]

    default :
      return state
  }
}
