// Importing express module
const express = require("express")
const app = express()

app.use(express.static('public'));

// Handling GET /hello request
app.get("/hello", (req, res, next) => {
	res.send("This is the hello response");
})

// Server setup
app.listen(3000, () => {
	console.log("Server is Running")
})
