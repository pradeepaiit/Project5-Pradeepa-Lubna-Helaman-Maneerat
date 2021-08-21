const express = require('express')
const db = require('../database')
const router = express.Router()
router.get('/:id', (req, res) => {
    res.render('pages/movie', {
        movie_id: req.params.id        

    })
})


module.exports = router