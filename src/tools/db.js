'use strict';

let mysql = require('./mysql-tool');

let expose = {
  storedProcedure  : undefined,
  filteredStoredProcedure  :undefined,
  insertingStoredProcedure: undefined
};

expose.storedProcedure = (data, cb) => {
  let pool = mysql.getPool();

  let to_return = {
    error : undefined,
    success : undefined,
    exists : undefined,
    detail : undefined,
    results : undefined,
    fields : undefined,
  };

  let sql_query = `CALL ${data.query}`;
  let sql_params = data.params;
  pool.query(sql_query, sql_params, (error, results, fields) => {
    if(error){
      to_return.error = true;
      to_return.detail = error
      cb(to_return);
      return;
    }

    to_return.success = true;
    to_return.results = results[0];
    to_return.detail = results[1];

    // to_return.fields = fields; // is this necessary?

    cb(to_return);    

  })
};

let concatParms=(data)=>{
  let params = "";
  for (var i = 0; i < data.params.length; i++) {
    params+="'"+data.params[i]+"',";
  }
  return params;
};

expose.filteredStoredProcedure = (data, cb) => {
  let pool = mysql.getMultPool();

  let to_return = {
    error : undefined,
    success : undefined,
    exists : undefined,
    detail : undefined,
    results : undefined,
    fields : undefined,
    output: undefined,
  };
  let params = concatParms(data);
  let sql_query = `CALL ${data.query}`;
  let sql_params = data.params;
  pool.query(sql_query, sql_params, (error, results, fields) => {
    if(error){
      to_return.error = true;
      to_return.detail = error
      cb(to_return);
      return;
    }
    to_return.success = true;
    to_return.results = results[0];
    to_return.detail = results[1];
    to_return.output = results[2];
    cb(to_return);

  })
};

expose.insertingStoredProcedure = (data, cb) => {
  let pool = mysql.getMultPool();

  let to_return = {
    error : undefined,
    success : undefined,
    exists : undefined,
    detail : undefined,
    results : undefined,
    fields : undefined,
    output: undefined,
  };
  let params = concatParms(data);
  let sql_query = `CALL ${data.query}`;
  let sql_params = data.params;
  pool.query(sql_query, sql_params, (error, results, fields) => {
    if(error){
      to_return.error = true;
      to_return.detail = error
      cb(to_return);
      return;
    }
    to_return.success = true;
    to_return.detail = results[0];
    to_return.output = results[1];
    cb(to_return);

  })
}




// expose this file as a module based on the expose object
module.exports = expose;
