import { pool } from '../config/db.js'

async function getAllCountries() {
    
    const [rows] = await pool.query('SELECT * FROM countries');
    return rows;
}

export {getAllCountries};