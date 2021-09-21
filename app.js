const express = require("express")
const path = require('path')
// Create the express app
const app = express();

app.use(express.static('public'));

app.use('/', function (req, res) {
	res.sendFile(__dirname+'/public/pages/index.html');
});

app.listen(5000, () => {
	console.log('Listening on port ' + 5000);
});