const express = require("express")
const path = require('path')
// Create the express app
const app = express();
// Set EJS as the view engine for templates
app.set("view engine","ejs")
// Set the path for assets
app.use(express.static(__dirname));

app.get("/", (req,res) => {
	res.render("pages/index")
});

app.listen(5000, () => {
	console.log('Listening on port ' + 5000);
});