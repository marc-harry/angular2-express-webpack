import express = require('express');
const router = express.Router();
import controller from '../controllers/todos.controller';

// Register middleware here

// Register routes here
router.get('/todos', controller.index);
router.post('/todos', controller.post);

export = router;
