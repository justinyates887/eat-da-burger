const connection = require('./connection')

exports.qm = (num) => {
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

exports.obj = (obj) => {
  let arr = [];

  for (let id in obj) {
    if (Object.hasOwnProperty.call(obj, id)) {
      arr.push(id + "=" + obj[id]);
    }
  }

  return arr.toString();
}


exports.selectAll = function(table, callback) {
    let queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err, result) {
        if (err) { 
            throw err; 
        }
        callback(result);
    });
}
exports.insert = function(table, cols, vals, callback) {
    let queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += exports.qm(vals.length);
    queryString += ") ";

    connection.query(queryString, vals, function(err, result) {
        if (err) {
            throw err;
        }
        callback(result);
    });

}
exports.update = function(table, colVals, condition, callback) {
    let queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(colVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);

    connection.query(queryString, function(err, result) {
        if (err) {
            throw err;
        }
        callback(result);
    });

};