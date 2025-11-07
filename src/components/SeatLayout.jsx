import Seat from "./Seat";
import {useState} from 'react'; 

const SeatLayout = () => {
const [kursiDipilih, setKursiDipilih] = useState([]);
const dataKursi =[];
const baris =['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const jumlahBaris = 20; 

//buat perulangan kursi sampai 20 baris
baris.forEach((huruf) => {
    for(let i = 1; i<=jumlahBaris; i++){
        dataKursi.push({id : `${huruf} ${i}`, type : 'Seat'})
    }
});
return(
    <>
<div className="text-center mb-4">
     <h1 className="text-center font-bold">Screen</h1>
</div>

{/*layout kursi*/}
<div className="grid grid-cols-20 gap-2 justify-center">
    {dataKursi.map((kursi) => (
        <Seat key = {kursi.id}
              id = {kursi.id}
              status={kursiDipilih.includes(kursi.id) ? "selected" : "kosong"}
              onSeatClick={() => handleSeatClick(kursi.id)}
              />
     ))}
</div>
{/*status kursi*/}
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
 <div className="mt-6 text-center">
        <h2 className="font-semibold mb-2">Kursi yang dipilih:</h2>
        <p>{kursiDipilih.length > 0 ? kursiDipilih.join(", ") : "Belum ada kursi dipilih"}</p>
</div>
    </>
)
}

export default SeatLayout