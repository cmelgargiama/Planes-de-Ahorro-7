var mysql = require('mysql');
const {promisify} = require('util')
const url = process.env.MYSQL_CONNECTION_STRING
const {database} = require('../config/dbConfig');


const pool = mysql.createPool(database);
 
pool.getConnection((err,connection) => {
    if(err) {
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('DATABASE CONNECTION WAS CLOSED');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('DATABASE HAS TOO MANY CONNECTIONS');
        }
        if (err.code === 'ECONNREFUSED'){
            console.error('DATABASE CONNECTION WAS REFUSED');
        }
    }
    if (connection ) connection.release();
    console.log('DB is Connected');
    return;
})

// Promisify Pool Querys
pool.query = promisify(pool.query)

module.exports = pool ; 