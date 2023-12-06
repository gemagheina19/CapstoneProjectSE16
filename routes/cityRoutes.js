const express = require('express');
const router = express.Router();

const cities = [
  { id: 1, cityName: 'Jakarta', image: 'jakarta.jpg' },
  { id: 2, cityName: 'Bali', image: 'bali.jpg' },
  { id: 3, cityName: 'Bandung', image: 'bandung.jpg' },
];

// Endpoint GET untuk mendapatkan semua data city
router.get('/', (req, res) => {
  res.json(cities);
});

// Endpoint GET untuk mendapatkan data city berdasarkan ID atau nama
router.get('/:identifier', (req, res) => {
  const identifier = req.params.identifier.toLowerCase();
  const city = cities.find(c => c.id === parseInt(identifier) || c.cityName.toLowerCase() === identifier);

  if (city) {
    res.json(city);
  } else {
    res.status(404).json({ message: 'City not found' });
  }
});

// Endpoint POST untuk menambahkan data city baru
router.post('/', (req, res) => {
  const newCity = req.body;
  newCity.id = cities.length + 1;
  cities.push(newCity);
  res.status(201).json(newCity);
});

// Endpoint PUT untuk memperbarui data city berdasarkan ID atau nama
router.put('/:identifier', (req, res) => {
  const identifier = req.params.identifier.toLowerCase();
  const updatedCity = req.body;

  const index = cities.findIndex(c => c.id === parseInt(identifier) || c.cityName.toLowerCase() === identifier);

  if (index !== -1) {
    cities[index] = { ...cities[index], ...updatedCity };
    res.json(cities[index]);
  } else {
    res.status(404).json({ message: 'City not found' });
  }
});

// Endpoint DELETE untuk menghapus data city berdasarkan ID atau nama
router.delete('/:identifier', (req, res) => {
  const identifier = req.params.identifier.toLowerCase();
  const index = cities.findIndex(c => c.id === parseInt(identifier) || c.cityName.toLowerCase() === identifier);

  if (index !== -1) {
    const deletedCity = cities.splice(index, 1);
    res.json(deletedCity[0]);
  } else {
    res.status(404).json({ message: 'City not found' });
  }
});

module.exports = router;
