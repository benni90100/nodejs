var fs = require("fs");
var data = "sono un file di testo";
var pathData = "./index.txt";
fs.writeFile(pathData, data, function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("done");
    }
});
