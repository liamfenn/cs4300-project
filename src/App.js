import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import FilterBtn from './components/FilterBtn';
import DisplayGrid from './components/DisplayGrid';
import Login from './components/Login';
import AddItem from './components/AddItem';

const restaurantList = [
{
    id: 0,
    name: "Sample Restaurant1",
    image: "Image",
    time: "1:00 PM",
    citystate: "Atlanta/GA",
    date: "11/20",
    guests: "3",
    highestBid: 0,
    canEdit: false,
},
{
  id: 1,
  name: "Sample Restaurant2",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Restaurant_N%C3%A4sinneula.jpg/640px-Restaurant_N%C3%A4sinneula.jpg",
  time: "3:00 PM",
  citystate: "Orlando/FL",
  date: "10/14",
  guests: "2",
  highestBid: 0,
  canEdit: false,
},
{
  id: 2,
  name: "Sample Restaurant3",
  image: "Image",
  time: "11:00 AM",
  citystate: "Athens/GA",
  date: "11/28",
  guests: "6",
  highestBid: 0,
  canEdit: false,
},
{
  id: 3,
  name: "Sample Restaurant4",
  image: "Image",
  time: "6:00 PM",
  citystate: "Charlotte/NC",
  date: "11/20",
  guests: "3",
  highestBid: 0,
  canEdit: false,
},
]

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [reservations, setReservations] = useState(restaurantList);

  const handleLogin = (user) => {
    console.log(user); // log user data
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const addReservation = (newReservation) => {
    setReservations(prevReservations => [...prevReservations, newReservation]);
  };

  const deleteItem = (id) => {
    setReservations(reservations.filter(item => item.id !== id));
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} onLogoutClick={handleLogout} />
      <Routes>
        <Route path="/add-item" element={<AddItem onAddReservation={addReservation} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/" element={
          <>
            <FilterBtn/>
            <DisplayGrid items={reservations} deleteFunction={deleteItem}/>
          </>
        }/>
      </Routes>
    </Router>
  );
}

export default App;
