const  obtenerConexion  = require('../libs/postgres');
const pool = require('../libs/postgres');
class EquiposService {

    constructor(){
        this.pool = pool;
        this.pool.on('error', (err) => console.log(err));
    }

    async obtenerEquipos(){
        const query = "select * from tbl_equipos";
        const respuesta = await pool.query(query);
        return respuesta.rows;
    }

    async obtenerInfoEquipo(id_equipo){
        const query = "select * from tbl_equipos where id_equipo = " + id_equipo;
        const respuesta = await pool.query(query);
        return respuesta.rows;
    }

    async obtenerLogoEquipo(id_equipo){
        const query = "select logo from tbl_equipos where id_equipo = " + id_equipo;
        const respuesta = await pool.query(query);
        return respuesta.rows;
    }
}

module.exports = EquiposService;
