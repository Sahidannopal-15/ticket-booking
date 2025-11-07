// Seat.jsx
import { useState } from 'react'

//Warna kursi sesuai status
const seatColors = {
  kosong : 'bg-white',
  selected : 'bg-purple-500',
  reserved : 'bg-green-500',
  locked : 'bg-red-500'
}
//algoritma
const Seat = ({ id, status, onSeatClick }) => {
  return (
    <button
      onClick={onSeatClick}
      disabled = {status === "locked"}
      className={`w-8 h-8 border rounded cursor-pointer hover:scale-105 transition-transform ${seatColors[status]}`}
    >
    {id}
    </button>
  )
}
export default Seat
