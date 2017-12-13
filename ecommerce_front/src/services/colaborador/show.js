const Customer = require('./../../schemas/colaborador')

module.exports = (req, res) => {
    Colaborador
        .findOne({
            slug: req.params.slug
        })
        .then((colaborador) => {
            if (!colaborador) {
                return res.redirect('/')
            }

            colaborador = colaborador.toObject()
            
            return res.render('colaborador/my-account', {
                title: 'My account',
                colaborador: colaborador,
                layout: 'layouts/main',
                user: req.user || undefined
            })
        })
        .catch((error) => {
            return '';
        })
}