import React, { useState } from 'react';
import UserTable from './tables/UserTable.js'
import { Row } from 'reactstrap'

function App() {

  const usersData = [
    { id: 1, name: 'Ben', username: 'testname'},
    { id: 2, name: 'Zander', username: 'testname1'},
    { id: 3, name: 'Fin', username: 'testname2'}
  ]

  const [users, usersData] = useState(usersData)

  return (
    <div className="App">
      <h1 className='text-center mb-5'>CRUD app + hooks</h1>
      <hr/>
      <div className='d-flex-row justify-content-center text-center mb-5'>
        <div className='d-flex justify-content-center p-2'>
          <h3 className='pr-3'>Add user</h3>
          <h3 className='pl-3'>View users</h3>
        </div>
        <hr/>
      </div>
      <Row className='justify-content-center mt-2'>
        <UserTable/>
      </Row>
    </div>
  );
}

export default App;
