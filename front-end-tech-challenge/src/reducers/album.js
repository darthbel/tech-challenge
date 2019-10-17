import {
  GET_ALBUMS,
  ERROR,
  GET_PHOTOS,
  CLEAR_ALBUMS_AND_PHOTOS
} from '../actions/types'

const initialState = {
  albums: [],
  photos: [],
  isLoadingAlbums: true,
  error: {}
}

export default function(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case GET_ALBUMS:
      return {
        ...state,
        albums: payload,
        isLoadingAlbums: false
      }
    case GET_PHOTOS:
      return {
        ...state,
        photos: payload,
        isLoadingAlbums: false
      }
    case CLEAR_ALBUMS_AND_PHOTOS:
      return {
        ...state,
        albums: [],
        photos: [],
        isLoadingAlbums: false
      }
    case ERROR:
      return {
        ...state,
        error: payload,
        isLoadingAlbums: false
      }
    default:
      return state
  }
}
