const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({
        message: 'Server Running...',
        statue: 'Successfully Running.'
    })
})

app.post('/', (req, res) => {
    res.send({
        message: 'Post Methood Called.'
    })
})

app.put('/', (req, res) => {
    res.send({
        message: 'Put Methood Called.'
    })
})

app.delete('/', (req, res) => {
    res.send({
        message: 'Delete Methood Called.'
    })
})


//This is for the invalid route!
app.use((req,res) => {
    res.send({
        message: 'Invalid Route or Bad Request.',
    })
})

module.exports = app;