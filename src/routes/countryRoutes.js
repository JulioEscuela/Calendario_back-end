import express from 'express'; 
import { getAllCountries } from '../services/countryServices.js'

const router = express.Router();

router.get('/', async (req,res) => {
    try {
        const countries = await getAllCountries();
        res.json(countries);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los paises' });
    }
});

export default router;