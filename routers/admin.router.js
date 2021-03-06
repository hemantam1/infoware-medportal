var router = require('express').Router();
var index = require('../controllers/admin.controller.js');

router.get('/admin/all/buyers', index.allBuyers);

router.get('/admin/all/farmers', index.allFarmers);

router.get('/admin/all/plants', index.allPlants);

router.get('/admin/all/memberships', index.allMemberships);

module.exports = router;