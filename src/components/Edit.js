import React, { useState } from 'react';
import './Bid.css'; // For styling the modal

function EditModal({ show, onClose, onSubmit, date, guests, name, time, cityState, image, deleteFunction, id }) {

    const [enteredName, setEnteredName] = useState(name);
    const [enteredImg, setEnteredImg] = useState(image);
    const [enteredTime, setEnteredTime] = useState(time);
    const [enteredCitystate, setEnteredCitystate] = useState(cityState);
    const [enteredDate, setEnteredDate] = useState(date);
    const [enteredGuests, setEnteredGuests] = useState(guests);

    const deleteItemHandler = (event) => {
        event.preventDefault();
        deleteFunction(id)
    }
    const addItemHandler = (event) => {
        event.preventDefault();
    
        const item = {
          id: id,
          name: enteredName,
          image: enteredImg,
          time: enteredTime,
          citystate: enteredCitystate,
          date: enteredDate,
          guests: enteredGuests,
          highestBid: 0,
          canEdit: true,
        };

        onSubmit(item)

        setEnteredName('');
        setEnteredImg('');
        setEnteredTime('');
        setEnteredCitystate('');
        setEnteredDate('');
        setEnteredGuests('');

        onClose();
      };

  if (!show) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">Place a Bid</h4>
        </div>
        <div className="modal-body">
        <form onSubmit={addItemHandler}>
          <div class="label-input">
            <label><h2>Restaurant Name</h2></label>
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
          <button type="submit" class="newBtn" id="submitBtn">Edit Reservation</button>
          <button class="newBtn" id="deleteBtn" onClick={deleteItemHandler}>Delete Reservation</button>
        </form>
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;