var router = require('express').Router();
var index = require('../controllers/buyreg.controller.js');

app.get('/register/buyer/:id', );


app.get('/register/buyer/1/:id', function(req, res){
    res.render('buyer_register1.ejs', {pid : req.params.id});
});

app.post('/register/buyer/1/:id', function(req, res){
    console.log(req.body);
    var sqlquerypd = 'INSERT INTO buyerPDetails SET ?, buyer_id = ?'
    mysqlConnection.query(sqlquerypd, [req.body, req.params.id], function(error, result){
        if(error)console.log(error);
        if(!error) console.log('Record Added');
    });
    res.redirect('/register/buyer/2/' + req.params.id);
});

app.get('/register/buyer/2/:id', function(req, res){
    res.render('buyer_register2.ejs', {pid:req.params.id});
});

app.post('/register/buyer/2/:id', function(req, res){
    console.log(req.body);
    var sqlquerypd = 'INSERT INTO buyerCDetails SET ?, buyer_id = ?'
    mysqlConnection.query(sqlquerypd, [req.body, req.params.id], function(error, result){
        if(error)console.log(error);
        if(!error) console.log('Record Added');
    });
    res.redirect('/register/buyer/3/' + req.params.id);
});

app.get('/register/buyer/3/:id', function(req, res){
    res.render('buyer_register3.ejs', {pid : req.params.id});
});

app.post('/register/buyer/3/:id', function(req, res){
    console.log(req.body);
    var sqlquerypd = 'INSERT INTO plantused SET ?, buyer_id = ?'
    mysqlConnection.query(sqlquerypd, [req.body, req.params.id], function(error, result){
        if(error)console.log(error);
        if(!error) console.log('Record Added');
    });
    res.redirect('/register/buyer/4/' + req.params.id);
});

app.get('/register/buyer/4/:id', function(req, res){
    res.render('buyer_register4.ejs', {pid:req.params.id});
});

app.post('/register/buyer/4/:id', function(req, res){
    console.log(req.body);
    for (var ptest in req.body.ptest) {
        if (req.body.ptest) {
          items = req.body.ptest;
          ptest = JSON.stringify(items).replace(/]|[[]|"/g, '',)
        }
      }
    var sqlquerypd = 'INSERT INTO providetest (ptest, other, buyer_id) values (?, ?, ?)'
    mysqlConnection.query(sqlquerypd, [ptest, req.body.other, req.params.id], function(error, result){
        if(error)console.log(error);
        if(!error) console.log('RecordAdded');
    });
    res.redirect('/register/buyer/5/'+ req.params.id);
});

app.get('/register/buyer/5/:id', function(req, res){
    res.render('buyer_register5.ejs', {pid : req.params.id});
});

app.post('/register/buyer/5/:id', function(req, res){
    console.log(req.body);
    for (var test in req.body.test) {
        if (req.body.test) {
          items = req.body.test;
          test = JSON.stringify(items).replace(/]|[[]|"/g, '',)
        }
      }
    var sqlquerypd = 'INSERT INTO test (test, other, buyer_id) values (?, ?, ?)'
    mysqlConnection.query(sqlquerypd, [test, req.body.other, req.params.id], function(error, result){
        if(error)console.log(error);
        if(!error) console.log('Record Added');
    });
    res.redirect('/register/buyer/6/' + req.params.id);
});

app.get('/register/buyer/6/:id', function(req, res){
    res.render('buyer_register6.ejs', {pid : req.params.id});
});

app.post('/register/buyer/6/:id', function(req, res){
    console.log(req.body);
    var sqlquerypd = 'INSERT INTO lab SET ?, buyer_id = ?'
    mysqlConnection.query(sqlquerypd, [req.body, req.params.id], function(error, result){
        if(error)console.log(error);
        if(!error) console.log('Record Added');
    });
    res.redirect('/register/buyer/7/' + req.params.id);
});

app.get('/register/buyer/7/:id', function(req, res){
    res.render('buyer_register7.ejs', {pid : req.params.id});
});

app.post('/register/buyer/7/:id', function(req, res){
    console.log(req.body);
    var sqlquerypd = 'INSERT INTO routinesup SET ?, buyer_id = ?'
    mysqlConnection.query(sqlquerypd, [req.body, req.params.id], function(error, result){
        if(error)console.log(error);
        if(!error) console.log('Record Added');
    });
    res.redirect('/register/buyer/8/' + req.params.id);
});

app.get('/register/buyer/8/:id', function(req, res){
    res.render('buyer_register8.ejs', {pid : req.params.id});
});

app.post('/register/buyer/8/:id', function(req, res){
    console.log(req.body);
    var sqlquerypd = 'INSERT INTO geoorigin SET ?, buyer_id = ?'
    mysqlConnection.query(sqlquerypd, [req.body, req.params.id], function(error, result){
        if(error)console.log(error);
        if(!error) console.log('Record Added');
    });
    res.redirect('/register/buyer/9/' + req.params.id);
});



app.get('/register/buyer/9/:id', function(req, res){
    res.render('buyer_register9.ejs', {pid : req.params.id});
});

app.post('/register/buyer/9/:id', function(req, res){
    console.log(req.body);
    var sqlquerypd = 'INSERT INTO buyproblem SET ?, buyer_id = ?'
    mysqlConnection.query(sqlquerypd, [req.body, req.params.id], function(error, result){
        if(error)console.log(error);
        if(!error) console.log('Record Added');
    });
    res.redirect('/register/buyer/10/' + req.params.id);
});


app.get('/register/buyer/10/:id', function(req, res){
    res.render('buyer_register10.ejs', {pid : req.params.id});
});


app.post('/register/buyer/10/:id', function(req, res){
    console.log(req.body);
    var sqlquerypd = 'INSERT INTO buyfutureplant SET ?, buyer_id = ?'
    mysqlConnection.query(sqlquerypd, [req.body, req.params.id], function(error, result){
        if(error)console.log(error);
        if(!error) console.log('Record Added');
    });
    res.redirect('/register/buyer/11/' + req.params.id);
});


app.get('/register/buyer/11/:id', function(req, res){
    res.render('buyer_register11.ejs', {pid : req.params.id});
});

app.post('/register/buyer/11/:id', function(req, res){
    console.log(req.body);
    var sqlquerypd = 'INSERT INTO nearbyBuyer SET ?, buyer_id = ?'
    mysqlConnection.query(sqlquerypd, [req.body, req.params.id], function(error, result){
        if(error)console.log(error);
        if(!error) console.log('Record Added');
    });
    res.redirect('/register/buyer/12/' + req.params.id);
});

app.get('/register/buyer/12/:id', function(req, res){
    res.render('buyer_register12.ejs', {pid : req.params.id});
});

app.post('/register/buyer/12/:id', function(req, res){
    console.log(req.body);
    var sqlquerypd = 'INSERT INTO buyerdof SET ?, buyer_id = ?'
    mysqlConnection.query(sqlquerypd, [req.body, req.params.id], function(error, result){
        if(error)console.log(error);
        if(!error) console.log('Record Added');
    });
    res.redirect('/');
});

module.exports = router;