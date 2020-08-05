const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// argv.direccion;

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log)

// lugar.getLatLng(argv.direccion)
//     .then(console.log)
//     .catch(console.log)

// clima.getClima(35, 139)
//     .then(console.log)
//     .catch(console.log)

const getInfo = async(direccion) => {
    try {
        let coords = await lugar.getLatLng(direccion)
        let temp = await clima.getClima(coords.lat, coords.lng)
        return `El clima de ${coords.dir} de es ${temp} °C`
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);