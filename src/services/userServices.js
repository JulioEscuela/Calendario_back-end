import { pool } from '../config/db.js'

async function createUser(user) {
    
    const {country_id,name,lastname,username,password,email} = user;

    const[result] = await pool.query(
        'INSERT INTO users (country_id,name,lastname,user,password,email) VALUES(?,?,?,?,?,?)',
        [country_id,name,lastname,username,password,email]
    );

    return {
        id:result.insertId,
        country_id,
        name,
        password,
        email
    };

}

export {createUser};