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
      className={`w-8 h-8 flex items-center justify-center text-xs font-semibold border rounded transition-transform hover:scale-125 ${seatColors[status]}`}
    >
    {id}
    </button>
  )
}
export default Seat
