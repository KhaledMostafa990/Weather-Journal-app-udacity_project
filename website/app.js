// const { response } = require('express');

/* Global Variables */
let date = document.querySelector('#date');
let temperature = document.querySelector('#temp');
// let userResponse = document.querySelector('#content'); // User content

let feelings = document.getElementById('feelings'); // User input
let generateB = document.getElementById('generate'); // Button to get weather data

const apiKey = '&appid=416853b767e9d161d6666279c80bc9cd'; // My api key
const measureSystem = '&units=metric'; // Temperature measure System
let weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=`;

// Create a new date instance dynamically with JS
let d = new Date();
date = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();

/**
 *
 *
 * Main function
 *
 *
 **/

// Event listener to add function to existing HTML DOM element

generateB.addEventListener('click', async () => {
  let zipCode = document.getElementById('zip').value; // Defind zipcode value from user
  let userResponse = document.querySelector('#feelings').value; // Defind User content

  getTemperatureData(zipCode) // return temperature from api using zipCode value
    .then((tempData) => {
      // post current temperature and user input with the date and return all data from the server
      postWeatherData(tempData, userResponse, {
        temperature: tempData,
        userResponse: userResponse,
        date: date,
      });
    });
});

/**
 *
 * Async GET response to Get data from api
 *
 **/
const getTemperatureData = async (zipCode) => {
  // Get response from api
  const response = await fetch(
    weatherApiUrl + zipCode + apiKey + measureSystem
  ); // fetch data from api  by concate url, zipcode, apikey and measureSystem.
  // define api response to get temperature
  const data = await response.json();
  return (tempData = data.main.temp);
};

/**
 *
 * Async POST response to post data to the server
 *
 **/
//*** Define data from api and user as parameter ***//
const postWeatherData = async (tempData, userResponse, data = {}) => {
  // path to post data
  const response = await fetch('/addData', {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data), // defined body response as json object
  });

  try {
    const serRes = await response.json();
    console.log(serRes);
    return serRes; // Get data from projectData in the server
  } catch (error) {
    // catch error
    console.log('Error', error);
  }
};
