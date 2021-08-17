/**
 * Author:Jagan
 * Route for videotable 
*/

const videotable = require("../controllers/videotableController.js");
  
var express = require("express");
const router=express.Router();

// Create a new User Account
router.post("/", videotable.create);

// Retrieve all usertype of this user account
router.get("/:id", videotable.findAll);

// Update account details
router.put("/:id", videotable.update);

// Delete an account
router.delete("/:id", videotable.delete);

module.exports=router;
