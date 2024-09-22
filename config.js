/*
// config.js
module.exports = {
    redis: {
        url: process.env.REDIS_URL ,
        port: process.env.REDIS_PORT,
        host: process.env.REDIS_HOST
     
    }
};
*/
import dotenv from 'dotenv'

dotenv.config();
import mysql from 'mysql2'

let connection;

try {
    connection = mysql.createConnection({
        host: process.env.DBHOST,
        user: process.env.DBUSER,
        password: process.env.DBPASS,
        database: process.env.DBNAME,
        port:process.env.DBPORT,
        connectTimeout: 120000
    });
} catch (error) {
    console.log("Error al conectar con la base de datos");
}

export default connection;