var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcrypt');

router.post('/', (req, res, next) => {
    knex('users')
        .where('username', req.body.username)
        .first()
        .then((user) => {
            var passwordMatch = bcrypt.compareSync(req.body.password, user.hash)
            if (passwordMatch == false) {
              const error = {
                message: 'Bad email or password! Please try again.'
              }
              res.json(error)
            } else {
                res.json(user)
            }
        })
});

module.exports = router;
