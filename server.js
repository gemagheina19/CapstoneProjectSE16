const express = require('express');
const app = express();
const port = 3000;

const cityRoutes = require('./routes/cityRoutes');
const paketRoutes = require('./routes/paketRoutes');
const lsroomRoutes = require('./routes/lsroomRoutes'); // Tambahkan ini

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/city', cityRoutes);
app.use('/paket', paketRoutes);
app.use('/lsroom', lsroomRoutes); // Tambahkan ini

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
