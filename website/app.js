// const { response } = require('express');

/* Global Variables */

let date = document.querySelector('#date');
let temperature = document.querySelector('#temp');
let userResponse = document.querySelector('#content'); // user content

let feelings = document.getElementById('feelings'); // user input
let generateB = document.getElementById('generate'); // Button to get weather data

const apiKey = '416853b767e9d161d6666279c80bc9cd';

// Create a new date instance dynamically with JS
let d = new Date();
date = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();

/**
 * Main function
 **/
// Async GET
// Test Url
generateB.addEventListener('click', async () => {
  const zipCode = document.getElementById('zip').value;
  let weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=metric`;

  const response = await fetch(weatherApiUrl);
  const data = await response.json();
  console.log(data.main.temp);
  console.log(zipCode);
});

// Async POST
