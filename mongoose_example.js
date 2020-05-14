//SIMPLE INTRO EXAMPLE 1

const express = require('express');
const port = 3000;
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://127.0.0.1:27017';
// const dbName = 'game-of-thrones';
// let db;

// MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
//   if (err) return console.log(err);

//   // Storing a reference to the database so you can use it later
//   db = client.db(dbName);
//   console.log(`Connected MongoDB: ${url}`);
//   console.log(`Database: ${dbName}`);
// });

//connect to mongodb using moongoose
// const url = 'mongodb://127.0.0.1:27017/game-of-thrones';
const url = process.env.DB_CONNECTION;
mongoose.connect(url, { useNewUrlParser: true });

const db = mongoose.connection;

db.once('open', _ => {
  console.log('Database connected:', url);
});

db.on('error', err => {
  console.error('connection error:', err);
});

mongoose.connection.once('open', function(){
    console.log('connection has been made human');
    
}).on('err', function(error){
    console.log('COnnection error:', error);
});

//middleware, runs with the route '/posts' this below middleware will run when u hit the /post api
app.use('/posts', ()=>{
    console.log('this si a middleware running');
});

app.get('/', (req, res)=>{
    res.send("we are on home");
});

app.get('/posts', (req, res)=>{
    res.send("we are on posts");
});

app.listen(port, ()=>{
    console.log("express is running on http://localhost:"+port);
});

