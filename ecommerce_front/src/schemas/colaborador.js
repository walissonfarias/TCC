const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const Colaborador = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	descrissao: {
		type: String,
		required: true
	},
	slug: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String
	},
	id: {
		type: String,
		required: true
	},
	telefone: {
		type: String,
		default: ''
	},
	celular: {
		type: String,
		default: ''
	},
	address: {
		rua: {
			type: String,
			required: true
		},
		number: {
			type: Number,
			required: true
		},
		cidade: {
			type: String,
			required: true
		},
		bairro: {
			type: String,
			required: true
		}
	}
})

Colaborador.plugin(passportLocalMongoose, {usernameField: 'email'})

module.exports = mongoose.model('Colaborador', Colaborador)