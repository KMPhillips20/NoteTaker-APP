
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
  const dataInfo = fs.readFileSync('./db/db.json', 'utf8');
  const notesInfo = JSON.parse(dataInfo);
  res.json(notesInfo);
});

app.post('/api/notes', (req,res) => {
  const dataInfo = fs.readFileSync('./db/db.json', 'utf8');
  const notesInfo = JSON.parse(dataInfo);
  const stickyNote = {
    ...req.body,
    id:uuid4()
  };
  notesInfo.push(stickyNote);
  const stringifyedNewNote = JSON.stringify(notesInfo);
  fs.writeFileSync('./db/db.json', stringifyedNewNote);
  res.json('Your note has been saved!');
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

// how to get the notes to delete
app.delete('/api/notes/:id', (req,res) => {
  const dataInfo = fs.readFileSync('./db/db.json', 'utf8');
  const notesInfo = JSON.parse(dataInfo).filter(note => note.id !== req.params.id);
  const stringifyedNewNote = JSON.stringify(notesInfo);
  fs.writeFileSync('./db/db.json', stringifyedNewNote);
res.json('your note has been deleted!');
  
});




app.listen(PORT, () => console.log('Port 3001 is running'));
