//Esta libreria nos ayuda a utilizar las variables de entorno
require('dotenv').config();

const config = {
    dbPassword: process.env.DB_PASSWORD,
}

module.exports = { config };
