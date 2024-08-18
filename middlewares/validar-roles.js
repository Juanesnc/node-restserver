const { response } = require('express')

const esAdminRole = (req, res = response, next) => {

    const { rol, nombre } = req.usuario;

    if (rol !== 'ADMIN_ROLE') {
        return res.status(401).json({
            msg: 'No tiene permisos para hacer esta acción'
        });
    }

    next();
}

const tieneRole = (...roles) => {
    return (req, res = response, next) => {
        if (!req.usuario) {
            return res.status(500).json({
                msg: 'No hay usuario autenticado'
            });
        }
        if (!roles.includes(req.usuario.rol)) {
            return res.status(401).json({
                msg: 'No tiene permisos para hacer esta acción'
            });
        }
        
        next()
    }
}

module.exports = {
    esAdminRole,
    tieneRole
}