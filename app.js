const express = require('express'); //require the express module from npm
const bodyParser = require('body-parser'); //require the bodyParser module from npm
const cookieParser = require('cookie-parser'); //require the cookieParser module from npm
const helmet = require('helmet'); //require the helmet module from npm (header security for http requests)
const logger = require('morgan');
require('dotenv').config(); //require the dotenv module from npm
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const listRouter = require('./routes/lists');
const categoryRouter = require('./routes/categories');
const itemRouter = require('./routes/items');

//------ DBCONFIG ------//

const db = require('./config/keys');
//connect to mongoDB
mongoose.connect(db.mongoURI, { useNewUrlParser: true })
.then(() => {
  console.log('MongoDB Connected');
})
.catch(err => {
  console.log(err);
  console.log('\x1b[31m\x1b[1m MongoDB Not Connected');
})
//------ DBCONFIG ------//

const app = express(); //initiialise server object
const port = process.env.PORT || 5000; //set default port to 5000 unless otherwise specified

//------ MIDDLEWARE ------//

app.use(logger('dev'));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

//------ MIDDLEWARE ------//


//------ ERROR HANDLING ------//

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
})

//------ ERROR HANDLING ------//

//------ ROUTES ------//

app.use('/', indexRouter);
app.use('/lists', listRouter);
app.use('/items', itemRouter);
app.use('/categories', categoryRouter);

//------ ROUTES ------//


//start server listening on port variable
app.listen(port, () => {
    console.log(`app listening on port ${port}`); 
}); 