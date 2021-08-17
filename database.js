//const pgp = require('pg-promise')();
//const username = process.env.PG_USER || "postgres"
//const password = process.env.PG_PASSWORD
//const host = process.env.PG_HOST ||'localhost'
//const port = process.env.PG_PORT || 5432
//const database = 'movieclub'
//const connection = `postgres://${username}:${password}@${host}:${port}/${database}`
//const db = pgp (connection)
//module.exports = db
const pgp = require('pg-promise')()

const connection = `postgres://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.DATABASE}`

const db = pgp(connection)

module.exports = db