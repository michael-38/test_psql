const pg = require("pg");
const settings = require("./settings"); // looks for settings.json
let args = process.argv.slice(2);

const client = new pg.Client({
    user: settings.user,
    password: settings.password,
    database: settings.database,
    host: settings.hostname,
    port: settings.port,
    ssl: settings.ssl
});

//requiring the functions defined in query.js and passing it the "client" db connection
const query = require("./query.js")(client);


client.connect((err) => {
    if (err) {
        return console.error("Connection Error", err);
    }
    query.findByFirstName(args, (err, result) => {
        if (err) {
            return console.error("error running query", err);
        }
        console.log(`Found ${result.rows.length} person(s) by the name ${args}`);
        console.log(`id ${result.rows[0].id}: ${result.rows[0].first_name} ${result.rows[0].last_name}, born ${result.rows[0].birthdate}`);
        client.end();
    });
    console.log("Searching...");
});