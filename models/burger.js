const orm = require('../config/orm');

module.exports = {
    all: function (cb) {
        orm.selectAll(function (res) {
            cb(res);
        });
    },
    create: function (burger_name, cb) {
        orm.insertOne(burger_name, function (res) {
            cb(res);
        });
    },
    update: function (id, burger_name, devoured, cb) {
        orm.updateOne(id, burger_name, devoured, function (res) {
            cb(res);
        });
    }
}