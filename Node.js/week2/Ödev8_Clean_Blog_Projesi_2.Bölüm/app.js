//Imports express, path, and ejs modules
const express = require('express');
const path = require('path');
const ejs = require('ejs');

//Initializes express js
const app = express();

//Template Engine
app.set('view engine', 'ejs');

//Middleware for static files
app.use(express.static('public'));

//Route for index
app.get('/', (req, res) => {
  res.render('index');
});

//Route for about
app.get('/about', (req, res) => {
  res.render('about');
});

//Route for add_post
app.get('/add_post', (req, res) => {
  res.render('add_post');
});

//Route for post
app.get('/post', (req, res) => {
  res.render('post');
});

//Port number
const port = 3000;

//listens to port
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı.`);
});

