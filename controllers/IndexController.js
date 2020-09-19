var path = require('path');
var fs = require('fs');
var bcrypt = require('bcrypt');
module.exports = {
    index: function(req, res, next) {
        res.render('index');
    },

    home: function(req, res, next) {
        res.render('home');
    },

    logar: function(req, res) {
        const diretorio_users_json = path.join(__dirname, '..', 'data', 'usuarios.json');
        let json_usuarios = fs.readFileSync(diretorio_users_json);
        let usuarios = JSON.parse(json_usuarios);

        let usuario = usuarios.find((usuario) => {
            return usuario.email.toLowerCase() === req.body.email.toLowerCase()
        });

        if (usuario == null) {
            res.send("Usuário não encontrado.");
        } 

        console.log("body_senha", req.body.senha)
        console.log("banco_senha", usuario.senha)
        bcrypt.compare(req.body.senha, usuario.senha).then(function(err, response) {
            console.log("ERROR:", err);
            console.log("RESPONSE:", response);
        });

        res.redirect('/home');
    }
}