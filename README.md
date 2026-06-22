# CECyT-Eats

Sistema de pedidos para la cafetería escolar.

## Tecnologías
- Frontend: React + Vite
- Backend: Node.js + Express
- Base de datos: MySQL

## Instalación local

### 1. Base de datos
1. Inicia XAMPP y enciende Apache y MySQL
2. Abre phpMyAdmin en http://localhost/phpmyadmin
3. Ejecuta el script: servidor/database/cecyt_eats.sql

### 2. Backend
cd servidor
npm install
cp .env.example .env
node index.js

### 3. Frontend
cd cecyt-eats
npm install
npm run dev

## Variables de entorno
Copia servidor/.env.example como servidor/.env y llena tus credenciales de MySQL.
