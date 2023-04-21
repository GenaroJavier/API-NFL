const express = require('express');
const router = express.Router();

const equiposServicio = require('../services/equipos.service');
const equipos = new equiposServicio();

router.get('/', async (req, res) => {
    res.json(await equipos.obtenerEquipos());
});

module.exports = router;
