const express = require('express')
const router = express.Router()

const isLoggedIn = require('./../services/auth/loggedin')
//isLoggedIn
router.get('/', require('./../services/main/'))

module.exports = router