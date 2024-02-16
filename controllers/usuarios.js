const { response, request } = require('express');


const usuariosGet = (req = request, res = response) => {
    
    const { nombre, id } = req.query;
    
    res.json({
        msg: 'get API - controller',
        nombre, id
    });
}

const usuariosPut = (req, res = response) => {

    const {id} = req.params;

    res.json({
        msg: 'put API - controller',
        id
    });
}

const usuariosPost = (req, res = response) => {

    const { nombre, edad } = req.body;

    res.status(201).json({
        msg: 'post API - controller',
        nombre, edad
    });
}

const usuariosPath = (req, res = response) => {
    res.status(201).json({
        msg: 'path API - controller'
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controller'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPath,
    usuariosDelete
}