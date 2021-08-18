require('dotenv').config()
const express = require('express')
// might need db connection
const ejs = require('ejs')
const db = require('./database')
const app = express()

// body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// view engine
app.set('view engine', 'ejs')
app.set('views', './views')

// static folder
app.use(express.static('public'))

//Session
const session = require("express-session")
const twohours = 1000 * 60 * 60 * 2
app.use(
  session({
    name: "session_id",
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false /* Forces a session that is "uninitialized" to be saved to the store.  */,
    cookie: { maxAge: twohours },
    resave: false /* Forces the session to be saved back to the session store, even if the session was never modified during the request. */,
  })
)

//Port specified
const PORT = process.env.PORT || 8000


// middleware - routes
const homeRouter = require('./routes/home')
app.use('/', homeRouter)

//login route
const loginRouter = require("./routes/login")
app.use("/login", loginRouter)

//signup route
const signupRouter = require("./routes/signup")
app.use("/signup", signupRouter)

//logout route
const logoutRouter = require("./routes/logout")
app.use("/logout", logoutRouter)

//action route
const crimeRouter = require("./routes/crime")
app.use("/", crimeRouter)
//thriller route
const thrillerRouter = require("./routes/thriller")
app.use("/", thrillerRouter)
//comedy route
const comedyRouter = require("./routes/comedy")
app.use("/", comedyRouter)

app.listen(PORT, () => {
  console.log(`App is listening to: http://localhost:${PORT}`)
})