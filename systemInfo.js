const { infoSistemaOperativo } = require("./osModule");
const { infoDatosRed } = require("./networkModule")

console.log("Información del sistema operativo:", infoSistemaOperativo());

console.log("Información de los datos de red:", infoDatosRed());