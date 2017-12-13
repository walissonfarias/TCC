const Colaborador = require('./../../schemas/colaborador')
const slugfy = require('./../../utils/slugfy')

module.exports = (req, res) => {
	let slug = slugfy(req.body.name)

	let data = {
		name: req.body.name,
		descrissao: req.body.descrissao,
		email: req.body.email,
		slug: slug,
		id: req.body.cnpj,
		telefone: req.body.telefone,
		celular: req.body.celular,
		address: {
			rua: req.body.rua,
			numero: req.body.numero,
			cidade: req.body.cidade,
			bairro: req.body.bairro
		}
	}

	Colaborador.register(data, req.body.password, (error, colaborador) => {
		if (error) {
			return res.redirect('/')
		}

		return res.redirect('/colaborador')
	})
}