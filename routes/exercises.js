var express = require('express');
var router = express.Router();

var mongoose = require('mongoose')
var ExerciseModel = require('../models/ExerciseModel.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  ExerciseModel.find().then(exercises => res.json(exercises))

});

module.exports = router;
