import { CREATE_GAME } from '../actions/games/create'


export default function(state = [], action = {}) {
  switch(action.type) {

    case 'CREATE_GAME' :
      return state.concat(action.payload)

    default :
      return state
  }
}
