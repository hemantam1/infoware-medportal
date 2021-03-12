var models = require('../models');
var exports = module.exports = {}

exports.reg = function(req, res){
    res.render('buyer_registration.ejs', {pid : req.params.id});
}

exports.reg1 =  function(req, res){
    res.render('buyer_register1.ejs', {pid: req.params.id});
}

exports.reg2 =  function(req, res){
    res.render('buyer_register2.ejs', {pid: req.params.id});
}

exports.reg3 = function(req, res){
    res.render('buyer_register3.ejs', {pid: req.params.id});
}

exports.reg4 = function(req, res){
    res.render('buyer_register4.ejs', {pid: req.params.id});
}

exports.reg5 = function(req, res){
    res.render('buyer_register5.ejs', {pid: req.params.id});
}

exports.reg6 = function(req, res){
    res.render('buyer_register6.ejs', {pid: req.params.id});
}

exports.reg7 = function(req, res){
    res.render('buyer_register7.ejs', {pid: req.params.id});
}

exports.reg8 = function(req, res){
    res.render('buyer_register8.ejs', {pid: req.params.id});
}

exports.reg9 =  function(req, res){
    res.render('buyer_register9.ejs', {pid: req.params.id});
}

exports.reg10 = function(req, res){
    res.render('buyer_register10.ejs', {pid: req.params.id});
}

exports.reg11 = function(req, res){
    res.render('buyer_register11.ejs', {pid: req.params.id});
}

exports.reg12 = function(req, res){
    res.render('buyer_register12.ejs', {pid: req.params.id});
}

exports.reg1p = function(req, res){
    var fpd = req.body;
    var pid = req.params.id;
    fpd.userid = pid;
    models.buyerpdetails.create(fpd)
    .then(function(result){
        console.log(result);
        return res.status(200).json({
            status: "success",
            message: "Successfully filled the details!!",
            data: result,
        });
    }).catch(error => {
        console.log(error);
        return res.status(400).json({
            status: "failure",
            message: "Some error ocurred!",
            data: null,
        });
    });
}

exports.reg2p = function(req, res){
    // console.log(req.body);
    var fpd = req.body;
    var pid = req.params.id;
    fpd.userid = pid;
    models.buyercdetails.create(fpd)
    .then(function(result){
        console.log(result);
        return res.status(200).json({
            status: "success",
            message: "Successfully filled the details!!",
            data: result,
        });
    }).catch(error => {
        console.log(error);
        return res.status(400).json({
            status: "failure",
            message: "Some error ocurred!",
            data: null,
        });
    });
}

exports.reg3p = function(req, res){
    // console.log(req.body);
    var fpd = req.body;
    var pid = req.params.id;
    fpd.userid = pid;
    models.plantused.create(fpd)
    .then(function(result){
        console.log(result);
        return res.status(200).json({
            status: "success",
            message: "Successfully filled the details!!",
            data: result,
        });
    }).catch(error => {
        console.log(error);
        return res.status(400).json({
            status: "failure",
            message: "Some error ocurred!",
            data: null,
        });
    });
}

exports.reg4p =  function(req, res){
    var fpd = req.body;
    var pid = req.params.id;
    fpd.userid = pid;
      models.providetest.create(fpd)
      .then(function(result){
          console.log(result);
          return res.status(200).json({
            status: "success",
            message: "Successfully filled the details!!",
            data: result,
        });
      }).catch(error => {
          console.log(error);
          return res.status(400).json({
            status: "failure",
            message: "Some error ocurred!",
            data: null,
        });
      });
}

exports.reg5p =  function(req, res){
    var fpd = req.body;
    var pid = req.params.id;
    fpd.userid = pid;
      models.test.create(fpd)
      .then(function(result){
          console.log(result);
          return res.status(200).json({
            status: "success",
            message: "Successfully filled the details!!",
            data: result,
        });
      }).catch(error => {
          console.log(error);
          return res.status(400).json({
            status: "failure",
            message: "Some error ocurred!",
            data: null,
        });
      });
}

