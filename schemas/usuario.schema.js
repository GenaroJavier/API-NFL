const joi = require('../node_modules/joi');

const nombre_usuario = joi.string().alphanum().maxLength(15);
