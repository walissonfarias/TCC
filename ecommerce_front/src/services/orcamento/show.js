const Customer = require('./../../schemas/orcamento')

module.exports = (req, res) => {
    Orcamento
        .findOne({
            slug: req.params.slug
        })
        .then((orcamento) => {
            if (!orcamento) {
                return res.redirect('/')
            }

            orcamento = orcamento.toObject()
            
            return res.render('orcamento/my-orcamento', {
                title: 'My Orcamento',
                orcamento: orcamento,
                layout: 'layouts/main',
                user: req.user || undefined
            })
        })
        .catch((error) => {
            return '';
        })
}