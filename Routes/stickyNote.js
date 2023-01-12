const router = require('express').Router();
const path = require('path');
const {readAndAppend, readFromFile} = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

router.get('/api/notes', (req, res) => {
    console.info(`${req.method} request received!`);
    readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
  });

  router.post('/api/notes', (req, res) => {
    console.info(`${req.method} your request to add a note has been received!`);
  
    const { noteTitle, noteText } = req.body;
  
    if (req.body) {
      const newNote = {
        title,
        text,
        note_id: uuid(),
      };
  
      readAndAppend(newNote, './db/notes.json');
      res.json(`Note has been saved!`);
    } else {
      res.error('Sorry there was an error! Try again!');
    }
  });

module.exports = router;