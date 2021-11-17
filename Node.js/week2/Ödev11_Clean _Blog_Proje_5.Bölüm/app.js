//Imports express, mongoose, Post, postControllers, pageControllers, methodOverride and ejs modules
const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const methodOverride = require('method-override');
const Post = require('./models/Post');
const postControllers = require('./controllers/postControllers');
const pageControllers = require('./controllers/pageControllers')

//Initializes express js
const app = express();

//Connects to Database
mongoose.connect('mongodb://localhost/clean-blog-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Template Engine
app.set('view engine', 'ejs');

//Connects Static folder, which is public folder in clean-blog project and it is a Middleware function.
app.use(express.static('public'));
//Middleware for parsing body of request.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Middleware, which overrides Post and Get methods
app.use(
  methodOverride('_method', {
    method: ['POST', 'GET'],
  })
);

//All Routers
app.get('/', postControllers.getAllPost);
app.get('/posts/:id', postControllers.getPost);
app.post('/posts', postControllers.createPost);
app.put('/posts/:id', postControllers.updatePost);
app.delete('/posts/:id', postControllers.deletePost);
app.get('/about', pageControllers.getAboutPage);
app.get('/add_post', pageControllers.getAddPage);
app.get('/posts/edit/:id', pageControllers.getEditPage);


//Port number
const port = 3000;

//listens to port
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı.`);
});
