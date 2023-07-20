const express = require('express');
const app = express();
const bodyParser = require("body-parser");

const adminRoutes = require("./Routes/admin");
const shopRouetr = require("./Routes/shop");

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);
app.use(shopRouetr);

app.use((req, res, next)=>{
    res.status(404).send(`<h1>Page not found</h1>`)
});


app.listen(3000);
