const router = require('express').Router()
const event = require('../controllers/event')
const auth = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute')

router.route('/events')
  .get(event.index)
  .post(secureRoute, event.create)

router.route('/events/:id')
  .get(event.show)
  .put(secureRoute, event.update)
  .delete(secureRoute, event.delete)

router.route('/login')
  .post(auth.login)


module.exports = router