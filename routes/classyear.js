/**
 * Author:Jagan
 * Route for classyear 
*/

const classyear = require("../controllers/classyearController.js");
  
var express = require("express");
const router=express.Router();

// Create a new User Account
router.post("/", classyear.create);

// Retrieve all usertype of this user account
router.get("/:id", classyear.findAll);

// Update account details
router.put("/:id", classyear.update);

// Delete an account
router.delete("/:id", classyear.delete);

module.exports=router;
