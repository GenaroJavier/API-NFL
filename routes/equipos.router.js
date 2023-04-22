const express = require('express');
const router = express.Router();

const equiposServicio = require('../services/equipos.service');
const equipos = new equiposServicio();

router.get('/', async (req, res) => {
    res.json(await equipos.obtenerEquipos());
});

router.get('/:id_equipo', async (req, res) => {
    const { id_equipo } = req.params;
    res.json(await equipos.obtenerInfoEquipo(id_equipo));
});

router.get('/logo/:id_equipo', async (req, res) => {
    const { id_equipo } = req.params;
    res.json(await equipos.obtenerLogoEquipo(id_equipo));
});


module.exports = router;
