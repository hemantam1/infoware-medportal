var models = require('../models');
var exports = module.exports = {}


exports.home = function(req, res){
    res.render('home.ejs');
}

exports.login = function(req, res){
    res.render('login.ejs');
}

exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        return res.status(200).json({
            status: "success",
            message: "Successfully logout!!",
            data: null,
        });
 
    });
 
}

exports.signup = function(req, res){
    res.render('signup.ejs');
}

exports.postsign = function(req, res){
    models.user.create(req.body).then(result => {
        res.send(result);
    }).catch(error => {
        console.log(error);
    });
}

exports.adminpage =  function(req, res){
    res.render('admin.ejs');
}

exports.allfarmer = function(req, res){
    models.fpdetails.findAll().then(result => {
        // res.render('allfarmer.ejs', {result : result});
        res.send(result);
    });
}

exports.allbuyer = function(req, res){
    models.buyerpdetails.findAll().then(result => {
        // res.render('allbuyer.ejs', {result : result});
        res.send(result);
    });
}

exports.membership = function(req, res){
   models.membership.findAll().then(function(result){
        res.send(result);
    }).catch(error => {
        console.log(error);
    });
}