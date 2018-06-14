const express = require('express')
const router = express.Router()
//adicionando o firebase
var admin = require('firebase-admin');

const Customer = require('./../schemas/customer')
const isLoggedIn = require('./../services/account/loggedin')

router.get('/', require('./../services/account/index'))

router.get('/new', (req, res) => {
	const customer = new Customer()
	
	return res.render('account/new', {
		title: 'Account - Register',
		customer: customer,
		layout: 'layouts/main',
		user: req.user || undefined
	})
})
// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
	apiKey: "<API_KEY>",
	authDomain: "<PROJECT_ID>.firebaseapp.com",
	databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
	storageBucket: "<BUCKET>.appspot.com",
};
firebase.initializeApp(config);
router.post('/', require('./../services/account/create'))
router.post('/login', require('./../services/account/login'))
router.get('/logout', require('./../services/account/logout'))
router.get('/:slug', isLoggedIn, require('./../services/account/show'))
router.put('/:id', isLoggedIn, require('./../services/account/update'))
module.exports = router