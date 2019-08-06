var connection = require("./connection.js");

var orm = {
  selectAll: function() {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, "burgers", function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne: function(newBurger) {
    var queryString = "INSERT INTO ?? SET ?";
    console.log(queryString);
    connection.query(queryString, ["burgers", {burger_name: newBurger, devoured: 0}], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne: function(updateBurger) {
    var burgers = "burgers";
    var queryString = "UPDATE " + burgers + " SET ? WHERE ?";
    console.log(queryString);
    connection.query(queryString,     
        [
            {
            devoured: 1
            },
            {
            burger_name: updateBurger
            }
        ],
    function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  }
};

module.exports = orm;
