const orm = require("../config/orm");

let burger = {
    selectAll: function (callback) {
        orm.selectAll("burgers", function (res) {
            callback(res);
        });
    },

    insertOne: function (colulmns, values, callback) {
        orm.insertOne("burgers", columns, values, function (res) {
            callback(res)
        })
    }
}

module.exports = burger;