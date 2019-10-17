import { GET_USERS, SELECT_USER, ERROR } from '../actions/types'

const initialState = {
  users: [],
  user: null,
  isLoadingUsers: true,
  error: {}
}

export default function(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
        isLoadingUsers: false
      }
    case SELECT_USER:
      return {
        ...state,
        user: payload,
        isLoadingUsers: false
      }
    case ERROR:
      return {
        ...state,
        error: payload,
        isLoadingUsers: false
      }
    default:
      return state
  }
}
