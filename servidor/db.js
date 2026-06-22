require('dotenv').config();
const mysql = require('mysql2/promise');

console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PORT:', process.env.DB_PORT);
console.log('DB_NAME:', process.env.DB_NAME);

const conexion = mysql.createPool({
  host:     process.env.DB_HOST     || 'localhost',
  port:     parseInt(process.env.DB_PORT) || 3306,
  user:     process.env.DB_USER     || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME     || 'cecyt_eats',
  waitForConnections: true,
  connectionLimit: 2,
  ssl: { rejectUnauthorized: false },
});

conexion.getConnection()
  .then(() => console.log('✔ Conectado a MySQL'))
  .catch(err => console.error('✖ Error de conexión:', JSON.stringify(err)));

module.exports = conexion;