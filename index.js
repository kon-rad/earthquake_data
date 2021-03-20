const express = require('express');
var cors = require('cors');
let app = express(); 
let port = process.env.PORT || 8080;

app.use(cors());
app.get('/hello', function(req, res) { 
    res.json('Hello from backend !'); 
})
app.listen(port, () =>  { 
    console.log('Server listening on port: ' + port)
})