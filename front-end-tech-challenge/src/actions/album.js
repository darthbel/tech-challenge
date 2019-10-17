import axios from 'axios'

import { GET_ALBUMS, GET_PHOTOS, ERROR } from './types'

// Get selected user's albums
export const getAlbumsByUserId = userId => async dispatch => {
  try {
    const res = await axios.get('/albums')

    dispatch({
      type: GET_ALBUMS,
      payload: res.data.filter(album => album.userId === userId)
    })
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

// Get selected user's album photos
export const getPhotosByAlbumId = albumId => async dispatch => {
  try {
    const res = await axios.get('/photos')

    dispatch({
      type: GET_PHOTOS,
      payload: res.data.filter(photo => photo.albumId === albumId)
    })
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}
