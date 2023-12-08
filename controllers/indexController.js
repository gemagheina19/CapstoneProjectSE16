// controllers/indexController.js
const fs = require('fs');
const path = require('path');

const indexController = {
  getPage: (req, res) => {
    const filePath = path.join(__dirname, '..', 'views', 'index.html');

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading HTML file:', err);
        res.status(500).send('Internal Server Error');
        return;
      }

      res.send(data);
    });
  },
};

module.exports = indexController;
