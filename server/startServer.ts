//Please, if you're reading this, notice that those stupid comments is for my own understanding as i'm currently in learning process. Thanks.

//so the first thing i must do is set the connection with the server, for this project, i'm going to use an noSQL(mongoDB) as i need some fast updates  in the db and also an easy to work dataBase.

//In this project i'll be using express to handle things in the db, moongoose to handle the API, react(vite) and cors to connect 
const express = require('express');
const body = require("body-parser");
const cors = require("cors");
const appExpress = express();
let PORT
let works = "hello";

appExpress.get('/', (req, res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({
        works: "hi",
    });
})    
appExpress.listen( PORT = 5000 , () =>{
    console.log(`Port running on ${PORT}`);
})

