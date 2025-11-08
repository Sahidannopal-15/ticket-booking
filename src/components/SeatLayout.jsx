import Seat from "./Seat";
import {useState} from 'react'; 
import Summary from "./Summary";
import React from "react";

const SeatLayout = ({kursiDipilih, kursiTerkunci,kursiReserved, toggleKursi}) => {
const dataKursi =[];
const baris =['J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
const jumlahBaris = 20; 

//buat perulangan kursi sampai 10 baris
baris.forEach((huruf) => {
    for(let i = 1; i<=jumlahBaris; i++){
        dataKursi.push({id : `${huruf}${i}`, type : 'Seat'})
    }
});

return(
    <>
<div className="text-center mb-4 ">
     <h1 className="text-center text-white p-2 font-bold bg-blue-500 w-full">Layar di sini</h1>
</div>

 {/* layout kursi */}
<div className="grid grid-cols-21 gap-3 justify-center mx-auto w-fit">
  {dataKursi.map((kursi,index) => {
    let status = "kosong";
      if (kursiTerkunci.includes(kursi.id)) status = "locked";
      else if (kursiReserved.includes(kursi.id)) status = "reserved";
      else if (kursiDipilih.includes(kursi.id)) status = "selected";
    return (
      <React.Fragment key={kursi.id}>
        <Seat
          id={kursi.id}
          status={status}
          onSeatClick={() => toggleKursi(kursi.id)}
        />
        
        {/*Menambahkan lorong kosong setelah kursi nomor 10*/}
        {(index + 1) % 20 === 10 && <div className="w-6"></div>}
      </React.Fragment>
    );
  })}
</div>

{/*warna kursi*/}
<div className="flex justify-center mt-6 gap-6">
  <div className="flex items-center gap-2">
    <div className="w-4 h-4 bg-purple-500 rounded"></div>
    <span>Dipilih</span>
  </div>
  <div className="flex items-center gap-2">
    <div className="w-4 h-4 bg-white border rounded"></div>
    <span>Kosong</span>
  </div>
  <div className="flex items-center gap-2">
    <div className="w-4 h-4 bg-green-400 rounded"></div>
    <span>Sudah Dipesan</span>
  </div>
  <div className="flex items-center gap-2">
    <div className="w-4 h-4 bg-red-500 rounded"></div>
    <span>Dikunci</span>
  </div>
</div>

{/*ringkasan*/}
<Summary kursiDipilih={kursiDipilih} hargaKursi={50000} />
    </>
)
}

export default SeatLayout