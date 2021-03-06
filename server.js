// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-parser');
const cors = require('cors');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8080;

// Spin up the server
const server = app.listen(port, () => {
  // console.log('server is running');
  console.log(`running on localhost: ${port}`);
});

/**
 *
 * // GET route
 *
 **/
app.get('/data', (req, res) => {
  // Endpoint for all routes

  res.send(projectData);
  console.log(projectData);
});

/**
 *
 * // POST route
 *
 **/
app.post('/addData', (req, res) => {
  // add the req body to project data

  projectData['date'] = req.body.date;
  projectData['userResponse'] = req.body.userResponse;
  projectData['temperature'] = req.body.temperature;
  res.send(projectData);
  console.log(req.body.temperature);
});
