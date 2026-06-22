require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();

app.use(cors());
app.use(express.json());

// 🔥 MYSQL POOL
const conexion = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  waitForConnections: true,
  connectionLimit: 2,

  ssl: null
});

// 🔥 PRUEBA DB
conexion.getConnection()
  .then(() => console.log('✔ Conectado a MySQL'))
  .catch(err => console.error('✖ Error MySQL:', err));

// 🔥 RUTA BASE
app.get('/', (req, res) => {
  res.send('API Cecyt Eats funcionando 🚀');
});

// 🔥 PUERTO CORRECTO RENDER
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});