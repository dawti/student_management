/**
 * 
 * Author:Dawtie
 * Route for Class Fee Master 
 */

 const ClassFee = require("../controllers/classfeeController.js");
  
 const express = require("express");
  const router=express.Router();

 // Add a new ClassFee 
 router.post("/", ClassFee.create);  
 
 // Retrieve a ClassFee
 router.get("/:id", ClassFee.findOne);

 // Retrieve all ClassFee
 router.get("/", ClassFee.findAll);

 // Update ClassFee details
 router.put("/:id", ClassFee.update);

 // Delete ClassFee
 router.delete("/:id", ClassFee.delete);

 // Delete all ClassFees
 router.delete("/", ClassFee.deleteAll);
 
 module.exports=router;