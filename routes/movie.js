const express = require('express')
const db = require('../database')
const router = express.Router()

router.get('/:id', (req, res) => {
    res.render('pages/movie', {
        movie_id: req.params.id,
        firstName: req.session.firstname

    })
})

router.post('/:id', (req, res) => {
    db.none('INSERT INTO ratings (movie_id, rating, user_id) VALUES ($1, $2, $3); UPDATE ratings SET rating=$2 WHERE movie_id=$1 AND user_id=$3; ', [req.params.id, req.body.rating, req.session.user_id])
        .then(() => {
            //Delete duplicate entries for user's rating for each movie
            db.none('DELETE FROM ratings WHERE movie_id=$1 AND user_id=$3 AND id IN (SELECT id FROM (SELECT id, ROW_NUMBER() OVER( PARTITION BY movie_id=$1 AND user_id=$3 ORDER BY id) AS row_num FROM ratings) AS t WHERE t.row_num > 1);', [req.params.id, req.body.rating, req.session.user_id])
            res.send('Route is successful')
        })
        .catch(err => {
            console.log(err)
            res.end()
        })
})

module.exports = router