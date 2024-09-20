import * as mysql from 'mysql2';
import env from 'dotenv';
env.config();

const connection = mysql.createConnection({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME 
});

connection.connect((err) => {
    if (err) {
        console.log(err.code);
    } else {
        console.log('Connection success');
    }
});

export default connection;