// Import MySQL connection.
var connection = require("../config/connection.js");



connection.connect(function(err) {
  if(err) {
    console.log("Error", err.stack);
  }
  console.log("Connected as id: %s", connection.threadId)
});




// Object for all our SQL statement functions.





var orm = {
  create: function(burger, cb) {
    var burgerName = burger;
    var Query = "INSERT INTO burgers (burger_name) VALUES ('" + burgerName + "')";
    connection.query(Query, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  update: function(burgerId, cb) {
    var id = burgerId;
    connection.query("UPDATE burgers SET devoured=1 WHERE id=?", [id], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  all: function(tableName, cb) {
  connection.query('SELECT * FROM burgers', function(err, result) {
      if (err) throw err;
      //console.log("The burger function test :" + result[0].burger_name); 
      cb(result);
  });
 }
};

module.exports = orm;





