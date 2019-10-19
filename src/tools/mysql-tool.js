'use strict';

let mysql = require('mysql');

let pool = null;
let instance = {
  getPool : null
};

let initializePool = () => {
  if(!pool){
    pool = mysql.createPool("mysql://aoal8ifooy4w2vj3:imb500erhfjvssxx@edo4plet5mhv93s3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/nyep6drljflvbtq3");//process.env.JAWSDB_URL);
  }
};

instance.getPool = () => {
  initializePool();
  return pool;  
};

module.exports = instance;
