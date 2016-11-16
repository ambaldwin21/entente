var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcrypt');
var geocoder = require('geocoder')


router.post('/', function(req, res, next) {
  console.log(req.body);
  knex('users')
    .where('email', req.body.email)
    .then(function(user) {
      if (user.length === 0) {
        const hashed_password = bcrypt.hashSync(req.body.password, 8);
        const zip = req.body.location;
        geocoder.geocode(zip, function(err, data) {
          var lat = data.results[0].geometry.location.lat
          var long = data.results[0].geometry.location.lng
          let newUser = {
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            Lat: lat,
            Long: long,
            hash: hashed_password
          }
          knex('users')
            .insert(newUser)
            .returning('*')
            .then(function(insertedUser) {
              console.log('insertedUser', insertedUser);
              res.json(insertedUser)
            })
        })
      } else {
        const error = {
          message: 'Already a user, please login.'
        }
        console.log(error);
        res.json([error])
      }
    })
})



module.exports = router;
