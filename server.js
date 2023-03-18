
const express = require('express');
// Create an express server
const app = express();

// Point Server to the route files
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Set PORT
const PORT = process.env.PORT || 3001;

// Parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// Parse incoming JSON data
app.use(express.json());


app.use(express.static('public'));
app.use(apiRoutes);
app.use(htmlRoutes);

// Listener
app.listen(PORT, () => {
    console.log(`Server is ready on port ${PORT}!`);
});
