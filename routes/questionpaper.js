/**
 * Author:Jagan
 * Route for questionpaper 
*/

const questionpaper = require("../controllers/questionpaperController.js");
  
var express = require("express");
const router=express.Router();

// Create a new User Account
router.post("/", questionpaper.create);

// Retrieve all usertype of this user account
router.get("/:id", questionpaper.findAll);

// Update account details
router.put("/:id", questionpaper.update);

// Delete an account
router.delete("/:id", questionpaper.delete);

module.exports=router;
