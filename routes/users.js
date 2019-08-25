const express = require('express')
const router = require('express-promise-router')()

const { validateBody, schemas } = require('../helpers/routeHelpers')

const UserController = require('../controllers/users')

router.route('/signup')
    .post(validateBody(schemas.authSchema), UserController.signUp)

router.route('/signin')
    .post(UserController.signIn)

router.route('/secret')
    .get(UserController.secret)


module.exports = router