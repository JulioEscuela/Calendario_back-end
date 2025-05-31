import express from 'express';
import logger from './middlewares/logger.js'
import userRoutes from './routes/userRoutes.js'
import countryRoutes from './routes/countryRoutes.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(logger);
app.use(cors({
    origin: 'http://localhost:5173', // O usa '*' para todos los orígenes (no recomendado en producción)
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use('/api/users',userRoutes);
app.use('/api/countries',countryRoutes);

export default app;