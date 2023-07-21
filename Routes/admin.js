const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');

router.get("/add-product", (req, res, next) => {
  //   console.log("In middleware 2");
  res.sendFile(path.join(rootDir,'views','product.html'))
});
router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;