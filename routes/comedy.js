const express = require('express')
const router = express.Router()

router.get('/comedy', (req, res) => {
    res.render('pages/comedy', {
        firstName: req.session.firstname
    })
})


module.exports = router