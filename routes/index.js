const express = require('express');

const equiposRouter = require('./equipos.router');

function routerApi(app) {
    const router_global = express.Router();
    app.use('/el_guru_del_emparrillado/v1/', router_global);
    router_global.use('/equipos', equiposRouter);
}

module.exports = routerApi;
