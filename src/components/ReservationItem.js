import React, { useState } from 'react';
import './ReservationItem.css';
import Modal from "./Bid"
import EditModal from "./Edit"

const ReservationItem = ( {restaurantInfo, deleteFunction }) => {

    const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [highestBid, setHighestBid] = useState(restaurantInfo.highestBid)
  const [restaurantName, setRestaurantName] = useState(restaurantInfo.name)
  const [restaurantCityState, setRestaurantCityState] = useState(restaurantInfo.citystate)
  const [restaurantTime, setRestaurantTime] = useState(restaurantInfo.time)
  const [restaurantDate, setRestaurantDate] = useState(restaurantInfo.date)
  const [restaurantImage, setRestaurantImage] = useState(restaurantInfo.image)
  const [restaurantGuests, setRestaurantGuests] = useState(restaurantInfo.guests)
  const restaurantID = restaurantInfo.id


  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    restaurantInfo.highestBid = highestBid
  };

  const updateBid = (newBid) => {
    if(newBid > highestBid) {
        setHighestBid(newBid)
    }
  }

  const handleOpenModalEdit = () => {
    setShowModalEdit(true);
  };

  const handleCloseModalEdit = () => {
    setShowModalEdit(false);
  };

  const editRestaurantCard = (item) => {
    setRestaurantName(item.name)
    setRestaurantImage(item.image)
    setRestaurantDate(item.date)
    setRestaurantCityState(item.citystate)
    setRestaurantTime(item.time)
    setRestaurantGuests(item.guests)
  }

  var button1 = null
  if(restaurantInfo.canEdit == false){
    button1 = <button className="bid-btn" onClick={handleOpenModal}><h4>Place Bid</h4></button>
  }
  else{
    button1 = <button className="bid-btn" onClick={handleOpenModalEdit}><h4>Edit</h4></button>
  }

  return (
    <div className="card">
        <img src={restaurantImage} alt="Restaurant" height={"65%"} />
        <div className="card-body">
            <div className="body-heading">
                <div className="left-heading">
                    <h1>{restaurantName}</h1>
                    <div className="location">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path fillRule="evenodd" clip-rule="evenodd" d="M10.848 6.84806C10.848 7.55531 10.567 8.23358 10.0669 8.73368C9.56684 9.23378 8.88856 9.51473 8.18131 9.51473C7.47407 9.51473 6.79579 9.23378 6.2957 8.73368C5.7956 8.23358 5.51465 7.55531 5.51465 6.84806C5.51465 6.14082 5.7956 5.46254 6.2957 4.96245C6.79579 4.46235 7.47407 4.1814 8.18131 4.1814C8.88856 4.1814 9.56684 4.46235 10.0669 4.96245C10.567 5.46254 10.848 6.14082 10.848 6.84806ZM9.51465 6.84806C9.51465 7.20169 9.37417 7.54082 9.12412 7.79087C8.87408 8.04092 8.53494 8.1814 8.18131 8.1814C7.82769 8.1814 7.48855 8.04092 7.23851 7.79087C6.98846 7.54082 6.84798 7.20169 6.84798 6.84806C6.84798 6.49444 6.98846 6.1553 7.23851 5.90525C7.48855 5.65521 7.82769 5.51473 8.18131 5.51473C8.53494 5.51473 8.87408 5.65521 9.12412 5.90525C9.37417 6.1553 9.51465 6.49444 9.51465 6.84806Z" fill="white"/>
                            <path fillRule="evenodd" clip-rule="evenodd" d="M3.86267 11.012C3.00323 10.1937 2.40574 9.13897 2.14576 7.9811C1.88578 6.82324 1.97499 5.61429 2.4021 4.50712C2.82921 3.39996 3.57504 2.44431 4.54528 1.76103C5.51552 1.07775 6.66659 0.697519 7.85292 0.66843C9.03926 0.63934 10.2076 0.962694 11.2101 1.5976C12.2127 2.23251 13.0045 3.15045 13.4853 4.23535C13.9662 5.32025 14.1146 6.52338 13.9116 7.6926C13.7087 8.86181 13.1636 9.9446 12.3453 10.804L8.208 15.1494L3.86267 11.012ZM11.38 9.88469L8.162 13.2647L4.782 10.0467C4.11358 9.41024 3.64889 8.58988 3.4467 7.68934C3.24451 6.7888 3.31389 5.84853 3.64608 4.98742C3.97827 4.12631 4.55833 3.38304 5.31294 2.8516C6.06754 2.32016 6.96278 2.02441 7.88547 2.00176C8.80815 1.9791 9.71683 2.23056 10.4966 2.72433C11.2764 3.21809 11.8922 3.932 12.2663 4.77577C12.6403 5.61954 12.7558 6.55527 12.598 7.46465C12.4403 8.37403 12.0164 9.21621 11.38 9.88469Z" fill="white"/>
                        </svg>
                        <h4 className="light">{restaurantCityState}</h4>
                        <h4 className="light"> ${highestBid}</h4>
                    </div>
                </div>
                <div className="right-heading">
                    <h4 className="light">{restaurantDate}</h4>
                    <h4 className="light">{restaurantTime}</h4>
                </div>
            </div>

            <div className="body-footer">
                <div className="guests">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fillRule="evenodd" clip-rule="evenodd" d="M5 9C5.53043 9 6.03914 8.78929 6.41421 8.41421C6.78929 8.03914 7 7.53043 7 7C7 6.46957 6.78929 5.96086 6.41421 5.58579C6.03914 5.21071 5.53043 5 5 5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7C3 7.53043 3.21071 8.03914 3.58579 8.41421C3.96086 8.78929 4.46957 9 5 9ZM5 10C5.39397 10 5.78407 9.9224 6.14805 9.77164C6.51203 9.62087 6.84274 9.3999 7.12132 9.12132C7.3999 8.84274 7.62087 8.51203 7.77164 8.14805C7.9224 7.78407 8 7.39397 8 7C8 6.60603 7.9224 6.21593 7.77164 5.85195C7.62087 5.48797 7.3999 5.15726 7.12132 4.87868C6.84274 4.6001 6.51203 4.37913 6.14805 4.22836C5.78407 4.0776 5.39397 4 5 4C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7C2 7.79565 2.31607 8.55871 2.87868 9.12132C3.44129 9.68393 4.20435 10 5 10Z" fill="white"/>
                        <path fillRule="evenodd" clip-rule="evenodd" d="M3.854 8.89599C3.90056 8.94244 3.93751 8.99761 3.96271 9.05836C3.98792 9.1191 4.00089 9.18422 4.00089 9.24999C4.00089 9.31576 3.98792 9.38088 3.96271 9.44162C3.93751 9.50237 3.90056 9.55754 3.854 9.60399L3.516 9.94099C2.86554 10.5916 2.50009 11.474 2.5 12.394V14.25C2.5 14.3826 2.44732 14.5098 2.35355 14.6035C2.25979 14.6973 2.13261 14.75 2 14.75C1.86739 14.75 1.74021 14.6973 1.64645 14.6035C1.55268 14.5098 1.5 14.3826 1.5 14.25V12.394C1.50014 11.2088 1.97099 10.0721 2.809 9.23399L3.146 8.89599C3.19245 8.84943 3.24762 8.81248 3.30837 8.78728C3.36911 8.76207 3.43423 8.7491 3.5 8.7491C3.56577 8.7491 3.63089 8.76207 3.69163 8.78728C3.75238 8.81248 3.80755 8.84943 3.854 8.89599ZM15.646 8.59599C15.5994 8.64244 15.5625 8.69761 15.5373 8.75836C15.5121 8.8191 15.4991 8.88422 15.4991 8.94999C15.4991 9.01576 15.5121 9.08088 15.5373 9.14162C15.5625 9.20237 15.5994 9.25754 15.646 9.30399L15.984 9.64099C16.3061 9.96313 16.5616 10.3456 16.736 10.7664C16.9103 11.1873 17 11.6384 17 12.094V14.25C17 14.3826 17.0527 14.5098 17.1464 14.6035C17.2402 14.6973 17.3674 14.75 17.5 14.75C17.6326 14.75 17.7598 14.6973 17.8536 14.6035C17.9473 14.5098 18 14.3826 18 14.25V12.094C17.9999 10.9088 17.529 9.77213 16.691 8.93399L16.354 8.59599C16.3076 8.54943 16.2524 8.51248 16.1916 8.48728C16.1309 8.46207 16.0658 8.4491 16 8.4491C15.9342 8.4491 15.8691 8.46207 15.8084 8.48728C15.7476 8.51248 15.6924 8.54943 15.646 8.59599Z" fill="white"/>
                        <path fillRule="evenodd" clip-rule="evenodd" d="M14 9C13.4696 9 12.9609 8.78929 12.5858 8.41421C12.2107 8.03914 12 7.53043 12 7C12 6.46957 12.2107 5.96086 12.5858 5.58579C12.9609 5.21071 13.4696 5 14 5C14.5304 5 15.0391 5.21071 15.4142 5.58579C15.7893 5.96086 16 6.46957 16 7C16 7.53043 15.7893 8.03914 15.4142 8.41421C15.0391 8.78929 14.5304 9 14 9ZM14 10C13.606 10 13.2159 9.9224 12.8519 9.77164C12.488 9.62087 12.1573 9.3999 11.8787 9.12132C11.6001 8.84274 11.3791 8.51203 11.2284 8.14805C11.0776 7.78407 11 7.39397 11 7C11 6.60603 11.0776 6.21593 11.2284 5.85195C11.3791 5.48797 11.6001 5.15726 11.8787 4.87868C12.1573 4.6001 12.488 4.37913 12.8519 4.22836C13.2159 4.0776 13.606 4 14 4C14.7956 4 15.5587 4.31607 16.1213 4.87868C16.6839 5.44129 17 6.20435 17 7C17 7.79565 16.6839 8.55871 16.1213 9.12132C15.5587 9.68393 14.7956 10 14 10ZM9.5 13.25C8.83696 13.25 8.20107 13.5134 7.73223 13.9822C7.26339 14.4511 7 15.087 7 15.75V17.05C7 17.1826 6.94732 17.3098 6.85355 17.4036C6.75979 17.4973 6.63261 17.55 6.5 17.55C6.36739 17.55 6.24021 17.4973 6.14645 17.4036C6.05268 17.3098 6 17.1826 6 17.05V15.75C6 14.8217 6.36875 13.9315 7.02513 13.2751C7.6815 12.6187 8.57174 12.25 9.5 12.25C10.4283 12.25 11.3185 12.6187 11.9749 13.2751C12.6313 13.9315 13 14.8217 13 15.75V17.05C13 17.1826 12.9473 17.3098 12.8536 17.4036C12.7598 17.4973 12.6326 17.55 12.5 17.55C12.3674 17.55 12.2402 17.4973 12.1464 17.4036C12.0527 17.3098 12 17.1826 12 17.05V15.75C12 15.4217 11.9353 15.0966 11.8097 14.7933C11.6841 14.49 11.4999 14.2144 11.2678 13.9822C11.0356 13.7501 10.76 13.5659 10.4567 13.4403C10.1534 13.3147 9.8283 13.25 9.5 13.25Z" fill="white"/>
                        <path fillRule="evenodd" clip-rule="evenodd" d="M9.5 11.75C10.0304 11.75 10.5391 11.5393 10.9142 11.1642C11.2893 10.7891 11.5 10.2804 11.5 9.75C11.5 9.21957 11.2893 8.71086 10.9142 8.33579C10.5391 7.96071 10.0304 7.75 9.5 7.75C8.96957 7.75 8.46086 7.96071 8.08579 8.33579C7.71071 8.71086 7.5 9.21957 7.5 9.75C7.5 10.2804 7.71071 10.7891 8.08579 11.1642C8.46086 11.5393 8.96957 11.75 9.5 11.75ZM9.5 12.75C10.2956 12.75 11.0587 12.4339 11.6213 11.8713C12.1839 11.3087 12.5 10.5456 12.5 9.75C12.5 8.95435 12.1839 8.19129 11.6213 7.62868C11.0587 7.06607 10.2956 6.75 9.5 6.75C8.70435 6.75 7.94129 7.06607 7.37868 7.62868C6.81607 8.19129 6.5 8.95435 6.5 9.75C6.5 10.5456 6.81607 11.3087 7.37868 11.8713C7.94129 12.4339 8.70435 12.75 9.5 12.75Z" fill="white"/>
                    </svg>
                    <h4 className="light">{restaurantGuests} Guests</h4>
                </div>
                {button1}
            </div>
        </div>
        <Modal show={showModal} onSubmit={updateBid} onClose={handleCloseModal}/>
        <EditModal show={showModalEdit} id={restaurantID} deleteFunction={deleteFunction} onSubmit={editRestaurantCard} onClose={handleCloseModalEdit} name={restaurantName} cityState={restaurantCityState} image={restaurantImage} guests={restaurantGuests} date={restaurantDate} time={restaurantTime}/>
    </div>
  );
};

export default ReservationItem;
