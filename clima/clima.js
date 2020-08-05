const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=ab68c70f2f2beca86ff7d67382390aec&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}