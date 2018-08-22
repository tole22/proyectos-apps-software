var mysql = require('mysql');
function Conection(){
    this.pool = null;

    this.start = function(){
        this.pool = mysql.createPool({
            connectionLimit: 10,
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'demo'
        });
    }

    this.obtain = function(callback){
        this.pool.getConnection(function(error, connection){
            callback(error, connection)
        })
    }
}

module.exports = new Conection();