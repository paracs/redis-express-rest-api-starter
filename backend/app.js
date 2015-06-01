'use strict';

/*
* Configuration
*/
import express from 'express';
let app = express();


require('../backend/config/env.js')(app);


/*
* Middleware
*/
require('../backend/middleware/views.js')(app);
// require('../backend/config/logger.js')(app);
// require('../backend/config/body.js')(app);
// require('../backend/config/staticFiles.js')(app, express);


app.get('/', function (req, res) {
  res.render('index');
});

export default app;
