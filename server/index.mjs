import express from "express";
const server = express();
server.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

server.get('/', (req,res)=>{
    res.status(200).send('homepage')
})

server.get('/prodotti', (req, res)=>{
  res.status(200).send('prodotti')
})
server.post('/prodotti', (req, res)=>{
  const risposta = res.json()
  console.log(risposta)
})

server.listen(3000, ()=>{
    console.log('its work')
})