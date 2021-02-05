const express = require('express');
const artistRoutes = express.Router();

// Require Artist model in our routes module
let Artist = require('../models/artist.model');

// Defined store route
artistRoutes.route('/add').post(function (req, res) {
  console.log('req.body',req.body);
  let artist = new Artist(req.body);
  artist.save()
    .then(artist => {
      res.status(200).json({'Artist': 'Artist has been added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});



module.exports = artistRoutes;