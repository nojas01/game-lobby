import ApiCLient from '../../api/client'

export const CREATE_GAME = 'CREATE_GAME'

const api = new ApiCLient()

export default (createGame) => {
  return dispatch => {
      api.post('/games', {...createGame})
        .then(res => console.log(res))
        .catch(err => console.error(err))
  }
}
