const express = require('express');
const Router = express.Router();
const DetailController = require('../controllers/detailController');

// Get All Details
Router.get('/', DetailController.getDetails);

// Save a Detail
Router.post('/', DetailController.saveDetails);

module.exports = Router;


