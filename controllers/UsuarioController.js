let path = require('path');

let fs = require('fs');

module.exports = {
    cadastro: function(req, res, next) {
        res.render('usuario/cadastro');
    },
    guardar: function(req, res, next) {
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

        // LE DADOS DE UM ARQUIVO.
        fs.readFileSync('CAMINHO_DO_ARQUIVO');

        // GRAVA DADOS EM UM ARQUIVO
        fs.writeFileSync('CAMINHO_DO_ARQUIVO', "CONTEUDO EM STRING");
    }
}