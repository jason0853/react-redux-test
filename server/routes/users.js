import express from 'express';
import bcrypt from 'bcrypt';
import validateInput from '../shared/validations/signup';

import User from '../models/user';

let router = express.Router();

router.post('/', (req, res) => {
    const { errors, isValid } = validateInput(req.body.userData);

    if (isValid) {
        res.json({success: true});
        const { username, email, password, timezone } = req.body.userData;
        const password_digest = bcrypt.hashSync(password, 10);

        User.create({ username, email, password_digest, timezone })
        .then(res => res.json({success: true}))
        .catch(err => res.status(500).json({ error: err }));

    } else {
        res.status(400).json(errors);

    }

});

export default router;
