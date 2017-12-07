const router = require('express').Router()
const passport = require('../config/auth')
const { Game } = require('../models')

const authenticate = passport.authorize('jwt', { session: false })

module.exports = io => {
  // all existing routes here!

  return router
}
