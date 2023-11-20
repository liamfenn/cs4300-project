import React from 'react'
import ReservationItem from './ReservationItem';

export default function DisplayGrid ({items}) {
  
  return (

    <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(10, auto)',
        gap: '10px'
      }}>
      {items.map(item => (
        <ReservationItem restaurantInfo={item} />
      ))}
    </div>
  )
}