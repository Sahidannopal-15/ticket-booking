import React, { useState } from "react";
import SeatLayout from "./components/SeatLayout";
import Summary from "./components/Summary";

function App() {
  const [kursiTerkunci, setKursiTerkunci] = useState(["A2", "B3"]);

  // daftar kursi yang dipilih
  const [kursiDipilih, setKursiDipilih] = useState([]);

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
    <div className="">
      <SeatLayout
        kursiTerkunci={kursiTerkunci}
        kursiDipilih={kursiDipilih}
        toggleKursi={toggleKursi}
      />
    </div>
  );
}

export default App;
