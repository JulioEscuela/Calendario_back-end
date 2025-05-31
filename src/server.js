import dotenv from 'dotenv';
import app from './app.js';
import { testConnection } from './config/db.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

(async () => {
    const isDbConnect = await testConnection();

    if(!isDbConnect){
        console.error('No se pudo conectar a la base de datos. Abortando servidor...');
        process.exit(1);
    }

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });

})();