// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const searchRouter = require('./search.js');
const venuesRouter = require('./venues.js');
const reviewsRouter = require('./review.js');
const reservationsRouter = require('./reservation.js');
const userReviewsRouter = require('./userReviews.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/search', searchRouter);

router.use('/venues', venuesRouter);

router.use('/reservations', reservationsRouter);

router.use('/reviews', reviewsRouter);

router.use('/userReviews/', userReviewsRouter)

module.exports = router;
