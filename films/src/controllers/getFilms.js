const Film = require('../data');
const { response } = require('../utils');
const axios = require('axios');

module.exports = async (req, res) => {
    // const films = await Film.list();
    const { id } = req.query;
    if(id && id > 0) {
        const films = await axios.get(`http://database:8004/Film/${id}`);
        response(res, 200, films.data);
    } else {
        const films = await axios.get("http://database:8004/Film");
        response(res, 200, films.data);
    }
};