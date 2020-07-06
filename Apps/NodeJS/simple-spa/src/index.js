const express = require('express');
const app = express();
const path = require('path');

const indexRoutes = require('./routes/index');

//setings
app.set('port', 4000);
app.set('views', path.join(__dirname + '/views'));

// I will use ejs to render .html files
app.engine('html', require('ejs').renderFile);
// Templating language to render html
app.set('view engine', 'ejs');

//middlewares

//routes
app.use(indexRoutes);

//static files
app.use(express.static(path.join(__dirname,'/public')));

//listening the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});