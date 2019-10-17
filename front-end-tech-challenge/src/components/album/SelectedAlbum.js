import React from 'react'
import ImageGallery from 'react-image-gallery'
import Spinner from '../utils/Spinner'

const SelectedAlbum = ({ photos, isLoading }) => {
  // galleryPhotos receives a format that is acceptable by the ImageGallery component
  const galleryPhotos = photos.map(photo => {
    return {
      original: photo.url,
      thumbnail: photo.thumbnailUrl
    }
  })

  return (
    <section className='album'>
      {!isLoading ? (
        <ImageGallery
          items={galleryPhotos}
          thumbnailPosition='right'
          showFullscreenButton={false}
          showPlayButton={false}
        />
      ) : (
        <Spinner />
      )}
    </section>
  )
}

export default SelectedAlbum
