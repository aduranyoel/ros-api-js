const express = require('express');
const Router = express.Router();
const path = require('path');
const RosApi = require('node-routeros').RouterOSAPI;
const variables = require('./variables');

const publicPath = path.resolve(__dirname, '../', 'static');

Router.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

Router.post('/', (req, res) => {

    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    if (ip && ip.indexOf(':') !== -1) {
        const split = ip.split(':');
        ip = split[split.length - 1];
    }

    const wanted = variables.ips.find(i => i.ip === ip);

    if (wanted) {
        const conn = new RosApi(variables.login);
        conn.timeout = 20;
        conn.connect()
            .then(() => {
                conn.write('/ip/dhcp-client/release', [
                    '=numbers=' + wanted.interface,
                ])
                    .then((data) => {
                        conn.close();
                        res.status(200).json({
                            message: 'Cuenta cerrada con Exito'
                        })
                    })
                    .catch((err) => {
                        res.status(401).json({
                            message: 'No se pudo cerrar la cuenta'
                        })
                    });
            })
            .catch((err) => {
                res.status(401).json({
                    message: err.message
                })
            });
    } else {
        res.status(401).json({
            message: 'Dirección IP no encontrada'
        })
    }
});

module.exports = Router;
