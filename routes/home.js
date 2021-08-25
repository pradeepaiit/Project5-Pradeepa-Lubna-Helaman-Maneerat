const express = require('express')
const router = express.Router()
const db = require('../database')

router.get('/', (req, res) => {
  res.render('pages/home', {
    firstName: req.session.firstname
  })
})

router.get('/rating/:id', (req, res) => {
  db.oneOrNone('SELECT COUNT(rating), AVG(rating)::numeric(10, 1) FROM ratings WHERE movie_id = $1;', [req.params.id])
  .then((average) => {
    res.send(average);
  });
})


module.exports = router