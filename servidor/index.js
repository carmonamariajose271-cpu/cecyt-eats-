// servidor/index.js
const express = require('express');
const cors = require('cors');

const app = express();
const PUERTO = 3001;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.use('/api/usuarios', require('./rutas/rutaUsuarios'));
app.use('/api/productos', require('./rutas/rutaProductos'));
app.use('/api/pedidos', require('./rutas/rutaPedidos'));

app.get('/', (req, res) => {
  res.json({ mensaje: 'API CECyT-Eats activa ✔' });
});

app.listen(PUERTO, () => {
  console.log(`Servidor en http://localhost:${PUERTO}`);
});