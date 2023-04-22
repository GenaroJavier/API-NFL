const { Pool } = require("pg");
const { config } = require('../config/config');

const pass = encodeURIComponent(config.dbPassword);
const Uri = `postgres://postgres:${pass}@db.cfdcivungkitcfiphwrz.supabase.co:6543/postgres`;

const pool = new Pool({ connectionString: Uri });

module.exports = pool;
