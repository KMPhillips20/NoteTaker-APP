const router = require('express').Router();
const path = require('path');
const stickyNoteRouter = require('./stickyNote');
router.use(stickyNoteRouter);

router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);


router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/pages/notes.html'))
);


module.exports = router;