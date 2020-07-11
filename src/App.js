import React, { useState } from 'react';
import UserTable from './tables/UserTable'
import AddUserForm from './Forms/AddUserForm.js'
import { Row } from 'reactstrap'

function App() {

  const usersData = [
    { id: 1, name: 'Ben', username: 'testname'},
    { id: 2, name: 'Zander', username: 'testname1'},
    { id: 3, name: 'Fin', username: 'testname2'}
  ]

  const [users, setUsers] = useState(usersData)

  const addUser = user => {
    user.id = user.length + 1
    setUsers([...users, user])
  }

  return (
    <div className="App">
      <div className='d-flex-row justify-content-center text-center mb-5'>
        <div className='d-flex justify-content-center p-2'>
          <h3 className='pr-3'>Add user</h3>
          <h3 className='pl-3'>View users</h3>
        </div>
      </div>
      <Row className='justify-content-center mt-2'>
        <UserTable users={users} />
      </Row>

      <Row className='justify-content-center mt-2'>
        <AddUserForm addUser={addUser} />
      </Row>
    </div>
  );
}

export default App;
