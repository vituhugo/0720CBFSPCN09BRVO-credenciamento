let UsuarioController = require('../controllers/UsuarioController');

var express = require('express');
var router = express.Router();


router.get('/cadastro', UsuarioController.cadastro);

router.post('/guardar', UsuarioController.guardar);

module.exports = router;
