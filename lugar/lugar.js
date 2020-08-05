const axios = require('axios');

const getLatLng = async(direccion) => {
    const encodeURL = encodeURI(direccion);

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURL}&appid=ab68c70f2f2beca86ff7d67382390aec`);

    const data = resp.data.coord;
    const dir = resp.data.name;
    const lat = data.lat;
    const lng = data.lon;
    // return 'Hola'
    return {
        dir,
        lat,
        lng
    }
}

// Utilizando City Geo Location
const getLugarLatLng = async(direccion) => {

    const encodeURL = encodeURI(direccion);
    //console.log(encodeURL);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        headers: {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
            "x-rapidapi-key": "55c8ad1d6bmsh1961477f515aafep1fcf25jsna624c76e142f",
            "useQueryString": true
        }
        /*,
            params:{
    
            }*/
    });

    const resp = await instance.get();

    if (resp.data.Results === 0 || resp.data.Results === null) {
        throw new Error(`No hay resultado para ${direccion}`);
    }
    const data = resp.data.Results[0];
    const dir = data.name;
    const lat = data.lan;
    const lng = data.lon;

    return {
        dir,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng,
    getLatLng
}