create database testdb;

use testdb;

create table IF NOT EXISTS testt (
  id varchar(50) primary key,
  name varchar(30) not null,
  created timestamp default current_timestamp,
  updated timestamp 
);

insert into testt(id, name) values(uuid(),'test-name');

commit;

select * from testt;