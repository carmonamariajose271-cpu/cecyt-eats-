// servidor/db.js 
const mysql = require('mysql2/promise'); 
  
const conexion = mysql.createPool({ 
  host:     'localhost', 
  port:      3306,        // Puerto por defecto de MySQL en XAMPP 
  user:     'root',       // Usuario por defecto en XAMPP 
  password: '',           // En XAMPP la contraseña de root está vacía 
  database: 'cecyt_eats', 
  waitForConnections: true, 
  connectionLimit:    10, 
}); 
  
// Probar la conexión al iniciar 
conexion.getConnection() 
  .then(() => console.log('✔ Conectado a MySQL (XAMPP)')) 
  .catch(err => console.error('✖ Error de conexión:', err.message)); 
  
module.exports = conexion; 