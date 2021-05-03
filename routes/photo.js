const path = require('path');

const express = require('express');

const photoController = require('../controllers/photo');

const router = express.Router();

router.get('/', photoController.getIndex);

module.exports = router;