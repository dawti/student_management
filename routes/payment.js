/**
 * 
 * Author:Dawtie
 * Route for Payment
 */

 const payment = require("../controllers/paymentController.js");
  
 const express = require("express");
  const router=express.Router();

 // Add a new payment 
 router.post("/", payment.create);  
 
 // Retrieve a payment
 router.get("/:id", payment.findOne);

 // Retrieve all payment
 router.get("/", payment.findAll);

 // Update payment details
 router.put("/:id", payment.update);

 // Delete payment
 router.delete("/:id", payment.delete);

 // Delete all payments
 router.delete("/", payment.deleteAll);
 
 module.exports=router;