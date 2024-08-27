const express = require('express')
const app = express();

app.get('/', function (requisicao, resposta) {

    resposta.json({
        status: "OK",
        values: [
            1, 2, 3, 4
        ]
    })

    console.log(requisicao)
})

app.post('/pessoa/cadastrar', function (requisicao, resposta) {
    resposta.json({
        status: "OK",
        message: "Pessoa cadastrada"
    });
    console.log(requisicao);
});

app.delete("/pessoa/deletar", function (requisicao, resposta) {
    resposta.json({
        status: "ok",
        mensage: "Pessoa deletada com sucesso"
    })
    console.log(requisicao)
})

app.put("/pessoa/editar", function (requisicao, resposta) {
    resposta.json({
        status: "OK",
        mensage: "Pessoa editada"
    })
    console.log(requisicao)
})




app.listen(3000);

