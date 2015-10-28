var express = require('express');
var router = express.Router();
var people_controller_1 = require('../controllers/people.controller');
router.get('/people', people_controller_1.default.index);
module.exports = router;
