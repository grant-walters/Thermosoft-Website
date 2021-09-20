const express = require("express")
const path = require('path')
// Create the express app
const app = express();

app.use(express.json());

app.use('/assets', express.static(__dirname + '/public/assets'));

app.use('/', function (req, res) {
	res.sendFile(__dirname+'/public/pages/index.html');
});

app.listen(5000, () => {
	console.log('Listening on port ' + 5000);
});