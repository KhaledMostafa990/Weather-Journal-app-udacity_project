# Weather-Journal App Project

## Overview

This project app are the second exam for front-end Web Dev nanodegree (professional track) from Udacity.
Project requires from me.. create an asynchronous web app for get weather temperature by using Web API with user input data and dynamically update the UI for user by using javascript in server and client side.

## Instructions

This will require modifying the [1]`server.js` file and the [2]`website/app.js` file.
I can see [3]`index.html` for element references, and once I have finished with the project steps,
I will use [4]`style.css` to style the application to customized perfection.

## To run project

Run this project requires setup Node.js to use npm packeges
0- initialization npm by use : npm init on terminal. read more https://docs.npmjs.com/cli/v7/commands/npm-init
1- download node from here : https://nodejs.org/en/download/
2- install express.js to run server and route : npm i express (on Terminal)
3- install middelware "body-parser" and "cors" : npm i middelware Name
4- install prettier extention to prettier fromat your code : https://prettier.io/docs/en/install.html (optional)

## Devolopment strategy..

### Test running server

defind the static folder for the web app and test run the server

### Add Get route and Post route

at server-side..
-make a get route to add that return endpoint projectData obj from server
-make post route that adds data incoming from api and user to endpoint obj

### Defind global variables

at client-side
put global variables which need
url, api key, user input, zipcode etc..

### Use api url and api key to get weather data (GET request)

-make async function(GET request) in app.js to call api and get data using "fetch"

### User Event listener

-make an event listener where user clicked, execute a callback function that call the async Get request function.

### Create Post rueqest to add data to server

-make another async function that post the data incoming from api and user input
to the app

### Rewrite css style

### Udapte data incoming from user and api

update the data that coming from user and api and send it to User interface.

### Inconclusion

Thanks for Udacity commiunty resourses and supports from tutors and wibnars.
Thanks for https://uigradients.com/#Cinnamint for colors.
Thanks for W3school for emoji.
