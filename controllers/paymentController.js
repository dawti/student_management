/**
 * Author:Dawtie
 * Controller for Payment
 */
 const model = require("../models");
 const Payment = model.db.payment;

 
 
 // Add  a new Payment
 exports.create = (req, res) => { 
 
   // Add a Payment
   const payment = {
    bankAccountNo:req.body.bankAccountNo,
    date: req.body.date,
    ifscCode: req.body.ifscCode,
     
   };
 
   // Save Payment in the database
   Payment.create(payment)
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while adding Payment."
       });
     });
 };
 
 // Retrieve all Payments from the database.
 exports.findAll = (req, res) => {
   
   Payment.findAll()
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while retrieving Payments."
       });
     });
 };
 
 // Find a Payment with an id
 exports.findOne = (req, res) => {
   const id = req.params.id;
 
   Payment.findByPk(id)
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message: "Error retrieving Payment with id=" + id
       });
     });
 };
 
 // Update a Payment by the id in the request
 exports.update = (req, res) => {
   const id = req.params.id;
 
   Payment.update(req.body, {
     where: { id: id }
   })
     .then(num => {
       if (num == 1) {
         res.send({
           message: "Payment details  updated successfully."
         });
       } else {
         res.send({
           message: `Cannot update Payment with id=${id}. Maybe Payment was not found or req.body is empty!`
         });
       }
     })
     .catch(err => {
       res.status(500).send({
         message: "Error updating Payment with id=" + id
       });
     });
 };
 
 // Delete a Payment with the specified id in the request
 exports.delete = (req, res) => {
   const id = req.params.id;
 
   Payment.destroy({
     where: { id: id }
   })
     .then(num => {
       if (num == 1) {
         res.send({
           message: "Payment was deleted successfully!"
         });
       } else {
         res.send({
           message: `Cannot delete Payment with id=${id}. Maybe Payment was not found!`
         });
       }
     })
     .catch(err => {
       res.status(500).send({
         message: "Could not delete Payment with id=" + id
       });
     });
 };
 
 // Delete all Payments from the database.
 exports.deleteAll = (req, res) => {
   Payment.destroy({
     where: {},
     truncate: false
   })
     .then(nums => {
       res.send({ message: `${nums} Payments were deleted successfully!` });
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while removing all Payments."
       });
     });
 };
 
 