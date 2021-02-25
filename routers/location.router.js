var router = require('express').Router();
var index = require('../controllers/location.controller.js');

router.get('/location/get/all/states', index.allStates);

router.get('/location/get/all/districts', index.allDistricts);

router.get('/location/get/all/talukas', index.allTalukas);

router.get('/location/get/all/areas', index.allAreas);

router.get('/location/get/all/pincode', index.allPincode);

router.get('/location/state/:stateId/get/districts', index.getDistrictsOfState);

router.get('/location/district/:districtId/get/talukas', index.getTalukasOfDistrict);

router.get('/location/taluka/:talukaId/get/areas', index.getAreasOfTaluka);

router.get('/location/area/:areaId/get/pincode', index.getPincodeOfArea);


module.exports = router;