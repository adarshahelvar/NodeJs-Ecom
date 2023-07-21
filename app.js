const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const rootDir = require('./util/path');

const app = express();
const adminRoutes = require("./Routes/admin");
const shopRouetr = require("./Routes/shop");

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use(adminRoutes);
app.use(shopRouetr);

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(rootDir, 'views','pageNotFound.html'));
});


app.listen(3000);
