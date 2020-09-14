module.exports = {
    cadastro: function(req, res, next) {
        res.render('usuario/cadastro');
    },
    guardar: function(req, res, next) {
        res.send('Salvando dados...');
    }
}