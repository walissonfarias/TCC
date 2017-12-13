module.exports = (req, res) => {
    if (!req.user) {
        return res.render('orcamento/index', {
            title: 'Orcamento',
            layout: 'layouts/main',
            user: req.user || undefined
        })
    }
}