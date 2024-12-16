const os = require("os");

const infoDatosRed = () => {
    const interfaz = os.networkInterfaces();
    const interfazDentro = {};

    for (const [interfazNombre, direccion] of Object.entries(interfaz)) {
        interfazDentro[interfazNombre] = direccion.map((address) => {
            return {
                Familia: address.family,
                Direccion: address.address,
                Interno: address.internal,
            }
        }) 
    }

    return interfazDentro;
}


module.exports = {infoDatosRed};