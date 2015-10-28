import express from 'express';
const router = new express.Router();
import controller from '../controllers/todos.controller';

// Register middleware here

// Register routes here
router.get('/todos', controller.index);

export default router;
