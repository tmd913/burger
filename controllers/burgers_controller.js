const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

// home route
router.get('/', function (req, res) {
    burger.all(function (data) {
        const hbsObj = {
            burgers: data
        };
        res.render('index', hbsObj);
    });
});

// route to add burger
router.post('/api/burgers', function (req, res) {
    burger.create(req.body.name, function (data) {
        res.status(200).end();
    });
});

// route to devour burger
router.put('/api/burgers/:id', function (req, res) {
    burger.update(req.params.id, function (data) {
        res.status(200).end();
    });
});

// route to remove burger
router.delete('/api/burgers/:id', function (req, res) {
    burger.delete(req.params.id, function (data) {
        res.status(200).end();
    });
});

module.exports = router;
