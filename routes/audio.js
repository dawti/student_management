/**
 * Author:Jagan
 * Route for audio 
*/

const audio = require("../controllers/audioController.js");
  
var express = require("express");
const router=express.Router();

// Create a new User Account
router.post("/", audio.create);

// Retrieve all usertype of this user account
router.get("/:id", audio.findAll);

// Update account details
router.put("/:id", audio.update);

// Delete an account
router.delete("/:id", audio.delete);

module.exports=router;
