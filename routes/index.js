const express=require('express');

const timetable=require('./timetable');
const classmaster=require('./classmaster');
const payment=require('./payment');
const classfee=require('./classfee');
const teacher=require('./teacher');
const login=require('./login');
const studentmaster=require('./studentfeemaster');

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
}];

defaultRoutes.forEach((route)=>{
    router.use(route.path,route.route);
});

module.exports=router;