import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPhotosByAlbumId } from '../../actions/album'

const AlbumItem = ({ getPhotosByAlbumId, album: { id, title } }) => {
  // If the button is clicked, the photos with same album id are retrieved
  // And then the screen is scrolled back to the selected album
  const clickHandler = () => {
    getPhotosByAlbumId(id)
    window.scrollTo({
      top: 120,
      behavior: 'smooth'
    })
  }
  return (
    <div className='container album-item d-flex flex-column'>
      <p className='text-justify'>
        <strong>Album Title:</strong> {title}
      </p>
      <button className='btn btn-info mt-auto' onClick={clickHandler}>
        Open this Album
      </button>
    </div>
  )
}

AlbumItem.propTypes = {
  getPhotosByAlbumId: PropTypes.func.isRequired
}

export default connect(
  null,
  { getPhotosByAlbumId }
)(AlbumItem)
