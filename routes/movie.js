const express = require('express')
const db = require('../database')
const router = express.Router()
router.get('/:id', (req, res) => {
    res.render('pages/movie', {
        movie_id: req.params.id        

    })
})
router.post('/:id', (req,res) =>
{
    db.none('INSERT INTO ratings (movie_id, rating) VALUES ($1, $2);', [req.params.id, req.body.rating])
    .then(()=>{
        res.send('Route is successful')
    })
    .catch(err => {
        console.log(err)
        res.end()
    })
})

module.exports = router