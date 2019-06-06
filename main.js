require('custom-env').env(true);
const express = require('express');
const PORT = process.env.PORT;
const server=express();
const teacherRouter = require('./Routes/teachers.js');




server.use('/teacher',teacherRouter);


server.listen(PORT, function() {
  console.log('listening at %s Environment :- %s', this.address().port,process.env.NODE_ENV);
});