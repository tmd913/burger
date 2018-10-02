const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

router.get('/', function (req, res) {
    burger.all(function (data) {
        const hbsObj = {
            burgers: data
        };
        console.log(hbsObj);
        res.render('index', hbsObj);
    });
});

router.get('/create', function (req, res) {
    burger.create('Veggie Burger', function (data) {
        res.redirect('/');
    });
});

router.get('/update', function (req, res) {
    burger.update(6, 'Quarter Pounder', 1, function (data) {
        res.redirect('/');
    });
});

module.exports = router;
