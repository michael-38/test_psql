module.exports = function (knex) {


    function addPerson(firstName, lastName, birthdate, callback) {
        knex.insert({ first_name: firstName, last_name: lastName, birthdate: birthdate }).into('famous_people').asCallback(function (err, result) {
            if (err) {
                return console.log("insert error: ", err);
            }
        })



    }
    return {
        addPerson: addPerson,
    }
}