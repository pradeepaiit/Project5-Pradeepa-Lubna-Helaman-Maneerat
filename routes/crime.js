const express = require('express')
const router = express.Router()

router.get('/crime', (req, res) => {
  res.render('pages/crime', {
    firstName: req.session.firstname
  })
})


module.exports = router