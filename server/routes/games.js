import express from 'express';

const router = express.Router();

router.get('/games', (req, res) => {
    res.send({type: 'GET Request of Games'});
});

export default router;
