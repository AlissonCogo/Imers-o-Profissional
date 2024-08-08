const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Vai Tomar no Cú Paulo')
});

app.listen(3000);