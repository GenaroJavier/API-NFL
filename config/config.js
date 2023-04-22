require('dotenv').config();

const config = {
    dbPassword: process.env.DB_PASSWORD,
}

module.exports = { config };
