const Mysqli = require('mysqli');

let conn = new Mysqli({
    host: 'localhost',
    port: 3306,
    user: 'root',
    passwd: 'tole22',
    db: 'mega_shop'
});

let db = conn.emit(false, '');

module.exports = {
    database: db
};
