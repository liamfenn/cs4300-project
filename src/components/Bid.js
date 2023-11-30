import React, { useState } from 'react';
import './Bid.css'; // For styling the modal

function Modal({ show, onClose, onSubmit }) {

  const [enteredBid, setEnteredBid] = useState(0);
  const addItemHandler = (event) => {
    event.preventDefault();

    const item = enteredBid
    onSubmit(item)
    setEnteredBid(0)
    onClose()
  };

  if (!show) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h1 className="modal-title">Place a Bid</h1>
        </div>
        <div className="modal-body">
        <form onSubmit={addItemHandler}>
          <div class="label-input2">
            <label><h2>Bid Amount</h2></label>
            <input
              id="bid"
              type="number"
              value={enteredBid}
              onChange={event => setEnteredBid(event.target.value)}
            />
          </div>
          <button id="submit-bid-Btn" type="submit">Submit Bid</button>
        </form>
        </div>
        <div className="modal-footer">
          <button id="close" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;