require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// 🔥 RUTA DE PRUEBA
app.get('/', (req, res) => {
  res.send('API de Cecyt Eats funcionando 🚀');
});

// 🔥 CONEXIÓN MYSQL (si la tienes en otro archivo, ignora esto aquí)
const mysql = require('mysql2/promise');

const conexion = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  waitForConnections: true,
  connectionLimit: 2,

  // 🔥 IMPORTANTE PARA FREESQLDATABASE EN RENDER
  ssl: null
});

// 🔥 PRUEBA DE CONEXIÓN
conexion.getConnection()
  .then(() => console.log('✔ Conectado a MySQL'))
  .catch(err => console.error('✖ Error de conexión:', err));

// 🔥 PUERTO CORRECTO PARA RENDER
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});