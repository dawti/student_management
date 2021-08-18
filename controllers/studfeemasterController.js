/**
 * Author:Dawtie
 * Controller for Student Fee master
 */
 const model = require("../models");
 const StudentMaster = model.db.stud_fee_master;

 
 
 // Add  a new StudentMaster
 exports.create = (req, res) => { 
 
   // Add a StudentMaster
   const studentmaster = {
    financialYear: req.body.financialYear,
    totalAmount:req.body.totalAmount,
    
     
   };
 
   // Save StudentMaster in the database
   StudentMaster.create(studentmaster)
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while adding StudentMaster."
       });
     });
 };
 
 // Retrieve all StudentMasters from the database.
 exports.findAll = (req, res) => {
   
   StudentMaster.findAll()
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while retrieving StudentMasters."
       });
     });
 };
 
 // Find a StudentMaster with an id
 exports.findOne = (req, res) => {
   const id = req.params.id;
 
   StudentMaster.findByPk(id)
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message: "Error retrieving StudentMaster with id=" + id
       });
     });
 };
 
 // Update a StudentMaster by the id in the request
 exports.update = (req, res) => {
   const id = req.params.id;
 
   StudentMaster.update(req.body, {
     where: { id: id }
   })
     .then(num => {
       if (num == 1) {
         res.send({
           message: "StudentMaster details  updated successfully."
         });
       } else {
         res.send({
           message: `Cannot update StudentMaster with id=${id}. Maybe StudentMaster was not found or req.body is empty!`
         });
       }
     })
     .catch(err => {
       res.status(500).send({
         message: "Error updating StudentMaster with id=" + id
       });
     });
 };
 
 // Delete a StudentMaster with the specified id in the request
 exports.delete = (req, res) => {
   const id = req.params.id;
 
   StudentMaster.destroy({
     where: { id: id }
   })
     .then(num => {
       if (num == 1) {
         res.send({
           message: "StudentMaster was deleted successfully!"
         });
       } else {
         res.send({
           message: `Cannot delete StudentMaster with id=${id}. Maybe StudentMaster was not found!`
         });
       }
     })
     .catch(err => {
       res.status(500).send({
         message: "Could not delete StudentMaster with id=" + id
       });
     });
 };
 
 // Delete all StudentMasters from the database.
 exports.deleteAll = (req, res) => {
   StudentMaster.destroy({
     where: {},
     truncate: false
   })
     .then(nums => {
       res.send({ message: `${nums} StudentMasters were deleted successfully!` });
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while removing all StudentMasters."
       });
     });
 };
 
 