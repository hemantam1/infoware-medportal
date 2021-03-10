var models = require('../models');
var exports = module.exports = {}

exports.reg = function(req, res){
    res.render('farmer_registration.ejs', {farmerid : req.params.id});
}

exports.pd =  function(req, res){
    res.render('farmer_register_personalDetails.ejs', {pid: req.params.id});
}

exports.reg1 =  function(req, res){
    res.render('farmer_register1.ejs', {pid: req.params.id});
}

exports.reg2 =  function(req, res){
    res.render('farmer_register2.ejs', {pid: req.params.id});
}

exports.reg3 = function(req, res){
    res.render('farmer_register3.ejs', {pid: req.params.id});
}

exports.reg4 = function(req, res){
    res.render('farmer_register4.ejs', {pid: req.params.id});
}

exports.reg5 = function(req, res){
    res.render('farmer_register5.ejs', {pid: req.params.id});
}

exports.reg6 = function(req, res){
    res.render('farmer_register6.ejs', {pid: req.params.id});
}

exports.reg7 = function(req, res){
    res.render('farmer_register7.ejs', {pid: req.params.id});
}

exports.reg8 = function(req, res){
    res.render('farmer_register8.ejs', {pid: req.params.id});
}

exports.reg9 =  function(req, res){
    res.render('farmer_register9.ejs', {pid: req.params.id});
}

exports.reg10 = function(req, res){
    res.render('farmer_register10.ejs', {pid: req.params.id});
}

exports.reg1p = function (req, res){
    // console.log(req.body);
    var fpd = req.body;
    var pid = req.params.id;
    fpd.userid = pid;
    
    // var array=[];
    // models.fpdetails.findAll({
    //     where: {}
    // }).then(result=>{
    //     array=result;
    //     console.log(array);
    //     for(var i=0;i<array.length;i++){
    //         if(array[i].userid==pid){
    //             return res.status(400).json({
    //                 status: "failure",
    //                 message: "User has already filled this form!!",
    //             });
    //         }
    //     }

    //     models.fpdetails.create(fpd)
    //     .then(function(result){
    //         console.log(result);
    //         return res.status(200).json({
    //             status: "success",
    //             message: "Successfully filled the details!!",
    //             data: result,
    //         });
    //     }).catch(error => {
    //         console.log(error);
    //         return res.status(400).json({
    //             status: "failure",
    //             message: "Some error ocurred!",
    //             data: null,
    //         });
    //     });

    // }).catch(error=>{
    //     console.log(error);
    //     return res.status(400).json({
    //         status: "failure",
    //         message: "Some error ocurred!",
    //         data: null,
    //     });
    // })
    
    models.fpdetails.create(fpd)
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
    // const obj={
    //     list_of_all_records_entered_by_farmer: req.body.list_of_all_records_entered_by_farmer,
    //     userid: pid
    // }
    models.plantg.create(fpd)
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

exports.reg3p =  function(req, res){
    // console.log(req.body);
    // for (var va in req.body.va) {
    //     if (req.body.va) {
    //       items = req.body.va;
    //       va = JSON.stringify(items).replace(/]|[[]|"/g, '',)
    //     }
    //   }
    var fpd = req.body;
    var pid = req.params.id;
    fpd.userid = pid;
    // const obj={
    //     yes_or_no: req.body.yes_or_no,
    //     list_of_all_records_entered_by_farmer: req.body.list_of_all_records_entered_by_farmer,
    //     userid: pid
    // }
      models.valueadd.create(fpd)
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

exports.reg4p = function(req, res){
    var fpd = req.body;
    var pid = req.params.id;
    fpd.userid = pid;
    models.organic.create(fpd)
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

exports.reg5p = function(req, res){
    var fpd = req.body;
    var pid = req.params.id;
    fpd.userid = pid;
    models.farmbuyer.create(fpd)
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
    models.problem.create(fpd)
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
    // console.log(req.body);
    var fpd = req.body;
    var pid = req.params.id;
    fpd.userid = pid;
    models.experiment.create(fpd)
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
    models.futureplant.create(fpd)
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
    models.nearbyfarmer.create(fpd)
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
    models.dof.create(fpd)
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

exports.memF = function(req, res){
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
            message: "Successfully given the membership to farmer!!",
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
    // res.redirect('/');
}