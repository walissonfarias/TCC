const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const Orcamento = new mongoose.Schema({
	tipo: {
		type: String,
		required: true
	},
	desc: {
		type: String,
		default: ''
	},
	intituticao: {
		type: String,
		required: true
	},
	curso: {
		type: String,
		required: true
	},
    arte_uniforme: {
        type:String
	},
	created: {
		type: Date,
		required: true,
		default: new Date()
	}
})

Orcamento.plugin(passportLocalMongoose, {usernameField: 'instituicao'})
module.exports = mongoose.model('Orcamento', Orcamento)