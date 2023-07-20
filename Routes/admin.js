const express = require('express');

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  //   console.log("In middleware 2");
  res.send(
    `<form action="/product" method="POST"><input type="text" name="title" /><input type="password" name="password" /><button type="submit">submit</button></form>`
  );
});
router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;