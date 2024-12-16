const os = require("os");

const infoSistemaOperativo = () => {
    const nombre = os.platform();
    const tipo = os.type();
    const version = os.version();
    const arquitectura = os.arch();
    const CPUs = os.cpus().length;
    const memoriaTotal = (os.totalmem() / (1024 * 1024)).toFixed(2);
    const memoriaLibre = (os.freemem() / (1024 * 1024)).toFixed(2);

    return {
        Nombre: nombre,
        Tipo: tipo,
        Version: version,
        Arquitectura: arquitectura,
        CPUs: CPUs,
        MemoriaTotal: `${memoriaTotal} MB`,
        MemoriaLibre: `${memoriaLibre} MB`,
    }
}


module.exports = {infoSistemaOperativo};