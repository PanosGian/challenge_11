// Dependencies
const path = require('path');
const fs = require('fs');
const uniqid = require('uniqid');

// Routing
module.exports = (app) => {

  // Read the db.json file and return all saved notes as JSON.
  app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
  });

  // Receive a new note to save on the request body, add it to the db.json file, and return the new note to the client.
  app.post('/api/notes', (req, res) => {
    let db = JSON.parse(fs.readFileSync('db/db.json'));

    // Creating the body for the note
    const userNote = {
      title: req.body.title,
      text: req.body.text,
      id: uniqid(),
    };

    // Adding the created note to the db.json file
    db.push(userNote);
    fs.writeFileSync('db/db.json', JSON.stringify(db));
    res.json(userNote);
  });

  // Receive a query parameter containing the id of a note to delete.
  app.delete('/api/notes/:id', (req, res) => {
    const db = JSON.parse(fs.readFileSync('db/db.json'));

    // Filtering out the note with the given id
    const updatedNotes = db.filter(item => item.id !== req.params.id);

    // Writing the updated notes to the db.json file
    fs.writeFileSync('db/db.json', JSON.stringify(updatedNotes));
    res.json(updatedNotes);
  });
};
