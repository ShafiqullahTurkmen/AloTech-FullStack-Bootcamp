//Imports express, mongoose,Post and ejs modules
const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const Post = require('./models/Post');

//Initializes express js
const app = express();

//Connects to Database
mongoose.connect('mongodb://localhost/clean-blog-test-db');

//Template Engine
app.set('view engine', 'ejs');

//Connects Static folder, which is public folder in clean-blog project and it is a Middleware function.
app.use(express.static('public'));
//Middleware for parsing body of request.
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Route to index
app.get('/', async (req, res) => {
  const posts = await Post.find({});
  res.render('index', {
    posts
  });
});

//Route to post
app.get('/posts/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('post', {
    post
  });
});

//Route to about
app.get('/about', (req, res) => {
  res.render('about');
});

//Route to add_post
app.get('/add_post', (req, res) => {
  res.render('add_post');
});

//Route to post
app.get('/post', (req, res) => {
  res.render('post');
});

//Posts to Database From website
app.post('/posts', async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
});

//Port number
const port = 3000;

//listens to port
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı.`);
});
