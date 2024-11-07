require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const donationRoutes = require('./routes/donationRoutes');

const app = express();
connectDB();

app.use(express.json());
app.use(express.static('frontend'));
app.use('/api/donations', donationRoutes);
app.get('/formulario', (req, res) => {
    res.sendFile(__dirname + '/ultima.html');
});
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/ultima.html');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
