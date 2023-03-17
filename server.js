// Dependencies
const express = require('express');

// app use express
const app = express();

// creating environment variable port
const PORT = process.env.PORT || 3001;


// asks express to create a route for every file in the 'public' folder and give it a '/' route
app.use(express.static('public'));

// sets up express app to handle data parser, middle wear created req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// import routr configuration and apply apply them to the app instance
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// app listener - starts the server
app.listen(PORT, () => {
  console.log(`Server available at localhost${PORT}`);
});

