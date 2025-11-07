import React from 'react';
import{useState} from 'react';

const Summary = ({kursiDipilih, hargaKursi}) => {
const totalHarga = kursiDipilih.length * hargaKursi;

return(
    <div className="mt-8 text-center">
      <h2 className="text-xl font-bold mb-2">Ringkasan Pemesanan</h2>
      {kursiDipilih.length > 0 ? (
        <>
          <p>Kursi dipilih: {kursiDipilih.join(', ')}</p>
          <p>Total harga: Rp {totalHarga.toLocaleString()}</p>
        </>
      ) : (
        <p>Belum ada kursi yang dipilih</p>
      )}
    </div>
);
};

export default Summary;