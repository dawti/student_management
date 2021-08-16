const express=require('express');
const timetable=require('./timetable');

const router=express.Router();

const defaultRoutes=[{
    path:'/timetable',
    route:timetable
},
{
    path:'/timetable',
    route:timetable
}];

defaultRoutes.forEach((route)=>{
    router.use(route.path,route.route);
});

module.exports=router;