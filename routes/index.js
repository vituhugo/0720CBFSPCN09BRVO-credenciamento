var express = require('express');
var router = express.Router();
var IndexController = require('./../controllers/IndexController');

/* GET home page. */
router.get('/', IndexController.index);

router.get('/home', IndexController.home);

router.post('/login', IndexController.logar);

module.exports = router;
