/**
 * Author:Jagan
 * Route for answersheet 
*/

const answersheet = require("../controllers/answersheetController.js");
  
var express = require("express");
const router=express.Router();

// Create a new User Account
router.post("/", answersheet.create);

// Retrieve all usertype of this user account
router.get("/:id", answersheet.findAll);

// Update account details
router.put("/:id", answersheet.update);

// Delete an account
router.delete("/:id", answersheet.delete);

module.exports=router;
