const Orcamento = require('./../../schemas/orcamento')
const slugfy = require('./../../utils/slugfy')

module.exports = (req, res) => {
	let slug = slugfy(req.body.tipo)

	let data = {
		tipo : req.body.tipo,
		descrissao : req.body.descrissao,
		instituicao : req.body.instituicao,
		curso : req.body.curso,
		arte_uniforme : req.body.arte_uniforme
	}
	Orcamento.register(data, (error, orcamento) => {
		if (error) {
			return res.redirect('/')
		}

		return res.redirect('/orcamento')
	})
}