import express = require('express');
const router = express.Router();
import peopleController from '../controllers/people.controller';

// Register middleware here

// Register routes here
router.get('/people', peopleController.index);

export = router;