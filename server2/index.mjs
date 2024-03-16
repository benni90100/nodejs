import { createServer } from "node:http";

const server = createServer((req, res) => {
  res.statusCode(200);
  res.setHeader('"content-type", "text-html"');
  res.end("<html><body><h1>questo e' un server </h1></body></html>");
});

  

