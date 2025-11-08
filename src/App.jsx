import React, { useState } from "react";
import SeatLayout from "./components/SeatLayout";
import Summary from "./components/Summary";

function App() {
  const [kursiTerkunci, setKursiTerkunci] = useState(["J18","I18","J20", "J19","I20","I19","H18", "H19", "H20"]);
  const [kursiDipilih, setKursiDipilih] = useState([]);
  const [kursiReserved, setKursiReserved] = useState([]);

  // fungsi milih kursi
  const toggleKursi = (seat) => {
    if (kursiTerkunci.includes(seat)) return;
    if (kursiDipilih.includes(seat)) {
      setKursiDipilih(kursiDipilih.filter((s) => s !== seat));
    } else {
      setKursiDipilih([...kursiDipilih, seat]);
    }
  };

  return (
    <><div className="min-h-screen bg-cover bg-center bg-[url(./assets/coolbackgrounds-fractalize-bleach.png)]">
    <div className="">
      <SeatLayout
        kursiTerkunci={kursiTerkunci}
        kursiDipilih={kursiDipilih}
        kursiReserved={kursiReserved}
        toggleKursi={toggleKursi}
      />
    </div>
    <div className="mt-4 text-center">
      <button 
      onClick={() => {
        if(kursiDipilih.length === 0){
          alert("Pilih kursi dulu");
          return;
        }
        setKursiReserved(prev => [...prev, ...kursiDipilih]);
        setKursiDipilih([]);
        alert("Pembelian Berhasil")
        return;
      }
    }
    className={`px-4 py-2 rounded-[10px] font-semibold text-white ${
      kursiDipilih.length === 0 ? "bg-gray-400 cursor-not-allowed": "bg-blue-500 hover:bg-blue-800 cursor-pointer transition-all duration-500"
    }`}
      >
      Beli Sekarang
      </button>
    </div>
<footer className='mt-14 mx-4 border-t border-white/10 text-sm italic hover:text-red-500 
        transition-colors duration-300 tracking-widest'>
    💻 dibuat oleh sahidannopal15
</footer>
  </div>
    </>
  );
}

export default App;
