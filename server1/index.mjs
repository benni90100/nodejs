import express from "express";
const app = express();
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
const users = [

    {
  
      id: 1,
  
      username: 'john_doe',
  
      email: 'john@example.com'
  
    },
  
    {
  
      id: 2,
  
      username: 'jane_smith',
  
      email: 'jane@example.com'
  
    },
  
    {
  
      id: 3,
  
      username: 'alice_wonderland',
  
      email: 'alice@example.com'
  
    },
  
    {
  
      id: 4,
  
      username: 'bob_jones',
  
      email: 'bob@example.com'
  
    },
  
    {
  
      id: 5,
  
      username: 'emma_davis',
  
      email: 'emma@example.com'
  
    }
  
  ];
app.get("/users", (req, res) => {
  res.status(200).send(users);
});
app.get("/users/:id", (req, res) => {
    const  user = users.find((user) => user.id === parseInt(req.params.id));
    if (user) {
        res.status(200).send(user);
    }else{
        res.status(500).send('internal server error')
    }
 
});
app.use((req, res, next) => {
  res.status(404).send("Pagina non trovata");
  next();
});
app.listen(3000, () => {
  console.log("server running in locale alla porta 3000");
});
