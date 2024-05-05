const app = require('./app');
const { connect } = require('./database');


async function main() {

    // DB connection
    await connect();


    // Express App
    await app.listen(4000);
    console.log('server on port 4000')
}

main();