import {createServer} from "node:http"

const server = createServer((req, res)=>{
    console.log("req ok");

    res.statusCode = 200;

    res.setHeader("content-type", "application/json");
    const jsonResBody = JSON.stringify({location: `mars`})

    res.end(jsonResBody);
})

server.listen(3001, ()=>{
    console.log("server running in locale alla porta 3000");
});