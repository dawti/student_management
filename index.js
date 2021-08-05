const express=require('express');
const app=express();
const port=8081;
const Sequelize=require('sequelize');
const sequelize=new Sequelize('postgres://postgres:root@localhost:5432/stud_db');

const Teacher = require('./models/teacher.js')(sequelize, Sequelize);
const Course = require('./models/course.js')(sequelize, Sequelize);

const Fee = require('./models/fee.js')(sequelize, Sequelize);

sequelize.sync({force:true}).then(() => {
    console.log('Drop and Resync with { force: true }');
  });

 





app.listen(port,(req,res)=>{
    console.log("App listening to port 8081");
})

