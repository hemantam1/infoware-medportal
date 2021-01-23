var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const {Sequelize} = require("sequelize");
var methodOverride = require('method-override');
var passport = require('passport')
var session = require('express-session')


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));


var models = require("./models");



// For Passport
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

require('./services/passport.js')(passport, models.user);


const rout = require('./routers/index.router.js');
const farmreg = require('./routers/farmreg.router.js');
app.use('/', rout);
app.use('/', farmreg);

// app.get('/yip', function(req, res){
//     models.user.findAll()
//     .then(data => {
//         res.send(data);
//     });
// });
models.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine')
 
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});

app.listen(3000, function(err, result){
    console.log('Server is running!');
});