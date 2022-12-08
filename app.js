const express = require('express');
const app = express();
const basicRouter = require('./routes/routes');

app.get('/', (req, res) => {
    res.send({
        message: 'Server Running...',
        statue: 'Successfully Running.'
    })
})

app.use("/api",basicRouter)

//This is for the invalid route!
app.use((req,res) => {
    res.send({
        message: 'Invalid Route or Bad Request.',
    })
})

module.exports = app;