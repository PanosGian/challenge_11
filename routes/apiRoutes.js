
const path = require('path');
const fs = require('fs');
const uniqid = require('uniqid');
const express = require('express');
const router = express.Router();

// Read in the db.json file and return as a response all saved notes as JSON.
router.get('/api/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../db/db.json'));
});

// get the new note and save it in the db.jon file ie. the request body, add return the new note to the client.
router.post('/api/notes', (req, res) => {
  let db = JSON.parse(fs.readFileSync('db/db.json'));

  // Creating the body for the note
  const userNote = {
    title: req.body.title,
    text: req.body.text,
    id: uniqid(),
  };

  // Append the new note to the db.json file
  db.push(userNote);
  fs.writeFileSync('db/db.json', JSON.stringify(db));
  res.json(userNote);
});

// Receive the id of a note to delete.
router.delete('/api/notes/:id', (req, res) => {
  const db = JSON.parse(fs.readFileSync('db/db.json'));

  // Filtering out the note with the provided id
  const updatedNotes = db.filter(item => item.id !== req.params.id);

  // update the db.json file
  fs.writeFileSync('db/db.json', JSON.stringify(updatedNotes));
  res.json(updatedNotes);
});

module.exports = router;

