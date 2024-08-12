const express = require('express');
const app = express();

app.use(express.json());

const peaple = [
    { id: 1, nome: 'João'},
    { id: 2, nome: 'Maria'},
    { id: 3, nome: 'José'},
];

app.get('/pessoa', function(req, res) {
    //Retornar lista de usuario
    res.json(peaple);

})

// Post /pessoa
// {"id": "1", "name": "Rafael"}
app.post('/pessoa', function(req, res){
    //Inserir um usuário
    const body = req.body;

    const newPeaple = req.body;

    peaple.push(newPeaple);

    res.status(201).json(newPeaple);

})

app.delete('/pessoa/:id', function(req, res){
    //Remover uma aplicação
    const id = req.params.id;
    const index = peaple.findIndex(p => p.id === id);

    if (index !== -1) {
        peaple.splice(index, 1);
        res.status(204).send(); // 204 No Content
    } else {
        res.status(404).json({ message: 'Usuário não encontrado' });
    }
})


app.listen(3000);