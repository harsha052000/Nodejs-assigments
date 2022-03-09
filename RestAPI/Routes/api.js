const express = require('express');
const router = express.Router();
const Inventory = require('../Models/inventory')

//get inventory
router.get('/inventory', function (req, res) {
    res.send({ type: 'GET' })
});

//add inventory
router.post('/inventory', function (req, res) {
    Inventory.create(req.body).then(function (response) {
        res.send(response);
    })


});

//edit inventory
router.put('/inventory/:id', function (req, res) {
    res.send({ type: 'PUT' })
});

//delete inventory
router.delete('/inventory/:id', function (req, res) {
    res.send({ type: 'DELETE' })
});

module.exports = router;