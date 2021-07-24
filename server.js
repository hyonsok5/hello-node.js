
var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

app.get('/', (req,res) => {
	res.send('Hello Node.js');
});

app.listen(85,() => {
	console.log('Http Server has started. 85 port.');
});

