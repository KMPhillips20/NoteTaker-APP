
const express = require('express');
const fs = require('fs');
const PORT = process.env.PORT || 3001;
const path = require('path');
const {v4: uuid4} = require('uuid');
const app = express();


// Middle wear
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


app.get('/api/notes', (req,res) => {
  fs.readFileSync('./db/db.json', 'utf8');
  const notesInfo = JSON.parse(data);
  res.json(notesInfo);
});

app.post('/api/notes', (req,res) => {
  fs.readFileSync('./db/db.json', 'utf8');
  const notesInfo = JSON.parse(data);


  res.json(notesInfo);
});

// Routes 
// Path for homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

// Path for Notes 
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});




app.listen(PORT, () => console.log('Port 3001 is running'));
