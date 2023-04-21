const  obtenerConexion  = require('../libs/postgres');

class EquiposService {
    async obtenerEquipos(){
        const cliente = await obtenerConexion();
        const respuesta = await cliente.query("select * from tbl_equipos");
        return respuesta.rows;
    }
}

module.exports = EquiposService;
