import React from 'react'

const UserTable = () => (
  <table className='text-center'>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className='pr-2'>Name data</td>
        <td className='pr-2'>Username data</td>
        <td className='pl-2'>
          <button className='btn btn-secondary mr-1'>Edit</button>
          <button className='btn btn-danger'>Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
)

export default UserTable
