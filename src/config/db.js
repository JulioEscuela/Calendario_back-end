import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME,
    waitForConnections:true,
    connectionLimit:10,
    maxIdle:10,
    idleTimeout:60000,
    queueLimit:0,
});

async function testConnection() {
    try {
        const [rows] = await pool.query('SELECT 1 + 1 as result');
        return rows[0].result === 2;
    } catch (error) {
        console.error('Error en la conexión a la base de datos:', error.message);
        return false;
    }
}

export {pool,testConnection};