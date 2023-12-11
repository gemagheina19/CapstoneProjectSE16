const fs = require('fs');
const path = require('path');

const cityController = {
  getCityPage: (req, res) => {
    const filePath = path.join(__dirname, '..', 'views', 'welcome.html');

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading HTML file:', err);
        res.status(500).send('Internal Server Error');
        return;
      }

      res.send(data);
    });
  },

  getAllCities: async (req, res) => {
    try {
      console.log('Before findAll');
      const cities = await City.findAll();
      console.log('After findAll');
      res.json(cities);
    } catch (error) {
      console.error('Error fetching cities:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
},

  getCityById: async (req, res) => {
    const { id } = req.params;
    try {
      const city = await City.findByPk(id);
      if (city) {
        res.json(city);
      } else {
        res.status(404).json({ error: 'City not found' });
      }
    } catch (error) {
      console.error('Error fetching city by ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createCity: async (req, res) => {
    const { cityName, images } = req.body;
    try {
      const newCity = await City.create({ cityName, images });
      res.json(newCity);
    } catch (error) {
      console.error('Error creating city:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateCity: async (req, res) => {
    const { id } = req.params;
    const { cityName, images } = req.body;
    try {
      const city = await City.findByPk(id);
      if (city) {
        await city.update({ cityName, images });
        res.json(city);
      } else {
        res.status(404).json({ error: 'City not found' });
      }
    } catch (error) {
      console.error('Error updating city:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteCity: async (req, res) => {
    const { id } = req.params;
    try {
      const city = await City.findByPk(id);
      if (city) {
        await city.destroy();
        res.json({ message: 'City deleted successfully' });
      } else {
        res.status(404).json({ error: 'City not found' });
      }
    } catch (error) {
      console.error('Error deleting city:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = cityController;
