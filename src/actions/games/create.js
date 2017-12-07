import ApiCLient from '../../api/client'

export const CREATE_GAME = 'CREATE_GAME'

const api = new ApiCLient()

function createGame(optional, arguments) {
  return {
    type: 'CREATE_GAME',
    payload: {
      api.post('/games')
        .then(res => console.log(res))
        .catch(err => console.error(err))
      }
  }
}
