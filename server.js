const express = require('express');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.get('/', (req, res) => {res.send('Note-Taker-App2');});

app.listen(PORT,() => console.log('All your notes have been stored at http://localhost:${PORT}'));