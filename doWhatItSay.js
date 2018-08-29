var fs = require("fs");
fs.readFile("random.txt", "utf8", function(error, data) {
    if (error) {
        return console.log(error);  // console log error and break out the code
    }
    
      // We will then print the contents of data; call back
      console.log(data);
});     