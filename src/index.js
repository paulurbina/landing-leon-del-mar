// Require env config
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const exhbs = require('express-handlebars');

const db = require('./db/index')

db()

//Settings
app.set('port', process.env.PORT || 4300);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exhbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.use('/', require('./routes/'));

//Static files
app.use(express.static(path.join(__dirname, 'public')));
// app.use('/dist', express.static(path.join(__dirname, '../node_modules/jquery-validation/dist/')));
// app.use('/dist', express.static(path.join(__dirname, '../node_modules/jquery-toast-plugin/dist')));

//Listen server
app.listen(app.get('port'), () => {
    console.log(`server on http://localhost:${app.get('port')}`);
});