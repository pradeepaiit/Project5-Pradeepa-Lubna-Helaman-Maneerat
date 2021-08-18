const express = require("express")
const router = express.Router()
const bcrypt = require('bcryptjs')
const saltRounds = 10
const db = require("../database")
const { redirectToHome } = require("../middleware")

router.get("/", redirectToHome, (req, res) => {
	res.render("pages/login")
})

router.post("/", (req, res) => {
	db.oneOrNone("SELECT * FROM users WHERE email_address = $1;", [req.body.email])
		.then((result) => {

			if (!result) {
				res.redirect("/login?message=You're email is not registered in our system!")
			} else {
				const hash = result.password
				bcrypt.compare(req.body.password, hash, function (err, bcryptResult) {
					if (bcryptResult) {
						req.session.firstname = result.firstname
						req.session.user_id = result.id
						req.session.email = result.email
						res.redirect("/")
					} else {
						res.redirect("/login?message=Please enter correct password.")
					}
				})
			}
		})
		.catch((err) => {
			res.redirect(`/login?message=${err}`)
		})
})

module.exports = router