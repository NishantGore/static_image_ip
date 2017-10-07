var express = require('express');
var app = express();


const port = process.env.PORT || 7000;
app.use(express.static('public'));

// app.get('*', function(req, res){
// 	res.redirect('/image.jpg');
// });


app.listen(7000, function(){
  console.log(`The server is running on port ${port}`);
})