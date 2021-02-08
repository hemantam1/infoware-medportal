var router = require('express').Router();
var index = require('../controllers/admin.controller.js');

router.get('/admin/all/buyers', index.allBuyers);

router.get('/admin/all/farmers', index.allFarmers);

module.exports = router;