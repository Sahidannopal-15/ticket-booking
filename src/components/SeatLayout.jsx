import Seat from "./Seat";
import {useState} from 'react'; 
import Summary from "./Summary";

const SeatLayout = () => {
const [kursiDipilih, setKursiDipilih] = useState([]);
const dataKursi =[];
const baris =['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const jumlahBaris = 20; 
const kursiTerkunci = ["A1", "A2", "B3", "F5"];

//buat perulangan kursi sampai 20 baris
baris.forEach((huruf) => {
    for(let i = 1; i<=jumlahBaris; i++){
        dataKursi.push({id : `${huruf}${i}`, type : 'Seat'})
    }
});
 // 🎯 fungsi kalo kursi diklik
const handleSeatClick = (namaKursi) => {
    if (kursiTerkunci.includes(namaKursi)) return; 
    if (kursiDipilih.includes(namaKursi)) {
      setKursiDipilih(kursiDipilih.filter((k) => k !== namaKursi));
    } else {
      setKursiDipilih([...kursiDipilih, namaKursi]);
    }
  };

return(
    <>
<div className="text-center mb-4">
     <h1 className="text-center font-bold">Screen</h1>
</div>

{/*layout kursi*/}
<div className="grid grid-cols-20 gap-2 justify-center">
    {dataKursi.map((kursi) => {
        key = {kursi}
        let status = "kosong";
        if (kursiTerkunci.includes(kursi.id)) status = "locked";
        else if (kursiDipilih.includes(kursi.id)) status = "selected";
 return (
            <Seat
              key={kursi.id}
              id={kursi.id}
              status={status}
              onSeatClick={() => handleSeatClick(kursi.id)}
            />
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
 <div className="mt-6 text-center">
        <h2 className="font-semibold mb-2">Kursi yang dipilih:</h2>
        <p>{kursiDipilih.length > 0 ? kursiDipilih.join(", ") : "Belum ada kursi dipilih"}</p>
</div>

<Summary kursiDipilih={kursiDipilih} hargaKursi={50000} />
    </>
)
}

export default SeatLayout