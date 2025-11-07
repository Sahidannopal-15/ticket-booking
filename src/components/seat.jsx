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
const Seat = (props) => {
//menyimpan status kursi
 const[seatStatus, setStatus] = useState(props.status)
  const onSeatSelection = () =>{
    props.onSeatClick()
  }
  if (seatStatus === 'kosong'){
    setStatus('selected')
  } else if (seatStatus === 'selected'){
    setStatus('kosong')
  }
//Tampilan
  return ( 
    <div
      onClick = {onSeatSelection}
      className = {'w-8 h-8 border rounded cursor-pointer ${seatColors[seatStatus]} hover:scale-105'}
      title = {`seat : ${seatStatus}`}
    />
  )
}
export default Seat
