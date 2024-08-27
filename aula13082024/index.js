const express = require('express');

const app = express();

// app.use(express.json());

const people = [
    { id: 1, nome: "Paulo" },
    { id: 2, nome: "Ana" },
    { id: 3, nome: "Carlos" },
    { id: 4, nome: "Beatriz" },
    { id: 5, nome: "Lucas" },
    { id: 6, nome: "Mariana" },
    { id: 7, nome: "João" },
    { id: 8, nome: "Fernanda" },
    { id: 9, nome: "Rafael" },
    { id: 10, nome: "Juliana" },
    { id: 11, nome: "Gustavo" },
    { id: 12, nome: "Isabela" }
];

app.get('/pessoa', function(req, res) {
    res.json(people);
});

app.post('/pessoa/post/', function (req,resp){
    let id = people.length + 1;

    let pessoa = {
        id : id,
        pessoa : "Nome top"
    }

    people.push(pessoa);

    resp.json(pessoa);
})

app.delete('/pessoa/delete/:id' , function(req, resp){

    let id = req.params.id

    try{
        people.splice(id,1);
        resp.json('Foi deletado')
    }catch(err){
        resp.json('Deu erro')
    }
})


app.listen(3000);