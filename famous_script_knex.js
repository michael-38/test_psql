const pg = require("pg");
const settings = require("./settings"); // looks for settings.json
const knex = require('knex')({
    client: 'pg',
    connection: {
        user: settings.user,
        password: settings.password,
        database: settings.database,
        host: settings.hostname,
        port: settings.port,
        ssl: settings.ssl
    }
});


const addPerson = require("./add_person.js")(knex)


addPerson.addPerson(process.argv[2], process.argv[3], process.argv[4]);


knex.select().table('famous_people').asCallback(function (err, result) {
    if (err) {
        return console.error("Query Error: ", err);
    }
    console.log(result);
})
