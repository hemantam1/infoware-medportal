var router = require('express').Router();
var index = require('../controllers/farmreg.controller.js');

router.get('/register/farmer/:id', index.reg);

router.get('/register/farmer/personalDetails/:id',index.pd);

// router.post('/register/farmer/personalDetails/:id', index.pdp);

// router.get('/register/farmer/1/:id',index.reg1);

router.post('/register/farmer/1/:id', index.reg1p);

router.get('/register/farmer/2/:id',index.reg2);

router.post('/register/farmer/2/:id', index.reg2p);


router.get('/register/farmer/3/:id', index.reg3);

router.post('/register/farmer/3/:id',index.reg3p);

router.get('/register/farmer/4/:id', index.reg4);

router.post('/register/farmer/4/:id', index.reg4p);

router.get('/register/farmer/5/:id', index.reg5);

router.post('/register/farmer/5/:id', index.reg5p);

router.get('/register/farmer/6/:id', index.reg6);

router.post('/register/farmer/6/:id', index.reg6p);


router.get('/register/farmer/7/:id', index.reg7);

router.post('/register/farmer/7/:id', index.reg7p);


router.get('/register/farmer/8/:id', index.reg8);

router.post('/register/farmer/8/:id', index.reg8p);


router.get('/register/farmer/9/:id',index.reg9);

router.post('/register/farmer/9/:id', index.reg9p);

router.get('/register/farmer/10/:id', index.reg10);

router.post('/register/farmer/10/:id', index.reg10p);

router.post('/membership/farmer/:id', index.memF);


module.exports = router;