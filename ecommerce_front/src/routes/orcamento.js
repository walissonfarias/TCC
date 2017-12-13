const express = require('express')
const router = express.Router()

const Customer = require('./../schemas/customer')
const isLoggedIn = require('./../services/account/loggedin')

const Orcamento = require('./../schemas/orcamento')

router.get('/new', isLoggedIn, (req, res) => {
	const orcamento = new Orcamento()
	
	return res.render('orcamento/new', {
		title: 'Orcamento - Register',
		orcamento: orcamento,
		layout: 'layouts/main',
		user: req.user || undefined
	})
})

router.post('/', isLoggedIn, require('./../services/orcamento/create'))
router.get('/:slug', isLoggedIn, require('./../services/orcamento/show'))
module.exports = router