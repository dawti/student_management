const express=require('express');
const timetable=require('./timetable');
const teacher=require('./teacher');
const answersheet = require('./answersheet');
const classes = require('./class');
const classyear = require('./classyear');
const examtype = require('./examtype');
const mark = require('./mark');
const audio = require('./audio');
const pdftable = require('./pdftable');
const questionpaper = require('./questionpaper');
const videotable = require('./videotable');

const router=express.Router();

const defaultRoutes=[{
    path:'/timetable',
    route:timetable
},
{
    path:'/teacher',
    route:teacher
},
{
    path:'/answersheet',
    route:answersheet
},
{
    path:'/class',
    route:classes
},
{
    path:'/classyear',
    route:classyear
},
{
    path:'/examtype',
    route:examtype
},
{
    path:'/mark',
    route:mark
},
{
    path:'/audio',
    route:audio
},
{
    path:'/pdf',
    route:pdftable
},
{
    path:'/questionpaper',
    route:questionpaper
},
{
    path:'/videotable',
    route:videotable
}

];

defaultRoutes.forEach((route)=>{
    router.use(route.path,route.route);
});

module.exports=router;