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
    const questions = await Question.findAll({ include: User });
    const topics = await Topic.findAll()
    // const userId = await auth.userId
    const uId = req.session.auth.userId

    res.render('home', {
        title: 'Home',
        questions,
        topics,
        uId
    });
}));

router.post(`/delete/:id`, asyncHandler(async (req, res) => {
    const question = await Question.findByPk(req.params.id)
    console.log("---------------------------" + question.title)

    await question.destroy();


    res.redirect('/')
}));

module.exports = router;
