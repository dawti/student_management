/**
 * Author:Jagan
 * Route for mark 
*/

const mark = require("../controllers/markController.js");
  
var express = require("express");
const router=express.Router();

// Create a new User Account
router.post("/", mark.create);

// Retrieve all usertype of this user account
router.get("/:id", mark.findAll);

// Update account details
router.put("/:id", mark.update);

// Delete an account
router.delete("/:id", mark.delete);

module.exports=router;
