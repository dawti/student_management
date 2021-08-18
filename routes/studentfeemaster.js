/**
 * 
 * Author:Dawtie
 * Route for Student Fee Master 
 */

 const StudentMaster = require("../controllers/studfeemasterController.js");
  
 const express = require("express");
  const router=express.Router();

 // Add a new StudentMaster 
 router.post("/", StudentMaster.create);  
 
 // Retrieve a StudentMaster
 router.get("/:id", StudentMaster.findOne);

 // Retrieve all StudentMaster
 router.get("/", StudentMaster.findAll);

 // Update StudentMaster details
 router.put("/:id", StudentMaster.update);

 // Delete StudentMaster
 router.delete("/:id", StudentMaster.delete);

 // Delete all StudentMasters
 router.delete("/", StudentMaster.deleteAll);
 
 module.exports=router;