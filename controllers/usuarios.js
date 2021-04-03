const { response } = require('express')

const usuariosGet = (req = request, res = response) => {
    const {q = 'query', p = 'param' , c='const', page = 1, limit = 5} = req.query;
    res.json({
        msg: 'Get API - Controlador',
        q,
        p,
        c,
        page,
        limit
    });
}

const usuariosPut = (req, res = response) => {

    const { id } = req.params;
    res.json({
        msg: 'PUT API - Controlador',
        id
    });
}

const usuariosPost = (req, res = response) => {
    const { nombre, edad } = req.body;
    res.json({
        msg: 'POST API - Controlador',
        nombre,
        edad
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'DELETE API - Controlador'
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'PATCH API - Controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPatch,
    usuariosPost,
    usuariosDelete
}