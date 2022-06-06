const mysql = require('mysql');



class dao{
  getConnection(){
    return mysql.createConnection({
      host : '127.0.0.1',
      user : 'nodeuser',
      password : 'secret',
      database : 'stock_market'
    });
  }
}



module.exports =  dao;