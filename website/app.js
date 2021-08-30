// const { response } = require('express');

/* Global Variables */
let date = document.querySelector('#date');
let temperature = document.querySelector('#temp');

// let content = document.getElementById('#content');
let generateB = document.getElementById('generate'); // Button to get weather data

const apiKey = '&appid=416853b767e9d161d6666279c80bc9cd'; // My api key
const measureSystem = '&units=metric'; // Temperature measure System
let weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=`;

// Create a new date instance dynamically with JS
let d = new Date();
const currentDate =
  d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();

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
  let userResponse = document.querySelector('#feelings').value; // Defind User input

  getTemperatureData(zipCode) // return temperature from api using zipCode value
    .then((tempData) => {
      // post current temperature and user input with the date and return all data from the server
      postWeatherData({
        temperature: tempData,
        userResponse: userResponse,
        date: currentDate,
      });
      updateDataToUser();
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
const postWeatherData = async (data = {}) => {
  // path to post datau
  const response = await fetch('/addData', {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data), // defined body response as json object
  });

  try {
    const serRes = await response.json();
    // console.log(serRes.temperature, serRes.date, serRes.userResponse);

    return serRes; // Get data from projectData in the server
  } catch (error) {
    // catch error
    console.log('Error', error);
  }
};

/**
 *
 * Get data to send it for update user interface
 *
 **/
const updateDataToUser = async () => {
  const request = await fetch('/getData');
  try {
    // defind projectData to update UI
    const projData = await request.json();
    date.innerHTML = projData.date;
    temperature.innerHTML = projData.temperature;
    // get user input to push it
    document.getElementById('content').innerHTML = projData.userResponse;
  } catch (error) {
    console.log('Error', error);
  }
};
