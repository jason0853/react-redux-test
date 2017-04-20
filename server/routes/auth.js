import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../models/user';
import config from '../config';

let router = express.Router();

router.post('/', (req, res) => {
    const { identifier, password } = req.body;

    User.find({ $or: [{ 'username': identifier }, { 'email': identifier }] })
    .then(user => {
        if (user) {
            if (bcrypt.compareSync(password, user[0].get('password_digest'))) {
                const token = jwt.sign({
                    id: user[0].get('_id'),
                    username: user[0].get('username')
                }, config.jwtSecret);

                res.json({token})
            } else {
                res.status(401).json({ errors: { form: 'Invalid Credentials' } })
            }
        }
    })
    .catch(err => res.status(401).json({ errors: { form: 'Invalid Credentials' } }) );
});

export default router;
