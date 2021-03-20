const express = require('express');
var cors = require('cors');
let app = express(); 
let port = process.env.PORT || 8080;
var path = require('path');
import 'dotenv/config';

app.use(cors());

console.log('Hello Node.js project.');
 
console.log(process.env.MY_SECRET);

if(process.env.NODE_ENV === 'production'){
  // If running in production mode enter here
	app.use(express.static(path.join(__dirname, '../client/build')));
	app.get('/', function(req,res) {
		res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
	});
}

app.get('/hello', function(req, res) { 
    res.json('Hello from backend !'); 
})
app.listen(port, () =>  { 
    console.log('Server listening on port: ' + port)
})