var models = require('../models');
var exports = module.exports = {}

exports.reg = function(req, res){
    res.render('buyer_registration.ejs', {pid : req.params.id});
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

exports.pdp = function(req, res){
    console.log(req.body);
    var pid = req.params.id;
    var sqlquerypd = 'INSERT INTO farmerPDetails SET ?, farmer_id = ?'
    mysqlConnection.query(sqlquerypd, [req.body, pid], function(error, result){
        if(error)console.log(error);
        if(!error) console.log('Record Added');
    });
    res.redirect('/register/farmer/1/' + pid);
}

exports.reg1p = function(req, res){
    console.log(req.body);
    var sqlquerypd = 'INSERT INTO help SET ?, farmer_id = ?'
    mysqlConnection.query(sqlquerypd, [req.body, req.params.id], function(error, result){
        if(error)console.log(error);
        if(!error) console.log('Record Added');
    });
    res.redirect('/register/farmer/2/' + req.params.id);
}

exports.reg2p = function(req, res){
    console.log(req.body);
    var sqlquerypd = 'INSERT INTO plantg SET ?, farmer_id = ?'
    mysqlConnection.query(sqlquerypd, [req.body, req.params.id], function(error, result){
        if(error)console.log(error);
        if(!error) console.log('Record Added');
    });
    res.redirect('/register/farmer/3/' + req.params.id);
}

exports.reg3p =  function(req, res){
    // console.log(req.body);
    for (var va in req.body.va) {
        if (req.body.va) {
          items = req.body.va;
          va = JSON.stringify(items).replace(/]|[[]|"/g, '',)
        }
      }
    var sqlquerypd = 'INSERT INTO valueadd (va, other, farmer_id) VALUE (?, ?,?)'
    mysqlConnection.query(sqlquerypd, [va, req.body.other, req.params.id], function(error, result){
        if(error)console.log(error);
        if(!error) console.log('Record Added');
    });
    res.redirect('/register/farmer/4/' + req.params.id);
}

exports.reg4p = function(req, res){
    console.log(req.body);
    var sqlquerypd = 'INSERT INTO organic SET ?, farmer_id = ?'
    mysqlConnection.query(sqlquerypd, [req.body, req.params.id], function(error, result){
        if(error)console.log(error);
        if(!error) console.log('Record Added');
    });
    res.redirect('/register/farmer/5/' + req.params.id);
}

exports.reg5p = function(req, res){
    console.log(req.body);
    var sqlquerypd = 'INSERT INTO farmbuyer SET ?, farmer_id = ?'
    mysqlConnection.query(sqlquerypd, [req.body, req.params.id], function(error, result){
        if(error)console.log(error);
        if(!error) console.log('Record Added');
    });
    res.redirect('/register/farmer/6/' + req.params.id);
}

exports.reg6p = function(req, res){
    console.log(req.body);
    var sqlquerypd = 'INSERT INTO problem SET ?, farmer_id = ?'
    mysqlConnection.query(sqlquerypd, [req.body, req.params.id], function(error, result){
        if(error)console.log(error);
        if(!error) console.log('Record Added');
    });
    res.redirect('/register/farmer/7/' + req.params.id);
}

exports.reg7p = function(req, res){
    console.log(req.body);
    var sqlquerypd = 'INSERT INTO experiment SET ?, farmer_id = ?'
    mysqlConnection.query(sqlquerypd, [req.body, req.params.id], function(error, result){
        if(error)console.log(error);
        if(!error) console.log('Record Added');
    });
    res.redirect('/register/farmer/8/' + req.params.id);
}

exports.reg8p = function(req, res){
    console.log(req.body);
    var sqlquerypd = 'INSERT INTO futureplant SET ?, farmer_id = ?'
    mysqlConnection.query(sqlquerypd, [req.body, req.params.id], function(error, result){
        if(error)console.log(error);
        if(!error) console.log('Record Added');
    });
    res.redirect('/register/farmer/9/' + req.params.id);
}

exports.reg9p = function(req, res){
    console.log(req.body);
    var sqlquerypd = 'INSERT INTO nearbyFarmer SET ?, farmer_id = ?'
    mysqlConnection.query(sqlquerypd, [req.body, req.params.id], function(error, result){
        if(error)console.log(error);
        if(!error) console.log('Record Added');
    });
    res.redirect('/register/farmer/10/' + req.params.id);
}

exports.reg10p = function(req, res){
    console.log(req.body);
    var sqlquerypd = 'INSERT INTO dateoffilling SET ?, farmer_id = ?'
    mysqlConnection.query(sqlquerypd, [req.body, req.params.id], function(error, result){
        if(error)console.log(error);
        if(!error) console.log('Record Added');
    });
    res.redirect('/');
}