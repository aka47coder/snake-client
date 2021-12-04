let connection;
const setupInput = (conn) => {
    connection = conn;
 
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    
  
  const handleUserInput = function (key) {
    if (key==="w"){
        conn.write("Move: up");
    }
    if (key==="a"){
        conn.write("Move: left");
    }
    if (key==="s"){
        conn.write("Move: down");
    }
    if (key==="d"){
        conn.write("Move: right");
    }
    if (key==="h"){
        conn.write("Say: My name is hamza");
    }
    // if (key==="e"){
    //     conn.write("e");
    // }
    // if (key==="l"){
    //     conn.write("ll");
    // }
    // if (key==="o"){
    //     conn.write("o");
    // }
    
    
    if (key === '\u0003') {
        process.exit();
      }
      
  };
  stdin.on("data", handleUserInput);
  return stdin;
  
};
module.exports={setupInput,};