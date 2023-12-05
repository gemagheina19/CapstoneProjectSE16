// File: testingRoutes.js

const express = require('express');
const router = express.Router();

const db = require('../dbConfig'); // Sesuaikan dengan path yang benar

router.get('/', (req, res) => {
  db.query('SELECT * FROM testing', (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Query Result:', results);
      res.json(results);
    }
  });
});

module.exports = router;
