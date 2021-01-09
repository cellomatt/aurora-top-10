const express = require('express');
const router = express.Router();
const db = require("../db/models");
const {
    Question,
    User,
    Topic
} = db;
const {
    asyncHandler
} = require('../utils/utils');

/* GET home page. */
router.get('/', asyncHandler(async (req, res) => {
    const questions = await Question.findAll({
        include: User,
        order: [
            ['createdAt', 'DESC']
        ],
     });
    const topics = await Topic.findAll()

    res.render('home', {
        title: 'Home',
        questions,
        topics
    });
}));

module.exports = router;
