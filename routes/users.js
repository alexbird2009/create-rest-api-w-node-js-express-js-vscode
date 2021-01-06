import express from 'express';

const router = express.Router();

const users = [
    {
        firstName: "Oleksandr",
        lastName: "Boloban",
        age: "39"
    },
    {
        firstName: "Iuliia",
        lastName: "Boloban",
        age: "34"
    }
]

// all routes in here are starting with /users
router.get('/', (req, res) => {
    console.log(users);
    res.send(users);
});

router.post('/', (req, res) => {})

export default router;