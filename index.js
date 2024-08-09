const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Vai Tomar no Cú Paulo')
});

app.listen(3000);

app.post("/Pessoa/Cadastrar", function(req, res) {
    res.json({
        status: "OK",
        message: "Pessoa Cadastrada"
    }
    )
})