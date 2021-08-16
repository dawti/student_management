/**
 * Author:Jagan
 * Route for timetable 
*/

    const timetable = require("../controllers/timetableController.js");
  
    var express = require("express");
    const router=express.Router();
  
    // Create a new User Account
    router.post("/", timetable.create);
  
    // Retrieve all usertype of this user account
    router.get("/:id", timetable.findAll);

    // Update account details
    router.put("/:id", timetable.update);
  
    // Delete an account
    router.delete("/:id", timetable.delete);
    
  module.exports=router;
  