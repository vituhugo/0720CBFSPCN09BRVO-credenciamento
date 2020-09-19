let UsuarioController = require('../controllers/UsuarioController');
var middleware_captcha = require('../middleware/capcha');
var express = require('express');
var router = express.Router();


router.get('/cadastro', function(req, res, next) {
    //...logica
    
    next();
}, function(req, res, next) {
    if(esta_logado) {
        next();
    } {
        return res.send("VC NÃO ESTÁ LOGADO!");
    }
},UsuarioController.cadastro);

router.post('/guardar', UsuarioController.guardar);

module.exports = router;
