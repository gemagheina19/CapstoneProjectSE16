const express = require('express');
const router = express.Router();

const packages = [
  { id: 1, kode: 'TYP001', type: 'Paket A', facilities: 'Wifi, AC, TV', price: 100000 },
  { id: 2, kode: 'TYP002', type: 'Paket B', facilities: 'Kolam Renang, Sarapan', price: 150000 },
  // Tambahkan data type lainnya sesuai kebutuhan
];

// Endpoint GET untuk mendapatkan semua data type
router.get('/', (req, res) => {
  res.json(packages);
});

// Endpoint GET untuk mendapatkan data type berdasarkan ID atau Kode
router.get('/:identifier', (req, res) => {
  const identifier = req.params.identifier.toUpperCase();
  const package = packages.find(p => p.id === parseInt(identifier) || p.kode === identifier);

  if (package) {
    res.json(package);
  } else {
    res.status(404).json({ message: 'Type not found' });
  }
});

// Endpoint POST untuk menambahkan data type baru
router.post('/', (req, res) => {
  const newPackage = req.body;
  newPackage.id = packages.length + 1;
  newPackage.kode = generateTypeCode(); // Fungsi untuk menghasilkan kode type baru
  packages.push(newPackage);
  res.status(201).json(newPackage);
});

// Endpoint PUT untuk memperbarui data type berdasarkan ID
router.put('/:identifier', (req, res) => {
  const identifier = req.params.identifier.toUpperCase();
  const updatedPackage = req.body;

  const index = packages.findIndex(p => p.id === parseInt(identifier) || p.kode === identifier);

  if (index !== -1) {
    packages[index] = { ...packages[index], ...updatedPackage };
    res.json(packages[index]);
  } else {
    res.status(404).json({ message: 'Type not found' });
  }
});

// Endpoint DELETE untuk menghapus data type berdasarkan ID
router.delete('/:identifier', (req, res) => {
  const identifier = req.params.identifier.toUpperCase();
  const index = packages.findIndex(p => p.id === parseInt(identifier) || p.kode === identifier);

  if (index !== -1) {
    const deletedPackage = packages.splice(index, 1);
    res.json(deletedPackage[0]);
  } else {
    res.status(404).json({ message: 'Type not found' });
  }
});

// Fungsi untuk menghasilkan kode type baru
function generateTypeCode() {
  const latestPackage = packages[packages.length - 1];
  const latestId = latestPackage ? parseInt(latestPackage.kode.slice(3)) : 0;
  const newId = latestId + 1;
  return 'TYP' + newId.toString().padStart(3, '0');
}

module.exports = router;
