// const con = require("../../../db_config/db_connection");
const sql = require("./sample.sql");

class Sample {
  static getAllModel(req, result) {
    con.query(sql.getAlldata_sql, (err, res) => {
      if (err) return result(err, null);
      result(null, res);
    });
  }
}

module.exports = Sample;
