import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import UsersDropdown from './UsersDropdown'
import SelectedAlbum from './album/SelectedAlbum'
import Spinner from './utils/Spinner'
import { getUsers, selectUser } from '../actions/user'
import { getAlbumsByUserId } from '../actions/album'
import Albums from './album/Albums'

const Landing = ({
  getUsers,
  selectUser,
  user: { users, user, isLoadingUsers },
  getAlbumsByUserId,
  album: { albums, isLoadingAlbums, photos }
}) => {
  // useEffect Hook to call the getUsers once the applicatio is opened
  useEffect(() => {
    getUsers()
  }, [getUsers])

  // Select element on change handler
  const onChange = e => {
    if (e.target.value) {
      const newSelectedUser = users.find(
        user => parseInt(e.target.value) === user.id
      )

      // Update the new user
      selectUser(newSelectedUser)
      // Get all the albums from the new selected user
      getAlbumsByUserId(newSelectedUser.id)
    }
  }

  // Landing component is responsible for managing the API calls,
  // and to display the Users Dropdown, albums and the selected album.
  // If component is not ready to be displayed, the ternary condition validates and display a Spinner
  return (
    <section className='container'>
      <h2 className='text-center my-5 text-info'>
        Welcome, select a user to see his/her albums!
      </h2>
      <div className='row'>
        <div className='col col-lg order-xs-1 order-lg-2 mb-5'>
          {photos.length > 0 && (
            <SelectedAlbum photos={photos} isLoading={isLoadingAlbums} />
          )}
        </div>
        <div className='col-lg-4'>
          <UsersDropdown
            users={users}
            onChange={onChange}
            isLoading={isLoadingUsers}
          />
          {user &&
            (albums.length > 0 && !isLoadingAlbums ? (
              <Albums user={user} albums={albums} isLoading={isLoadingAlbums} />
            ) : (
              <Spinner />
            ))}
        </div>
      </div>
    </section>
  )
}

Landing.propTypes = {
  getUsers: PropTypes.func.isRequired,
  selectUser: PropTypes.func.isRequired,
  getAlbumsByUserId: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  user: state.user,
  album: state.album
})

export default connect(
  mapStateToProps,
  { getUsers, selectUser, getAlbumsByUserId }
)(Landing)
