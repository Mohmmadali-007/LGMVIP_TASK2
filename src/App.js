
import React, { useState } from 'react';

import './styles.css';

const App=()=>{

  const [users, setUsers] = useState([]);

  const userInfo = async()=>{
    // console.log('before');
    const response = await fetch("https://reqres.in/api/users?page=1");

    const jsonresponse = await response.json();

    setUsers(jsonresponse.data);

  };

  return (

    <div className="App">

      <div className="navbar">

        <label>LetsGrowMore</label>

        <button onClick={userInfo}>Get Data</button>

      </div>

      <div className="data">

        {users.map(({ id, first_name, last_name, email, avatar})=>(

          <div className="content">
          {/* eslint-disable-next-line */}
            <div className="photo"><img src={avatar}></img></div>

            <div className="user-info">

              <label id="name">{first_name} {last_name}</label>

              <label>{email}</label>

              <br></br>

            </div>

          </div>

        ))}

        </div>

    </div>

  )};

export default App;