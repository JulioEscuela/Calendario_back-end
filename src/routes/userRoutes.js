import express from 'express';
import { createUser } from '../services/userServices.js'

const router = express.Router();

router.post('/', async (req,res) => {
    try {
        const newUser = req.body;
        const createdUser = await createUser(newUser);
        res.status(201).json(createdUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear usuario' });
    }
});

export default router;