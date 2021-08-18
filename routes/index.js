const express=require('express');

const timetable=require('./timetable');
const classmaster=require('./classmaster');
const payment=require('./payment');
const classfee=require('./classfee');
const teacher=require('./teacher');
const login=require('./login');
const studentmaster=require('./studentfeemaster');
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
    path:'/payment',
    route:payment
},
{
    path:'/classfeemaster',
    route:classmaster
},
{
    path:'/classfee',
    route:classfee
},
{
    path:'/teacher',
    route:teacher
},
{
    path:'/login',
    route:login
},
{
    path:'/studfeemaster',
    route:studentmaster
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
}];
    




defaultRoutes.forEach((route)=>{
    router.use(route.path,route.route);
});

module.exports=router;