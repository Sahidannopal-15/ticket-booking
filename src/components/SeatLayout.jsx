import Seat from "./Seat";
import {useState} from 'react'; 

const dataKursi =[];
const baris = 'A, B, C, D, E, F, G';
const jumlahBaris = 20; 

//buat perulangan kursi sampai 20 baris
baris.forEach((huruf) => {
    for(let i = 1; i<=jumlahBaris; i++){
        dataKursi.push({id : `${huruf} ${i}`, type : 'Seat'})
    }
});

export default SeatLayout