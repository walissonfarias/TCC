const express = require('express')
const router = express.Router()

const Colaborador = require('./../schemas/colaborador')

router.get('/', require('./../services/colaborador/index'))

router.get('/new', (req, res) => {
	const colaborador = new Colaborador()
	
	return res.render('colaborador/new', {
		title: 'Account - Register',
		colaborador: colaborador,
		layout: 'layouts/main',
		user: req.user || undefined
	})
})

router.post('/', require('./../services/colaborador/create'))
router.get('/:slug', require('./../services/colaborador/show'))
module.exports = router