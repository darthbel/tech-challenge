import axios from 'axios'

import { GET_USERS, SELECT_USER, CLEAR_ALBUMS_AND_PHOTOS, ERROR } from './types'

// Get users to populate dropdown
export const getUsers = () => async dispatch => {
  try {
    const res = await axios.get('/users')

    dispatch({
      type: GET_USERS,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

// Select user, and store user data
export const selectUser = user => async dispatch => {
  try {
    dispatch({ type: CLEAR_ALBUMS_AND_PHOTOS })

    dispatch({
      type: SELECT_USER,
      payload: user
    })
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: { msg: err.response }
    })
  }
}
