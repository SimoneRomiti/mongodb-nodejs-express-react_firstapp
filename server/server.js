require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', err => {console.error(err)});

// Verificare su atlas se l'IP è autorizzato ad accedere al network
db.once('open', () => console.log('Database connected'));

app.use(express.json());
app.use(cors());

const peopleRouter = require('./routes/people');
app.use('/people', peopleRouter);

app.listen(3000, () => console.log('Server started'));


