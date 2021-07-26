
const express = require('express');
const cors = require('cors');
const redis = require('redis')
const app = express();
const mysql = require('mysql');
const db_secret = require('./db-secret.json');

const client = redis.createClient({
	host: 'redis1', 
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

/*
function ddlMysql(){
	const conn = mysql.createConnection({
		host: db_secret.host,
		user: db_secret.user,
		password: db_secret.password,
		database: db_secret.database
	});

	conn.connect();
	const qry =   ' create database if not exists testdb; ' 
				+ ' create table if not exists testt (id varchar(50) primary key, '
				+ ' name varchar(30) not null, created timestamp default current_timestamp,'
				+ ' updated timestamp); ' 
				+ " insert into testt(id,name) values(uuid(),'test-name');  ";  
	conn.query(qry, function(err,rows,fields){    
		if(err){
			console.log(err);
			throw err;
		}
	});  
	
	conn.end();  
}*/
   
function chkMysql(res){  
	const conn = mysql.createConnection({
		host: db_secret.host,
		user: db_secret.user,
		password: db_secret.password //,
		// database: db_secret.database
	}); 

	conn.connect();
	const qry = 'SELECT NOW()';
	conn.query(qry, function(err,rows,fields){
		if (err) throw err; 
		console.log(rows);   
		res.send('Hello Mysql NOW(): '+rows[0]['NOW()']);
	});  
	conn.end();  
}  


app.get('/', (req,res) => {
	setRedis();
	getRedis(res);
});

app.get('/chkMysql', (req,res) => {
	//ddlMysql();
	chkMysql(res);
});     
   
app.listen(80,() => {
	console.log('Http Server has started. 80 port.');
});

