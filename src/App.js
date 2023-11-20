import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ReservationItem from './components/ReservationItem';
import FilterBtn from './components/FilterBtn';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <body>
      <Navbar isLoggedIn={isLoggedIn} onLoginClick={toggleLogin} />
      {showLogin && <Login onLogin={handleLogin} />}
      <FilterBtn/>
      <ReservationItem/>
    </body>
  );
}

export default App;
