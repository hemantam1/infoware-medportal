var router = require('express').Router();
var index = require('../controllers/post_requirement.controller.js');

router.post('/post/farmer/:id', index.post_farmers);

router.post('/post/buyer/:id', index.post_buyers);

module.exports = router;