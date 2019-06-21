require('./config/config.js');

const express = require('express');
const path = require('path');
const app = express();

// Make assets accesible
app.use('/', express.static(path.join(__dirname, 'assets')))

// Routes configuration
//app.use('/routes',require('./routes/index'));


app.listen(process.env.PORT, () => {
	console.log('Listening in ', process.env.PORT);
});