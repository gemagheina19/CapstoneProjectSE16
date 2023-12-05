const express = require('express');
const router = express.Router();

const lsrooms = [
  {
    id: 1,
    kode: 'BDG001',
    name: 'Hotel Bandung Selatan',
    city: 'Bandung',
    paket: ['Paket A', 'Paket B'],
    nor: [9, 8],
    address: 'Jl. Raya Bandung Selatan No. 123',
    email: 'info@bandungselatanhotel.com',
    telp: '123456789',
    image: [['room1.jpg', 'room2.jpg'], ['room3.jpg', 'room4.jpg']],
    rating: 4.5,
  },
  // Tambahkan data lsroom lainnya sesuai kebutuhan
];

// Endpoint GET untuk mendapatkan semua data lsroom
router.get('/', (req, res) => {
  res.json(lsrooms);
});

// Endpoint GET untuk mendapatkan data lsroom berdasarkan ID atau Kode
router.get('/:identifier', (req, res) => {
  const identifier = req.params.identifier.toUpperCase();
  const lsroom = lsrooms.find(room => room.id === parseInt(identifier) || room.kode === identifier);

  if (lsroom) {
    res.json(lsroom);
  } else {
    res.status(404).json({ message: 'Room not found' });
  }
});

// Fungsi untuk menghasilkan kode lsroom baru
function generateLsroomCode() {
  const latestLsroom = lsrooms[lsrooms.length - 1];
  const latestId = latestLsroom ? parseInt(latestLsroom.kode.slice(3)) : 0;
  const newId = latestId + 1;
  return 'BDG' + newId.toString().padStart(3, '0');
}

module.exports = router;
