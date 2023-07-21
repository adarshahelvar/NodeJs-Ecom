const express = require('express');

const router = express.Router();

const path = require('path');

router.get("/add-product", (req, res, next) => {
  //   console.log("In middleware 2");
  res.sendFile(path.join(__dirname,"../",'views','product.html'))
});
router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;