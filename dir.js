var fs = require("fs");
console.log("Die Datei heißt: " + __filename );
console.log("Going to read directory public/");
fs.readdir("public/",function(err, files) {
   if (err) {
      return console.error(err);
   }
   files.forEach( function (file) {
      console.log( file );
   });
});
function printHello() {
	console.log( "Hello, World!");
 }
 
 // Now call above function after 2 seconds
 setTimeout(printHello, 5000);