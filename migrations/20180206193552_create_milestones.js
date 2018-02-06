
exports.up = function (knex, Promise) { //apply migration
    return Promise.all([
        knex.schema.createTable('users', function (table) {
            table.string('username');
            table.string('password');
            table.timestamps();
        })
    ])
};

exports.down = function (knex, Promise) { //migration rollback
    return Promise.all([
        knex.schema.dropTable('users')
    ])
};
