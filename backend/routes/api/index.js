// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const searchRouter = require('./search.js');
const venuesRouter = require('./venues.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/search', searchRouter);

router.use('/venues', venuesRouter);

module.exports = router;
