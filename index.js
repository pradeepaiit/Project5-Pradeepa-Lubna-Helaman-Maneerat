require('dotenv').config()
const express = require('express')
// might need db connection
const ejs = require('ejs')
//const db = require('./database')
const app = express()
const PORT = process.env.PORT || 5000



// body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// static folder
app.use(express.static('public'))

// view engine
app.set('view engine', 'ejs')
app.set('views', './views')

// middleware - routes
const homeRouter = require('./routes/home')
app.use('/', homeRouter)

//login route
const loginRouter = require("./routes/login")
app.use("/login", loginRouter)

//signup route
const signupRouter = require("./routes/signup")
app.use("/signup", signupRouter)

app.listen(PORT, () => {
  console.log(`App is listening to: http://localhost:${PORT}`)
})