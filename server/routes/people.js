import express from 'express';
const router = new express.Router();

// Register middleware here

// Register routes here
router.get('/people', (req, res) => {
    console.log('People endpoint');
    res.json('People');
});

export default router;