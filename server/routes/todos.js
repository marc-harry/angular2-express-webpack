var express = require('express');
var router = express.Router();
var todos_controller_1 = require('../controllers/todos.controller');
router.get('/todos', todos_controller_1.default.index);
module.exports = router;
