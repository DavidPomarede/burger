var orm = require('../config/orm.js');


var selectAll = function() {
    orm.selectAll();
};

var insertOne = function(input1) {
    orm.insertOne(input1);
};

var updateOne = function(input2) {
    orm.updateOne(input2);
}



module.exports = {
    selectAll: selectAll,
    insertOne: insertOne,
    updateOne: updateOne
};