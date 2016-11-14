var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcrypt');


router.post('/', function(req, res, next) {
    knex('users')
        .where('email', req.body.email)
        .then(function(user) {
            if (user.length === 0) {
                const hashed_password = bcrypt.hashSync(req.body.password, 8)

                const newUser = {
                    name: req.body.name,
                    username: req.body.username,
                    email: req.body.email,
                    location: req.body.location,
                    hash: hashed_password
                }

                knex('users')
                    .insert(newUser, '*')
                    .then(function(user) {
                        res.json(user)
                    })
            } else {
              const error = {
                message: 'Already a user, please login.'
              }
              res.json(error)
            }

        })
})


module.exports = router;
