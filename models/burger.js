var orm = require("../config/orm.js");


var burgerQueries = {
  show: function (cb) {
    orm.all('tableName', function (res) {
      cb(res);
    });
  },
  add: function (burgerName, cb) {
    orm.create(burgerName, function (res){
      cb(res);
    });
  },
  devoured: function (burgerId, cb) {
    orm.update(burgerId, function (res){
      cb(res);
    })
  }
};

module.exports = burgerQueries;