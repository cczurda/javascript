// Importing express module
const express = require("express");
var router = express.Router();

// About page route.
router.get('/clemens', function (req, res) {
	console.log("my Session is: " + req.session);
	res.send('Clemens ist auch da: ' + req.session.userid);
})
  
module.exports = router;