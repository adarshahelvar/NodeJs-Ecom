const express = require("express");

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));

app.use("/add-products", (req, res, next) => {
//   console.log("In middleware 2");
  res.send(
    `<form action="/product" method="POST"><input type="text" name="title" /><input type="password" name="password" /><button type="submit">submit</button></form>`
  );
});
app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});
app.use("/", (req, res, next) => {
//   console.log("In middleware /");
  res.send(`<h1>Hello World</h1>`);
});

// const server = http.createServer(app);

// server.listen(3000);
app.listen(3000);
