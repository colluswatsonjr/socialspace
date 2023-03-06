import React, { useContext } from 'react';
import { useNavigate } from 'react-router';

import { UserContext } from '../context/UserContext';

function Navbar() {

  const { user, logout } = useContext(UserContext);
  let navigate = useNavigate();

  function handleLogout(){
    fetch("/logout",{
      method: "DELETE"
    })
    .then((r) => {
      if (r.ok) {
        logout()
        navigate('/')          
        console.log('logged out')
      }else{
        r.json().then((error)=>console.log('logout error:', error))
      }
  });

  }

  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/explore">Explore</a>
        </li>
        <li>
          <a href="/create">Create</a>
        </li>
        <li>
          <a href="/profile">Profile // {user.username}</a>
        </li>
        <li>
          <button onClick={handleLogout}>Logout!</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;