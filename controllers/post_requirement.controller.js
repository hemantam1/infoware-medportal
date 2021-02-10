var models = require('../models');
var exports = module.exports = {}

exports.post_farmers = function(req, res){
    var fpd = req.body;
    var pid = req.params.id;
    fpd.userid = pid;
    models.postrequirementfarmer.create(fpd)
    .then(function(result){
        console.log(result);
        return res.status(200).json({
            status: "success",
            message: "Successfully posted the item by farmer!!",
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

exports.post_buyers = function(req, res){
    var fpd = req.body;
    var pid = req.params.id;
    fpd.userid = pid;
    models.postrequirementbuyer.create(fpd)
    .then(function(result){
        console.log(result);
        return res.status(200).json({
            status: "success",
            message: "Successfully posted the requirement by Buyer. You will get to know soon!!",
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