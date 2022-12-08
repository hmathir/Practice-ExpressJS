const express = require('express');
const router = express.Router();


router.get('/user', (req, res) => {
    res.send({
        message: 'Post Methood Called.'
    })
})

router.post('/user', (req, res) => {
    res.send({
        message: 'Post Methood Called.'
    })
})

router.put('/user', (req, res) => {
    res.send({
        message: 'Put Methood Called.'
    })
})

router.delete('/user', (req, res) => {
    res.send({
        message: 'Delete Methood Called.'
    })
})

module.exports = router;