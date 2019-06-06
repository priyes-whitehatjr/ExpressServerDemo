const restify = require('restify');
const express = require('express');
const PORT = 93 || process.env.PORT;
const server=express();


const teacherRouter = require('./Routes/teachers.js');
server.use('/teacher',teacherRouter);



server.listen(PORT, function() {
  console.log('listening at %s', this.address().port);
});