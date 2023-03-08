import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserContext } from './context/UserContext';

import '../src/stylesheets/App.css'

import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import SignInSignUp from './pages/SignInSignUp';
import Explore from './pages/Explore';
import Create from './pages/Create';
import UserDetail from './components/UserDetail';
import Home from './pages/Home';
import SpaceDetail from './components/SpaceDetail';
import EditUser from './components/EditUser';


function App() {

  const [user, setUser] = useState(null)

  // auto login user
  useEffect(() => {
    fetch('/me')
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user))
        } else {
          r.json().then((error) => console.log('not logged in', error))
        }
      })
  }, [])

  const login = (user) => {
    // authenticate user and set user state
    setUser(user)
  };

  const logout = () => {
    // clear user state
    setUser(null)
  };

  // const addSpace = (space) => {
  //   // add page
  //   setSpaces([space, ...spaces])
  // };

  return (
    <div className="App">
      <UserContext.Provider value={{ user, login, logout }}>
        <Router>
          {user ?
            <>
              <Navbar />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path='/explore' element={<Explore />} />
                <Route path='/create' element={<Create />} />
                <Route path={`/user/${user.username}`} element={<Profile />} />
                <Route path={`/user/${user.username}/edit`} element={<EditUser />} />
                <Route path="/user/:username" element={<UserDetail />} />
                <Route path="/space/:title" element={<SpaceDetail />} />
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
