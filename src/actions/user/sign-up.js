import ApiClient from '../../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'
import signIn from './sign-in'

const api = new ApiClient()

export const USER_SIGNED_UP = 'USER_SIGNED_UP'

export default (user) => {
  return (dispatch) => {
    dispatch({ type: APP_LOADING })

    api.post('users', {...user} )
      .then((result) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })
        dispatch(signIn(user)) // Sign in when sign up succeeded
      })
      .catch((error) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({
          type: LOAD_ERROR,
          payload: error.message
        })
      })
  }
}
