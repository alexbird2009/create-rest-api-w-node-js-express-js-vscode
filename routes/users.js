import express from 'express';

const router = express.Router();

import { createUser, getUsers, getUserById, deleteUserById, updateUserById } from '../controllers/users.js'

// all routes in here are starting with /users

router.get('/', getUsers);

router.post('/', createUser)

// /users/2 => req.params {id: 2}

router.get('/:id', getUserById);

router.delete('/:id', deleteUserById);

router.patch('/:id', updateUserById);

export default router;