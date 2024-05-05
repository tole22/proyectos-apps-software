const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:28900/flutter-node-tutorial', {});
        console.log('DB connected');
    } catch (error) {
        console.error('COULD NOT CONNECT TO DATABASE:', error.message);
    }
};

module.exports = { connect };