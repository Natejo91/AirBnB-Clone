const express = require('express')
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');

const router = express.Router();

router.get('', asyncHandler(async (req, res) => {
    const venues = await db.Venue.findAll();
    return res.json(venues);
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const venue = await db.Venue.findByPk(req.params.id)
    return res.json({venue});
}))

module.exports = router;
