const express = require('express');
const path = require('path');
const index = require('./routes/index');

const app = express();

app.set('port', (process.env.PORT || 3000));

// View engine setup, middleware
app.use(express.static(`${__dirname}/public`));

// Routes for the backend
app.use('/', index);

app.listen(app.get('port'), () => {
  console.log('Application running on port:', app.get('port'));
});
