import React from 'react'
import PropTypes from 'prop-types'
import AlbumItem from './AlbumItem'
import Spinner from '../utils/Spinner'

// The albums are displayed by mapping the albums array, and creating Album Items
const Albums = ({ user, albums, isLoading }) => (
  <section className='container mt-3'>
    <h4 className='text-muted text-center'>{user.name}'s Photo Albums:</h4>
    {!isLoading ? (
      <div className='row'>
        {albums.map(album => (
          <AlbumItem album={album} key={album.id} />
        ))}
      </div>
    ) : (
      <Spinner />
    )}
  </section>
)

Albums.propTypes = {
  albums: PropTypes.array.isRequired
}

export default Albums
