import express from 'express';
import path from 'path';
const router = new express.Router();

// Register other routes

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../../src/public/index.html'));
});

export default router;

