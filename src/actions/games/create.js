import ApiCLient from '../../api/client'
import { showError, loading  } from '../loading'
export const CREATE_GAME = 'CREATE_GAME'

const api = new ApiCLient()
export default () => {

  return dispatch => {
      api.post('games')
        .then(dispatch(loading(true)))
        .then(res => {
          dispatch({ type: CREATE_GAME, payload: res.body}),
          dispatch(loading(false))
        })
        .catch(err => {
          console.error(err)
          dispatch(showError(err))
        })
  }
}
