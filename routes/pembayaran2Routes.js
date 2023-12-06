const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(__dirname + '/../pembayaran2/pagebayar.html');
});

module.exports = router;