exports.reg6p = function(req, res){
    var fpd = req.body;
    var pid = req.params.id;
    fpd.userid = pid;
    models.lab.create(fpd)
    .then(function(result){
        console.log(result);
        return res.status(200).json({
            status: "success",
            message: "Successfully filled the details!!",
            data: result,
        });
    }).catch(error => {
        console.log(error);
        return res.status(400).json({
            status: "failure",
            message: "Some error ocurred!",
            data: null,
        });
    });
}

exports.reg7p = function(req, res){
    console.log(req.body);
    var fpd = req.body;
    var pid = req.params.id;
    fpd.userid = pid;
    models.routinesup.create(fpd)
    .then(function(result){
        console.log(result);
        return res.status(200).json({
            status: "success",
            message: "Successfully filled the details!!",
            data: result,
        });
    }).catch(error => {
        console.log(error);
        return res.status(400).json({
            status: "failure",
            message: "Some error ocurred!",
            data: null,
        });
    });
}

exports.reg8p = function(req, res){
    var fpd = req.body;
    var pid = req.params.id;
    fpd.userid = pid;
    models.geoorigin.create(fpd)
    .then(function(result){
        console.log(result);
        return res.status(200).json({
            status: "success",
            message: "Successfully filled the details!!",
            data: result,
        });
    }).catch(error => {
        console.log(error);
        return res.status(400).json({
            status: "failure",
            message: "Some error ocurred!",
            data: null,
        });
    });
}

exports.reg9p = function(req, res){
    var fpd = req.body;
    var pid = req.params.id;
    fpd.userid = pid;
    models.buyproblem.create(fpd)
    .then(function(result){
        console.log(result);
        return res.status(200).json({
            status: "success",
            message: "Successfully filled the details!!",
            data: result,
        });
    }).catch(error => {
        console.log(error);
        return res.status(400).json({
            status: "failure",
            message: "Some error ocurred!",
            data: null,
        });
    });
}

exports.reg10p = function(req, res){
    var fpd = req.body;
    var pid = req.params.id;
    fpd.userid = pid;
    models.buyfutureplant.create(fpd)
    .then(function(result){
        console.log(result);
        return res.status(200).json({
            status: "success",
            message: "Successfully filled the details!!",
            data: result,
        });
    }).catch(error => {
        console.log(error);
        return res.status(400).json({
            status: "failure",
            message: "Some error ocurred!",
            data: null,
        });
    });
}

exports.reg11p = function(req, res){
    var fpd = req.body;
    var pid = req.params.id;
    fpd.userid = pid;
    models.nearbybuyer.create(fpd)
    .then(function(result){
        console.log(result);
        return res.status(200).json({
            status: "success",
            message: "Successfully filled the details!!",
            data: result,
        });
    }).catch(error => {
        console.log(error);
        return res.status(400).json({
            status: "failure",
            message: "Some error ocurred!",
            data: null,
        });
    });
}

exports.reg12p = function(req, res){
    var fpd = req.body;
    var pid = req.params.id;
    fpd.userid = pid;
    models.buyerdof.create(fpd)
    .then(function(result){
        console.log(result);
        return res.status(200).json({
            status: "success",
            message: "Successfully filled the details!!",
            data: result,
        });
    }).catch(error => {
        console.log(error);
        return res.status(400).json({
            status: "failure",
            message: "Some error ocurred!",
            data: null,
        });
    });
}

exports.memB = function(req, res){
    var memb = req.body;
    var pid = req.params.id;
    memb.userid = pid;
    models.membership.create(memb)
    .then(function(result){
        console.log(result);
        models.user.findByPk(pid).then(user=>{
            user.membership_id=result.ms_id;
            user.save();
            console.log(user);
        });
        return res.status(200).json({
            status: "success",
            message: "Successfully given the membership to buyer!!",
            data: result,
        });
    }).catch(error => {
        console.log(error);
        return res.status(400).json({
            status: "failure",
            message: "Some error ocurred!",
            data: null,
        });
    });
}