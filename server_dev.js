
const express = require('express');
const cors = require('cors');
const redis = require('redis')
const app = express();
const client = redis.createClient({
	host: '172.17.0.1', //docker0 network interface default
	port: 6379
});   

app.use(cors());

function setRedis(){
	client.set('hello', 'Hello Redis', (err, reply) => {
		if (err) throw err;
		console.log('redis set: '+reply);
		}); 
}
  
function getRedis(res){
	client.get('hello', (err, reply) => {
		if (err) throw err;
		console.log('redis get: '+reply);
		res.send('Hello Node.js with '+reply);
		});     
}  
  
app.get('/', (req,res) => {
	setRedis();
	getRedis(res);
});
  
app.listen(80,() => {
	console.log('Http Server has started. 80 port.');
});

