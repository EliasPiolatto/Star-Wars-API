const Planet = require('../data');
const { response } = require('../utils');
const axios = require('axios');

module.exports = async (req, res) => {
    // const planets = await Planet.list();
    const { id } = req.query;
    if(id && id > 0) {
        const planets = await axios.get(`http://database:8004/Planet/${id}`);
        response(res, 200, planets.data);
    } else {
        const planets = await axios.get("http://database:8004/Planet");
        response(res, 200, planets.data);
    }
};