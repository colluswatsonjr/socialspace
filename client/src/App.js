import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserContext } from './context/UserContext';

import '../src/stylesheets/App.css'

import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import SignInSignUp from './pages/SignInSignUp';
import Create from './pages/Create';
import EditUser from './components/EditUser';
import UserProfile from './components/UserProfile';
import SpaceProfile from './components/SpaceProfile';


function App() {

  const [user, setUser] = useState(null)
  const [users, setUsers] = useState([])
  const [spaces, setSpaces] = useState([])
  console.log(spaces)

  // auto login user
  useEffect(() => {
    const fetchData = async () => {
      const [response1, response2, response3] = await Promise.all([
        fetch("/me"),
        fetch("/users"),
        fetch("/spaces"),
      ]);
      const user = await response1.json();
      const users = await response2.json();
      const spaces = await response3.json();

      setUser(user);
      setUsers(users);
      setSpaces(spaces);
    };
    fetchData();
  }, []);

  const login = (user) => {
    setUser(user)
  };

  const logout = () => {
    setUser(null)
  };

  return (
    <div className="App">
      <UserContext.Provider value={{ user, login, logout }}>
        <Router>
          {user ?
            <>
              <Navbar className="Navbar" />
              <Routes>
                <Route exact path="/" element={
                  <ul>
                    {users.map((user) => <li key={user.username}><a href={`/user/${user.username}`}>{user.username}</a></li>)}
                    {spaces.map((space) => <li key={space.title}><a href={`/space/${space.title}`}>{space.title}</a></li>)}
                  </ul>

                } />
                <Route path='/create' element={<Create />} />
                <Route path={`/user/${user.username}`} element={<Profile />} />
                <Route path={`/user/${user.username}/edit`} element={<EditUser />} />
                {users.map((user) => (
                  <Route key={user.id} path={`/user/${user.username}`} element={<UserProfile userInfo={user} />} />
                ))}
                {spaces.map((space) => (
                  <Route key={space.id} path={`/space/${space.title}`} element={<SpaceProfile spaceInfo={space} />} />
                ))}
                <Route path='/*' element={<div><h4>Page not found...<a href='/'>go back home.</a></h4></div>} />
              </Routes>
            </>
            :
            <>
              <Routes>
                <Route path='/' element={<SignInSignUp />} />
                <Route path='/*' element={<div><h4>Page not found...<a href='/'>go back home.</a></h4></div>} />
              </Routes>
            </>
          }
        </Router>
      </UserContext.Provider>
    </div >
  );
}

export default App;
