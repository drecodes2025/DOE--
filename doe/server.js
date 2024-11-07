require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const donationRoutes = require('./routes/donationRoutes');

const app = express();
connectDB();

app.use(express.json());
app.use('/api/donations', donationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
