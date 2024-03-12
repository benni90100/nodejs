const fs = require("fs");

const data: string = "sono un file di testo";

const pathData: string = "./index.txt";

fs.writeFile(pathData, data, (err: any) => {
    if (err) {
        console.log(err);
    } else {
        console.log("done");
    }
});
