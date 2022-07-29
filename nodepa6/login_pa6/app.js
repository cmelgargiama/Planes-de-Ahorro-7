var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
const MySQLStore = require('express-mysql-session');
//const SequelizeStore = require('connect-session-sequelize')(session.Store)
const {database} = require("./config/dbConfig.js");
//const  db  =  require("./database.js")
const cors =  require('cors')
const sequelize = require("./database")
const exphbs = require('express-handlebars')
const bodyParser = require("body-parser")
//const nombre = require('../login_pa6/lib/passport.js');
//const test = require('../login_pa6/lib/passport.js');
//const text = require('../login_pa6/lib/passport.js')
//webpack
/*const webpack = require('webpack');
const webpackDev = require('webpack-dev-middleware');
const config = require('./webpack.config')*/
require("dotenv").config()





//import UserRouter from "./routes/userRoutes";


//Routers
var indexRouter = require('./routes/index' );
var usersRouter = require('./routes/users');
var inicioRouter = require('./routes/inicio');
var segurosRouter = require('./routes/seguros');
var stockVehiculosRouter = require('./routes/stockVehiculos');

//const sequelize = require('sequelize');


// Initializations
var app = express();
require('./lib/passport.js')

// view engine setup
app.set('views', path.join(__dirname, '/views'));
app.engine('.hbs', exphbs.engine({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir:path.join(app.get('views'),'partials'),
  extname: '.hbs' , 
  helpers: require('./lib/handlebars.js')
}))
app.set('view engine', '.hbs');

//Middlewares y Dependences
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(express.json());
app.use(flash());
app.use(cors({
  origin:"http://localhost:3000",
  credentials:true,
}));
app.use(express.urlencoded({ extended: true }));


//app.use(webpackDev(webpack(config)));

//static files
app.use(express.static(path.join(__dirname, 'public')));

var sessionStore = new MySQLStore(database);
//var sessionStore = new SequelizeStore(sequelize)
app.use(session({
  secret: "loginsession",
  cookie:{ secure: true },
  resave: 'false',
  saveUnitialized: false,
  store: sessionStore, 
  endConnectionOnClose: true,
  createDatabaseTable: false,
  clearExpired: true,
  
}));


app.use(cookieParser("loginsession"));
app.use(passport.initialize());
app.use(passport.session());
require('./lib/passport')(passport);
/*SEQUELIZE DB SYNC */
const db = require("./models");
const Role = db.role;
/*db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  
})*/;


//sessionStore.sync()

app.use( (req,res, next) => {
  // flash a message
 app.locals.success =  req.flash('success', );
 app.locals.message = req.flash('message');
 //res.locals.text = text;
 // res.locals.nombre = nombre;
  //res.locals.test = test;
  next();
})
/*
//CORS OPTIONS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000")
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers-Origin, Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});*/





// Global Variables
/*app.use((res,req,next)=>{
  
  next()
})*/

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/inicio', inicioRouter);
app.use('/seguros' , segurosRouter);
app.use('/stockVehiculos', stockVehiculosRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  


  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Server Listener
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});



module.exports = app;
