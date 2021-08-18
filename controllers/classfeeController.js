/**
 * Author:Dawtie
 * Controller for Class Fee 
 */
 const model = require("../models");
 const ClassFee = model.db.class_fee;

 
 
 // Add  a new ClassFee
 exports.create = (req, res) => { 
 
   // Add a ClassFee
   const classfee = {
    classFeeAmount: req.body.classFeeAmount
   };
 
   // Save ClassFee in the database
   ClassFee.create(classfee)
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while adding ClassFee."
       });
     });
 };
 
 // Retrieve all ClassFees from the database.
 exports.findAll = (req, res) => {
   
   ClassFee.findAll()
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while retrieving ClassFees."
       });
     });
 };
 
 // Find a ClassFee with an id
 exports.findOne = (req, res) => {
   const id = req.params.id;
 
   ClassFee.findByPk(id)
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message: "Error retrieving ClassFee with id=" + id
       });
     });
 };
 
 // Update a ClassFee by the id in the request
 exports.update = (req, res) => {
   const id = req.params.id;
 
   ClassFee.update(req.body, {
     where: { id: id }
   })
     .then(num => {
       if (num == 1) {
         res.send({
           message: "ClassFee details  updated successfully."
         });
       } else {
         res.send({
           message: `Cannot update ClassFee with id=${id}. Maybe ClassFee was not found or req.body is empty!`
         });
       }
     })
     .catch(err => {
       res.status(500).send({
         message: "Error updating ClassFee with id=" + id
       });
     });
 };
 
 // Delete a ClassFee with the specified id in the request
 exports.delete = (req, res) => {
   const id = req.params.id;
 
   ClassFee.destroy({
     where: { id: id }
   })
     .then(num => {
       if (num == 1) {
         res.send({
           message: "ClassFee was deleted successfully!"
         });
       } else {
         res.send({
           message: `Cannot delete ClassFee with id=${id}. Maybe ClassFee was not found!`
         });
       }
     })
     .catch(err => {
       res.status(500).send({
         message: "Could not delete ClassFee with id=" + id
       });
     });
 };
 
 // Delete all ClassFees from the database.
 exports.deleteAll = (req, res) => {
   ClassFee.destroy({
     where: {},
     truncate: false
   })
     .then(nums => {
       res.send({ message: `${nums} ClassFees were deleted successfully!` });
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while removing all ClassFees."
       });
     });
 };
 
 