const express = require('express');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});


// app.get('/', (req, res) => {
//   res.send('Note Taker');
// });

app.listen(PORT,() => console.log('running at port 3001'));