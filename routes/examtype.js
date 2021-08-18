/**
 * Author:Jagan
 * Route for examtype 
*/

const examtype = require("../controllers/examtypeController.js");
  
var express = require("express");
const router=express.Router();

// Create a new User Account
router.post("/", examtype.create);

// Retrieve all usertype of this user account
router.get("/:id", examtype.findAll);

// Update account details
router.put("/:id", examtype.update);

// Delete an account
router.delete("/:id", examtype.delete);

module.exports=router;
