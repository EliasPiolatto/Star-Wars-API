const Character = require('../data');
const { response } = require('../utils');
const axios = require('axios');

module.exports = async (req, res) => {
    // const characters = await Character.list();
    const { id } = req.query;
    if(id && id > 0) {
        const characters = await axios.get(`http://database:8004/Character/${id}`);
        response(res, 200, characters.data);
    } else {
        const characters = await axios.get("http://database:8004/Character");
        response(res, 200, characters.data);
    }
};