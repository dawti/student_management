const express=require('express');
const app=express();
const port=8081;
const Sequelize=require('sequelize');
const sequelize=new Sequelize('postgres://postgres:1234@localhost:5432/stud_db');
//--------------------dawtie--------------------------------------------
const Class = require('./models/class.js')(sequelize, Sequelize);
const Teacher = require('./models/teacher.js')(sequelize, Sequelize);
const Login=require('./models/login.js')(sequelize,Sequelize);
const ClassYear=require('./models/classyear.js')(sequelize,Sequelize);
const ExamType=require('./models/examtype.js')(sequelize,Sequelize);
const Mark=require('./models/mark.js')(sequelize,Sequelize);
const Audio=require('./models/audio.js')(sequelize,Sequelize);

//----------------------------corrine --------------------------

const Fee = require('./models/fee.js')(sequelize, Sequelize);
const StudFee = require('./models/studFee.js')(sequelize, Sequelize);
const ClassFee = require('./models/classFee.js')(sequelize, Sequelize);

const ClassFeeMaster = require('./models/classFeeMaster.js')(sequelize, Sequelize);
const StudFeeMaster = require('./models/studFeeMaster.js')(sequelize, Sequelize);
const Payment = require('./models/payment.js')(sequelize, Sequelize);
const Feedback = require('./models/feedback.js')(sequelize, Sequelize);


//---------------------------------------------------------------
//arsheena
const Course = require('./models/course.js')(sequelize, Sequelize);
const School = require('./models/school.js')(sequelize, Sequelize);
const Parent = require('./models/parent.js')(sequelize, Sequelize);
const Studreg = require('./models/studReg.js')(sequelize, Sequelize);
const Guardian = require('./models/guardian.js')(sequelize, Sequelize);

const TeachAttend = require('./models/teachAttend.js')(sequelize, Sequelize);
const StudAttend = require('./models/studAttend.js')(sequelize, Sequelize);
const Assignment = require('./models/assignment.js')(sequelize, Sequelize);
const StudAssignment = require('./models/studAssignment.js')(sequelize, Sequelize);
//


//------------------------jagan------------------------

const TimeTable = require('./models/timetable.js')(sequelize, Sequelize);
const AnswerSheet = require('./models/answersheet.js')(sequelize, Sequelize);
const PdfTable = require('./models/pdftable.js')(sequelize, Sequelize);
const QuestionPaper = require('./models/Questionpaper.js')(sequelize, Sequelize);
const VideoTable = require('./models/videotable.js')(sequelize, Sequelize);


sequelize.sync({force:true}).then(() => {
    console.log('Drop and Resync with { force: true }');
  });

 





app.listen(port,(req,res)=>{
    console.log("App listening to port 8081");
})

