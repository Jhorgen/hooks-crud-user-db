import React from 'react'

const UserTable = props => (
  <table className='text-center'>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map( user => (
            <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <button className='btn btn-secondary'>Edit</button>
              <button className='btn btn-danger'>Delete</button>
            </td>
          </tr>
        ))
      ) : (
          <tr>
            <td>No users</td>
          </tr>
      )}
    </tbody>
  </table>
)

export default UserTable
