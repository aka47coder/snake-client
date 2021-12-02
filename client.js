
const { IP, PORT } = require("./constants");

const net = require("net");

const connect = function () {

    const conn = net.createConnection({
      host: IP, // IP address here
      port :  PORT// PORT number here,
       
  });
    
    // interpret incoming data as text
    conn.setEncoding("utf8");
    //conn.on("event name", connect);
  
  //   conn.on("event name", () => {
  //     // code that does something
  //   });
    conn.on("connect", () => {
      // code that does something when the connection is first established
     // console.log("you ded cuz you idled")
      console.log("Successfully connected to game server")
      conn.write("Name: HAZ");
      // conn.write("Move: up");
      // conn.write("Move: down");
      // conn.write("Move: left");
      // conn.write("Move: right");
    });
  
  
    return conn;
  };
  module.exports = {connect,};