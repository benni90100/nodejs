import {createServer} from "node:http"

const server = createServer((req, res)=>{
    console.log("req ok");

    res.statusCode = 200;

    res.setHeader("content-type", "text-html");

    res.end("<html><body><h1>questo e' un server </h1></body></html>");
})

server.listen(3001, ()=>{
    console.log("server running in locale alla porta 3000");
});