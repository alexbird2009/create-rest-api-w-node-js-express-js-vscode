import express from 'express';

const router = express.Router();

import { v4 as uuidv4 } from 'uuid';

let users = [];

// all routes in here are starting with /users
router.get('/', (req, res) => {
    
    res.send(users);

});

router.post('/', (req, res) => {
    
    const user = req.body;

    users.push({ ...user, id: uuidv4() });

    res.send(`User ${user.firstName} added to database!`);
})

// /users/2 => req.params {id: 2}

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const foundedUser = users.find((user) => user.id == id );
    
    res.send(foundedUser);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User ${ id } deleted from the database`)
})

router.patch('/:id', (req, res) => {
    const { id } = req.params;

    const userToBeUpdated = users.find((user) => user.id == id);

});

export default router;