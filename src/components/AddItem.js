import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddItem.css';

const AddItem = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredImg, setEnteredImg] = useState('');
    const [enteredTime, setEnteredTime] = useState('');
    const [enteredCitystate, setEnteredCitystate] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredGuests, setEnteredGuests] = useState('');

    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();

      const item = {
        name: enteredName,
        image: enteredImg,
        time: enteredTime,
        citystate: enteredCitystate,
        date: enteredDate,
        guests: enteredGuests,
        highestBid: "0"
      }

      try {
        const response = await fetch('http://localhost:3001/api/items/add-item', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(item)
          // body: JSON.stringify({
          //   name: enteredName,
          //   image: enteredImg,
          //   time: enteredTime,
          //   citystate: enteredCitystate,
          //   date: enteredDate,
          //   guests: enteredGuests,
          //   highestBid: 0,
          // }),
        });

        const data = await response.json();

        if (!response.ok) {
          console.error('HTTP status:', response.status);
          throw new Error(data.msg);
        }

        props.onAddReservation(data);

        setEnteredName('');
        setEnteredImg('');
        setEnteredTime('');
        setEnteredCitystate('');
        setEnteredDate('');
        setEnteredGuests('');
        navigate('/');
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
  
    return (
      <div className="input" class="card">
        <h1 id="lg">Post a New Listing</h1>
        <form onSubmit={handleSubmit}>
          <div class="label-input">
            <label id="rname"><h2>Restaurant Name</h2></label>
            <input
              id="name"
              type="text"
              value={enteredName}
              onChange={event => setEnteredName(event.target.value)}
            />
          </div>
          <div class="label-input">
            <label><h3>Image Link</h3></label>
            <input
              id="image"
              type="text"
              value={enteredImg}
              onChange={event => setEnteredImg(event.target.value)}
            />
          </div>
          <div class="label-input">
            <label><h3>Time</h3></label>
            <input
              id="time"
              type="time"
              value={enteredTime}
              onChange={event => setEnteredTime(event.target.value)}
            />
          </div>
          <div class="label-input">
            <label><h3>City/State</h3></label>
            <input
              id="citystate"
              type="text"
              value={enteredCitystate}
              onChange={event => setEnteredCitystate(event.target.value)}
            />
          </div>
          <div class="label-input">
            <label><h3>Date</h3></label>
            <input
              id="date"
              type="date"
              value={enteredDate}
              onChange={event => setEnteredDate(event.target.value)}
            />
          </div>
          <div class="label-input">
            <label><h3>Guests</h3></label>
            <input
              id="guests"
              type="number"
              value={enteredGuests}
              onChange={event => setEnteredGuests(event.target.value)}
            />
          </div>
          <button type="submit" class="newBtn" id="submitBtn">Post Reservation</button>
        </form>
      </div>
    );
  };
  
  export default AddItem;
