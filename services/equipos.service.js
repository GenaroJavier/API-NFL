const  obtenerConexion  = require('../libs/postgres');
const sequelize = require('../libs/sequelize');
class EquiposService {

    async obtenerEquipos(){
        const query = "select * from tbl_equipos";
        const [data] = await sequelize.query(query);
        return data;
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
