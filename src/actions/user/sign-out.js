import ApiClient from '../../api/client'
import { push } from 'react-router-redux'
import websocket from '../websocket'
export const USER_SIGNED_OUT = 'USER_SIGNED_OUT'

const api = new ApiClient()

export default (user) => {
  return dispatch => {
    api.signOut()
    dispatch(push('sign-in'))
    dispatch(websocket.disconnect())
    dispatch({
      type: USER_SIGNED_OUT
    })
  }
}
