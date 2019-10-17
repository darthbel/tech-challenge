import React from 'react'
import Spinner from './utils/Spinner'

const UsersDropdown = ({ users, onChange, isLoading }) => (
  // User Dropdown is populated by maping the users array, and on select,
  // its id is sent back to the Landing component and then handled.
  <div>
    {!isLoading && users.length > 0 ? (
      <select
        className='custom-select custom-select-lg'
        name='selectedUser'
        onChange={e => onChange(e)}
      >
        <option value='' key={null}>
          Select a user...
        </option>
        {users.map(user => (
          <option value={user.id} key={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    ) : (
      <Spinner />
    )}
  </div>
)

export default UsersDropdown
