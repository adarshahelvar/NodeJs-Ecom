const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const errorController = require('./controllers/error'); // Make sure you import the errorController

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404); // This handles the 404 error and renders the 404 page with the path variable

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
