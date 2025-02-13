const bodyParser = require('body-parser'); // Import body-parser ou require('body-parser')
const express = require('express'); // Import express ou require('express')
const app = express(); // Create o express app
const port = 3000; // Define a porta
app.use(bodyParser.json()); // Middleware para parser o body da requisição

let tarefas = [ // Array de tarefas  
    {id: 1, descricao: 'Estudar node.js'}, // tarefa 1
    {id: 2, descricao: 'Estudar react'}, // tarefa 2
    {id: 3, descricao: 'Criar API com Express'}, // tarefa 3
]; 

// meu codigo
app.get('/tarefas', (_req, res) => { // Rota para listar tarefas
    res.json(tarefas); // Retorna todas as tarefas
})


// meu codigo
// app.post('/tarefas', (req, res) => { // Rota para criar tarefas
//     const tarefa = req.body; // Recebe a tarefa do corpo da requisição
//     tarefas.push(tarefa); // Adiciona a tarefa no array de tarefas
//     res.json(tarefa); // Retorna a tarefa criada
// })

// exemplo da Professora
app.post('/tarefas', (req, res) => { 
    const { descricao } = req.body; 
    if (!descricao) { return res.status(400).json({ mensagem: 'Descrição é obrigatória' }); }  // !: negação, ou diferente

    const novaTarefa = { id: tarefas.length + 1,  // numero de elementos em um array
        descricao: descricao };

    tarefas.push(novaTarefa);// Adiciona a tarefa no array de tarefas
    res.status(201).json(novaTarefa); // envia a resposta com o status 201    
})

// meu codigo
// app.delete('/tarefas/:id', (req, res) => { // Rota para deletar uma tarefas
//     const id = parseInt(req.params.id); // Recebe o id da tarefa
//     tarefas = tarefas.filter(tarefa => tarefa.id !== id); // Filtra as tarefas diferentes do id
//     res.json({mensagem: 'Tarefa removida com sucesso'});  // Retorna a mensagem de sucesso
// })

// exemplo da Professora

app.delete('/tarefas/:id', (req, res) => {
    const { id } = req.params;
   
    const tarefa = tarefas.find(t => t.id === parseInt(id));

    if (!tarefa) {
        return res.status(404).json({ mensagem: 'Tarefa não encontrada' });
    }

    tarefas = tarefas.filter(t => t.id !== parseInt(id));
    res.json({ mensagem: 'Tarefa removida com sucesso' });
})





// meu codigo
// app.put('/tarefas/:id', (req, res) => { // Rota para editar tarefas 
//      const id = parseInt(req.params.id); // Recebe o id da tarefa
//      const descricao = req.body.descricao; // Recebe a descrição da tarefa
//      const tarefa = tarefas.find(tarefa => tarefa.id === id); // Procura a tarefa pelo id
//      tarefa.descricao = descricao; // Atualiza a descrição da tarefa

//     if (!tarefa) { // Se a tarefa não for encontrada
//         return res.status(404).json({ mensagem: 'Tarefa não encontrada ou não existente :(' });} 

//         res.json(tarefa); // Retorna a tarefa atualizada     
// })

// exemplo da Professora

app.put('/tarefas/:id', (req, res) => {
    const { id } = req.params;
    const { descricao } = req.body;

    const tarefa = tarefas.find(t => t.id === parseInt(id));

    if (!tarefa) {
        return res.status(404).json({ mensagem: 'Tarefa não encontrada' });
    }

    tarefa.descricao = descricao || tarefa.descricao;
    res.json(tarefa);
})


