const mysql = require('mysql');

module.exports = {
    name: 'rest-api',
    hostname : 'http://localhost',
    port: process.env.PORT || 9090,
    db: {
        get : mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : '',
            database : 'consumer'
		})
    }
}