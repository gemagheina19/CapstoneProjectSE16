// controllers/kotaController.js
let kotaData = [
    { id: 1, namaKota: 'Bandung', images: ['image1.jpg', 'image2.jpg'] },
    { id: 2, namaKota: 'Jakarta', images: ['image3.jpg', 'image4.jpg'] },
    { id: 3, namaKota: 'Batang', images: ['image5.jpg', 'image6.jpg'] },
    { id: 4, namaKota: 'Pekalongan', images: ['image7.jpg', 'image8.jpg'] },
  ];
  
  // GET all kota
  const getAllKota = (req, res) => {
    res.json(kotaData);
  };
  
  // GET kota by ID
  const getKotaById = (req, res) => {
    const kotaId = parseInt(req.params.id);
    const kota = kotaData.find((k) => k.id === kotaId);
    if (kota) {
      res.json(kota);
    } else {
      res.status(404).json({ error: 'Kota not found' });
    }
  };
  
  // GET kota by namaKota
  const getKotaByNama = (req, res) => {
    const namaKota = req.params.namaKota;
    
    const kota = kotaData.find((k) => k.namaKota.toLowerCase() === namaKota.toLowerCase());
    
    if (kota) {
      res.json(kota);
    } else {
      res.status(404).json({ error: 'Kota not found' });
    }
  };
  
  // POST new kota
  const createKota = (req, res) => {
    const newKota = req.body;
    kotaData.push(newKota);
    res.status(201).json(newKota);
  };
  
  // PUT update kota by ID
  const updateKotaById = (req, res) => {
    const kotaId = parseInt(req.params.id);
    const updatedKota = req.body;
    const index = kotaData.findIndex((k) => k.id === kotaId);
    if (index !== -1) {
      kotaData[index] = { ...kotaData[index], ...updatedKota };
      res.json(kotaData[index]);
    } else {
      res.status(404).json({ error: 'Kota not found' });
    }
  };
  
  // DELETE kota by ID
  const deleteKotaById = (req, res) => {
    const kotaId = parseInt(req.params.id);
    kotaData = kotaData.filter((k) => k.id !== kotaId);
    res.json({ message: 'Kota deleted successfully' });
  };
  
  module.exports = {
    getAllKota,
    getKotaById,
    getKotaByNama,
    createKota,
    updateKotaById,
    deleteKotaById,
  };
  