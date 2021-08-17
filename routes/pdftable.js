/**
 * Author:Jagan
 * Route for pdftable 
*/

const pdftable = require("../controllers/pdftableController.js");
  
var express = require("express");
const router=express.Router();

// Create a new User Account
router.post("/", pdftable.create);

// Retrieve all usertype of this user account
router.get("/:id", pdftable.findAll);

// Update account details
router.put("/:id", pdftable.update);

// Delete an account
router.delete("/:id", pdftable.delete);

module.exports=router;
