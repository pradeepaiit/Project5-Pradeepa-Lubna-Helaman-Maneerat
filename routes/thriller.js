const express = require('express')
const router = express.Router()

router.get('/thriller', (req, res) => {
    res.render('pages/thriller', {
        firstName: req.session.firstname
    })
})


module.exports = router