var router = require('express').Router();
var index = require('../controllers/post_requirement.controller.js');

router.post('/post/farmer/:id', index.post_farmers);

module.exports = router;