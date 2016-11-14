var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.post('/', (req, res, next) => {

    let oneRating = {
        user_id: req.body.user_id,
        issue_id: 1,
        rating: req.body.rating1
    }

    let twoRating = {
        user_id: req.body.user_id,
        issue_id: 2,
        rating: req.body.rating2
    }

    let threeRating = {
        user_id: req.body.user_id,
        issue_id: 3,
        rating: req.body.rating3
    }

    knex('ratings')
        .insert([oneRating, twoRating, threeRating])
        .then(() => {
            res.send('Success!');
        })

});

module.exports = router;
