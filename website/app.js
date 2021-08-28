/* Global Variables */
const apiKey = '416853b767e9d161d6666279c80bc9cd';

let zipCode = document.querySelector('#zip');
let feelings = document.querySelector('#feelings');
let generateBtn = document.querySelector('#generate');
let date = document.querySelector('#date');
let temp = document.querySelector('#temp');
let content = document.querySelector('#content');
let entryHolder = document.querySelector('#entryHolder');

let url = `https://api.openwethermap.org/data/2.5/weather?zip=&appid=`;

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();
