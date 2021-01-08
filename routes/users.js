import express from 'express';

const router = express.Router();

import { v4 as uuidv4 } from 'uuid';

const users = [];

// all routes in here are starting with /users
router.get('/', (req, res) => {
    
    res.send(users);

});

router.post('/', (req, res) => {
    
    const user = req.body;

    users.push({ ...user, id: uuidv4() });

    res.send(`User ${user.firstName} added to database!`);
})

router.get('/:id', (req, res) => {
    res.send('THE GET ID ROUTE');
});

export default router;