const { Sequelize } = require('../node_modules/sequelize');

const { config } = require('../config/config');

const pass = encodeURIComponent(config.dbPassword);
const Uri = `postgres://postgres:${pass}@db.cfdcivungkitcfiphwrz.supabase.co:6543/postgres`;

const sequelize = new Sequelize(Uri, {
    dialect: 'postgres',
    logging: true,
});

module.exports = sequelize;
