const express = require('express')
const asyncHandler = require('express-async-handler');

const router = express.Router();
const Sequelize = require('sequelize');
const { Review } = require('../../db/models');

router.get('/:id', asyncHandler(async (req, res) => {
    const id  = req.params.id;
    const reviews = await Review.findAll({where: { userId: id }})
    return res.json(reviews);
}))

module.exports = router;
