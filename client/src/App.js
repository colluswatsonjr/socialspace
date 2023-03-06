import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserContext } from './context/UserContext';

import '../src/stylesheets/App.css'

import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import SignInSignUp from './pages/SignInSignUp';
import Explore from './pages/Explore';
import Create from './pages/Create';


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
                <Route path='/' element={<div><h4>Home page: {user.username}</h4></div>} />
                <Route path='/explore' element={<Explore />} />
                <Route path='/create' element={<Create />} />
                <Route path='/profile' element={<Profile />}>
                  
                </Route>
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
