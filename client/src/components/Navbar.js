import React, { useContext } from 'react';
import { useNavigate } from 'react-router';

import { UserContext } from '../context/UserContext';

function Navbar() {

  const { user, logout } = useContext(UserContext);
  let navigate = useNavigate();

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE"
    })
      .then((r) => {
        if (r.ok) {
          logout()
          navigate('/')
          console.log('logged out')
        } else {
          r.json().then((error) => console.log('logout error:', error))
        }
      });

  }

  return (
    <nav>
      <a href="/">Home</a>
      <a href="/create">Create</a>
      <a href={`/user/${user.username}`}>Profile // {user.username}</a>
      <button className="navbar-right" type='submit' onClick={handleLogout}>Logout!</button>
    </nav>
  );
}

export default Navbar;