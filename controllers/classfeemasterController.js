/**
 * Author:Dawtie
 * Controller for Class Fee master
 */
 const model = require("../models");
 const ClassMaster = model.db.class_fee_master;

 
 
 // Add  a new ClassMaster
 exports.create = (req, res) => { 
 
   // Add a ClassMaster
   const classmaster = {
    financialYear: req.body.financialYear,
    amount: req.body.amount,
    
     
   };
 
   // Save ClassMaster in the database
   ClassMaster.create(classmaster)
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while adding ClassMaster."
       });
     });
 };
 
 // Retrieve all ClassMasters from the database.
 exports.findAll = (req, res) => {
   
   ClassMaster.findAll()
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while retrieving ClassMasters."
       });
     });
 };
 
 // Find a ClassMaster with an id
 exports.findOne = (req, res) => {
   const id = req.params.id;
 
   ClassMaster.findByPk(id)
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message: "Error retrieving ClassMaster with id=" + id
       });
     });
 };
 
 // Update a ClassMaster by the id in the request
 exports.update = (req, res) => {
   const id = req.params.id;
 
   ClassMaster.update(req.body, {
     where: { id: id }
   })
     .then(num => {
       if (num == 1) {
         res.send({
           message: "ClassMaster details  updated successfully."
         });
       } else {
         res.send({
           message: `Cannot update ClassMaster with id=${id}. Maybe ClassMaster was not found or req.body is empty!`
         });
       }
     })
     .catch(err => {
       res.status(500).send({
         message: "Error updating ClassMaster with id=" + id
       });
     });
 };
 
 // Delete a ClassMaster with the specified id in the request
 exports.delete = (req, res) => {
   const id = req.params.id;
 
   ClassMaster.destroy({
     where: { id: id }
   })
     .then(num => {
       if (num == 1) {
         res.send({
           message: "ClassMaster was deleted successfully!"
         });
       } else {
         res.send({
           message: `Cannot delete ClassMaster with id=${id}. Maybe ClassMaster was not found!`
         });
       }
     })
     .catch(err => {
       res.status(500).send({
         message: "Could not delete ClassMaster with id=" + id
       });
     });
 };
 
 // Delete all ClassMasters from the database.
 exports.deleteAll = (req, res) => {
   ClassMaster.destroy({
     where: {},
     truncate: false
   })
     .then(nums => {
       res.send({ message: `${nums} ClassMasters were deleted successfully!` });
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while removing all ClassMasters."
       });
     });
 };
 
 