/**
 * 
 * Author:Dawtie
 * Route for Class Fee Master 
 */

 const classMaster = require("../controllers/classfeemasterController.js");
  
 const express = require("express");
  const router=express.Router();

 // Add a new classMaster 
 router.post("/", classMaster.create);  
 
 // Retrieve a classMaster
 router.get("/:id", classMaster.findOne);

 // Retrieve all classMaster
 router.get("/", classMaster.findAll);

 // Update classMaster details
 router.put("/:id", classMaster.update);

 // Delete classMaster
 router.delete("/:id", classMaster.delete);

 // Delete all classMasters
 router.delete("/", classMaster.deleteAll);
 
 module.exports=router;