
exports.up = function (knex, Promise) { //apply migration
    return Promise.all([
        knex.schema.createTable('milestones', function (table) {
            table.increments('id');
            table.string('description');
            table.date('achieved');
        })
    ])
};

exports.down = function (knex, Promise) { //migration rollback
    return Promise.all([
        knex.schema.dropTable('milestones')
    ])
};
