import ApiClient from '../../api/client'

export const FETCHED_GAMES = 'FETCHED_GAMES'

const api = new ApiClient()

export default (fetchGames) => {
  return dispatch => {


    api.get('games')
      .then(res => dispatch({ type: FETCHED_GAMES, payload: res.body }))
  }
}
