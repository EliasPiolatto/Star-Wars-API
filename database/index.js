const server = require('./src/server');
const { Character, Film, Planet } = require('./src/database');

// Character.list().then((res)=> console.log(res));
// Character.get(1).then((res)=> console.log(res));

// Character.insert({
//     _id: "201",
//     name: "Elias Martin",
//     birth_year: "1992"
// }).then((res)=> console.log(res));

server.listen(8004, ()=>{
    console.log("Database service on port 8004");
});