import express from 'express';
const router = new express.Router();
import {peopleController} from '../controllers/people.controller';

// Register middleware here

// Register routes here
router.get('/people', peopleController.index);

export default router;