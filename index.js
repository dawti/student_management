const express=require('express');
const app=express();
const port=8081;
const Sequelize=require('sequelize');
const sequelize=new Sequelize('postgres://postgres:1234@localhost:5432/stud_db');
//--------------------dawtie--------------------------------------------
const Class = require('./models/class.js')(sequelize, Sequelize);
const Teacher = require('./models/teacher.js')(sequelize, Sequelize);
const Login=require('./models/login.js')(sequelize,Sequelize);

//----------------------------corrine --------------------------

const Fee = require('./models/fee.js')(sequelize, Sequelize);
const StudFee = require('./models/studFee.js')(sequelize, Sequelize);
const ClassFee = require('./models/classFee.js')(sequelize, Sequelize);

//---------------------------------------------------------------
const Course = require('./models/course.js')(sequelize, Sequelize);




sequelize.sync({force:true}).then(() => {
    console.log('Drop and Resync with { force: true }');
  });

 





app.listen(port,(req,res)=>{
    console.log("App listening to port 8081");
})

