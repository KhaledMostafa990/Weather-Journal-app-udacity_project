/* Global Variables */
let date = document.querySelector('#date');
let temperature = document.querySelector('#temp');

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
  let userResponse = document.querySelector('#feelings').value; // Defind User feelings

  getTemperatureData(zipCode) // return temperature from api using zipCode value
    .then((tempData) => {
      // post current temperature and user input with the date to return it from the server
      postWeatherData({
        temperature: tempData,
        userResponse: userResponse,
        date: currentDate,
      });
      // get the data that return from the server and update it for user
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
//*** Define api data and user in parameter ***//
const postWeatherData = async (data = {}) => {
  // path to post data
  const response = await fetch('/addData', {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data), // define body response as json object
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
  const request = await fetch('/data');
  try {
    // define projectData to update UI for user
    const projData = await request.json();
    date.innerHTML = ` &#128198; Data : ${projData.date}`;
    temperature.innerHTML = ` &#127780 Temperature is : ${Math.floor(
      projData.temperature
    )} &degC`;
    // get user input to push it
    document.getElementById(
      'content'
    ).innerHTML = ` &#128113; Your Feeling : ${projData.userResponse}`;
  } catch (error) {
    console.log('Error', error);
  }
};
