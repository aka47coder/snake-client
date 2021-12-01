
const net = require("net");

const connect = function () {

    const conn = net.createConnection({
      host: 'localhost', // IP address here
      port :  50541// PORT number here,
       
  });
  
    // interpret incoming data as text
    conn.setEncoding("utf8");
    //conn.on("event name", connect);
  
  //   conn.on("event name", () => {
  //     // code that does something
  //   });
    conn.on("connect", () => {
      // code that does something when the connection is first established
      console.log("you ded cuz you idled")
    });
  
  
    return conn;
  };
  module.exports = {connect,};