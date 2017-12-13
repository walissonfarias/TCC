module.exports = (req, res) => {
    if (!req.user) {
        return res.render('colaborador/index', {
            title: 'Colaborador',
            layout: 'layouts/main',
            user: req.user || undefined
        })
    }
}