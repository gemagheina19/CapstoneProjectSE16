const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(__dirname + '/detail-room/detail-rooms.html');
});

module.exports = router;

