var router = require('express').Router();
var index = require('../controllers/index.controller.js');
var passport = require('passport');
const isLoggedIn = require('../services/auth.js');
const farmlogin = require('../services/farmauth.js');
var models = require('../models');

router.get('/', index.home);

router.get('/login', index.login);
// router.post('/login',  passport.authenticate('local-signin', {
//     successRedirect: '/admin',

//     failureRedirect: '/login'
// }

// ));

// router.post('/login',  passport.authenticate('local-signin', {
//     successRedirect: '/signin/success',

//     failureRedirect: '/signup/failure'
// }
// ));

router.post('/login', passport.authenticate('local-signin', {    
    failureRedirect: '/signup/failure'
}), (req, res) => {

    console.log(req.body.type);
    console.log(req.user.type);
    console.log(req.user.id);
    if(req.body.type!=req.user.type){
        return res.status(400).json({
            status: "failure",
            message: "User type does not match!! Can't login",
            data: null,
        });
    }
    res.redirect('/signin/success');
    // res.redirect('/signup/failure');
});

router.get('/logout',index.logout);

router.get('/signup', index.signup);
// router.post('/signup', passport.authenticate('local-signup', {    
//     failureRedirect: '/signup'
// }), (req, res) => {
//     if(req.user.type === 'buyer') res.send('Buyer Reg in progress');
//     if(req.user.type === 'farmer') res.redirect('/register/farmer/' + req.user.id);
//     res.redirect('/');
// });

router.post('/signup', passport.authenticate('local-signup', {    
    failureRedirect: '/signup/failure'
}), (req, res) => {
    if(req.user.type === 'buyer') res.redirect('/signup/success');
    if(req.user.type === 'farmer') res.redirect('/signup/success');
    // res.redirect('/signup/failure');
});

router.get("/signup/failure",(req,res)=>{
    return res.status(400).json({
        status: "failure",
        message: "Some error ocurred!",
        data: null,
    });
});

router.get("/signup/success",(req,res)=>{
    return res.status(200).json({
        status: "success",
        message: "Successfully registered or logged in (if already registered)!!",
        data: null,
    });
});

router.get("/signin/success",(req,res)=>{
    return res.status(200).json({
        status: "success",
        message: "Successfully logged in (if already registered)!!",
        data: null,
    });
});

// router.get('/admin',isLoggedIn,index.adminpage);

// router.get('/admin/allfarmer', index.allfarmer);

// router.get('/admin/allfarmer/:id', function(req, res){
//     // console.log(req.params.id);
//     mysqlConnection.query('SELECT farmer.farmer_id, farmer.username, farmerPDetails.*, help.*, plantg.*, valueadd.*, organic.*, farmbuyer.*, problem.*, experiment.*, futureplant.*, nearbyFarmer.*, dateoffilling.* FROM farmer LEFT JOIN farmerPDetails ON farmerPDetails.farmer_id = farmer.farmer_id LEFT JOIN help ON help.farmer_id = farmer.farmer_id LEFT JOIN plantg ON plantg.farmer_id = farmer.farmer_id LEFT JOIN valueadd ON valueadd.farmer_id = farmer.farmer_id LEFT JOIN organic ON organic.farmer_id = farmer.farmer_id LEFT JOIN farmbuyer ON farmbuyer.farmer_id = farmer.farmer_id LEFT JOIN problem ON problem.farmer_id = farmer.farmer_id LEFT JOIN experiment ON experiment.farmer_id = farmer.farmer_id LEFT JOIN futureplant ON futureplant.farmer_id = farmer.farmer_id LEFT JOIN nearbyFarmer ON nearbyFarmer.farmer_id = farmer.farmer_id LEFT JOIN dateoffilling ON dateoffilling.farmer_id = farmer.farmer_id WHERE farmer.farmer_id = ?', [req.params.id], function(error, result){
//         res.send(result);
//     });
// });
// router.get('/admin/allbuyer', index.allbuyer);



// app.get('/admin/allbuyer/:id', function(req, res){
//     mysqlConnection.query('SELECT buyer.buyer_id, buyer.username, buyerPDetails.*, buyerCDetails.*, plantused.*, providetest.*, test.*, lab.*, routinesup.*, buyproblem.*, geoorigin.*, buyfutureplant.*, nearbyBuyer.*, buyerdof.* FROM buyer LEFT JOIN buyerPDetails ON buyerPDetails.buyer_id = buyer.buyer_id LEFT JOIN buyerCDetails ON buyerCDetails.buyer_id = buyer.buyer_id LEFT JOIN plantused ON plantused.buyer_id = buyer.buyer_id LEFT JOIN providetest ON providetest.buyer_id = buyer.buyer_id LEFT JOIN test ON test.buyer_id = buyer.buyer_id LEFT JOIN lab ON lab.buyer_id = buyer.buyer_id LEFT JOIN routinesup ON routinesup.buyer_id = buyer.buyer_id LEFT JOIN buyproblem ON buyproblem.buyer_id = buyer.buyer_id LEFT JOIN geoorigin ON geoorigin.buyer_id = buyer.buyer_id LEFT JOIN buyfutureplant ON buyfutureplant.buyer_id = buyer.buyer_id LEFT JOIN nearbyBuyer ON nearbyBuyer.buyer_id = buyer.buyer_id LEFT JOIN buyerdof ON buyerdof.buyer_id = buyer.buyer_id WHERE buyer.buyer_id = ?', [req.params.id], function(error, result){
//         if(error) console.log(error);
//         else res.send(result);
//     });
// });

// router.get('/admin/membership', index.membership);

// router.get('/membership', farmlogin, function(req, res){
//     res.render('membership.ejs');
// });

module.exports = router;