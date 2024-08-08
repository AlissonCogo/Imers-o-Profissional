const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send("hello world")
});

app.get("/penis", (req, res) =>{
    res.send("Alisson ladrão")
});

app.listen(3000);