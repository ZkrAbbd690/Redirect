var express = require('express');
var cors = require('cors'); // Use cors module for enable Cross-origin resource sharing
var app = express();
const url = require('url');
app.use(cors()); // for all routes
var port = process.env.PORT || 80 ;
app.get('/*', function(req, res) {
 // console.log('req.originalUrl: ' + req.originalUrl +
  // "--" +req.originalUrl.split("?").pop()) ;
  //console.log(
  //  "noutee://app.noutee.com" + req.originalUrl
    //query: req.originalUrl.split("?").pop()

  // ) ;
    
  
  
  res.redirect("noutee://app.noutee.com" + req.originalUrl ) ;

      

 //var info = {
//'string_value': 'StackOverflow',
//'number_value': 8476
//}
//res.json(info);
// or
/* res.send(JSON.stringify({
string_value: 'Somestring',
number_value: 8476
})) */
//you can add a status code to the json response
/* res.status(200).json(info) */
})
app.listen(port, function() {
console.log('Node.js listening on port ' + port)
})