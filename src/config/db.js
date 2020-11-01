const { Pool } = require("pg")

module.exports = new Pool({
    user: "postgres",
    passoword: "1234",
    host: "localhost",
    port:5432,
    database: "GymControl"
})