const { Client } = require("pg");

async function obtenerConexion() {
    const cliente = new Client({
        host: "db.cfdcivungkitcfiphwrz.supabase.co",
        port: 5432,
        user: 'postgres',
        password: 'elgurudelemparrillado',
        database: 'postgres',
    });

    await cliente.connect();
    return cliente;
}

module.exports = obtenerConexion;
