let path = require('path');

let fs = require('fs');

let bcrypt = require('bcrypt');

module.exports = {
    cadastro: function(req, res, next) {
        res.render('usuario/cadastro');
    },
    guardar: function(req, res, next) {
        // bcrypt.hash("123456", 10, function(err, hash) {})
        // resultado: $%@%@MR@$J@$$J%@$RKFMKM#$K!M!M#!L$%@%@MR@$J@$$J%@$RKFMKM#$K!M!M#!L
        
        let json_usuarios = fs.readFileSync(path.join(__dirname, '..','data', 'usuarios.json'));
        let usuarios = JSON.parse(json_usuarios);

        let password_hashed = bcrypt.hashSync(req.body.senha, 10);

        usuarios.push({
            nome: req.body.nome,
            email: req.body.email,
            senha: password_hashed,
            tipo: req.body.tipo,
            sexo: req.body.sexo,
        });

        let novo_json_usuarios = JSON.stringify(usuarios)
        fs.writeFileSync(path.join(__dirname, '..','data', 'usuarios.json'), novo_json_usuarios);

        res.send('Salvou!');
        // MODULO path
        // responsável por montar caminho de arquivos.
        // path.join("usuario", "cadastro");

        // 
        // JSON.parse 
        // STRING PARA OBJETO JS
        //
        // JSON.stringfy
        // CONVERTE OBJETO para String

        // Para criptografar a senha utilizar a função bcrypt(VALOR_DA_SENHA)

        // // LE DADOS DE UM ARQUIVO.
        // fs.readFileSync('CAMINHO_DO_ARQUIVO');

        // // GRAVA DADOS EM UM ARQUIVO
        // fs.writeFileSync('CAMINHO_DO_ARQUIVO', "CONTEUDO EM STRING");
    }
}