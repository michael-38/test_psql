module.exports = function (client) {


    function findByFirstName(name, callback) { //eliminate the need to pass the query because that will be done when we query below
        const query = "SELECT * FROM famous_people WHERE first_name LIKE $1 OR last_name LIKE $1";
        client.query(query, name, callback); //query using a specific query with a specific name (the callback is required when using client.query)
    }


    function findByLastName(name, callback) { //eliminate the need to pass the query because that will be done when we query below
        const query = "SELECT * FROM famous_people WHERE last_name LIKE $1";
        client.query(query, name, callback); //query using a specific query with a specific name (the callback is required when using client.query)
    }

    return {
        findByFirstName: findByFirstName,
        findByLastName: findByLastName
    }
}