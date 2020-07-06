import { connect } from 'mongoose';

export async function startConnection() {
    await connect('mongodb://localhost/phto-gallery-db', {
        useNewUrlParser: true,
        useFindAndModify: false
    });
    console.log('database is connected');
}