require("dotenv").config({path: "../.env"});

const mysql = require("mysql2");
const pool = mysql.createPool({
    host: "127.0.0.1",
    port: process.env.REACT_APP_DB_PORT,
    user: "root",
    password: process.env.REACT_APP_DB_PW,
    database: "goodRecipe",
});

pool.getConnection((err, conn) => {
    if ( err ) {
        console.log(err);
        return;
    }
    conn.query("SELECT * FROM root", (err, result, field) => {
        if ( !err ) {
            console.log(result);
            conn.release();
        } else {
            throw err;
        }
    })
});

module.exports = pool;