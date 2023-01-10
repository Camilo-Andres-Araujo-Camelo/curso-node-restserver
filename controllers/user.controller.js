const { response, request } = require('express');

const usersGet = ( req = request, res = response ) => {

    const query = req.query; // Así puedo acceder a los querys de una petición
    const { saludo, nombre, apikey } = req.query; // O también así con la desestructuración

    res.json({
        ok: true,
        msg: 'get API - Controlador',
        query,
        saludo
    })
};

const usersPost = ( req, res = response ) => {

    const body = req.body; // Así normal
    const { nombre, edad } = req.body; //Desestructurado

    res.json({
        ok: true,
        msg: 'post API - Controlador',
        body,
        nombre, //Desestructurado
        edad //Desestructurado
    })
};

const usersPut = ( req, res = response ) => {

    const { id } = req.params

    res.json({
        ok: true,
        msg: 'put API - Controlador',
        id  
    })
};

const usersPatch = ( req, res = response ) => {
    res.json({
        ok: true,
        msg: 'Patch API - Controlador'
    })
};

const usersDelete = ( req, res = response ) => {
    res.json({
        ok: true,
        msg: 'Delete API - Controlador'
    })
};


module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersPatch,
    usersDelete   
}