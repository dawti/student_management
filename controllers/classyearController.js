/**
 * Author:Dawtie
 * Controller for ClassYear
 */
 const model = require("../models");
 const ClassYear = model.db.classyear;
 
 
 
 // Add or Register a new ClassYear
 exports.create = (req, res) => { 
 
   // Add a ClassYear
   const year = {
    name: req.body.name,
    startDate: req.body.startDate,
    endDate: req.body.endDate,  
   };
 
   // Save ClassYear in the database
   ClassYear.create(year)
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while adding ClassYear."
       });
     });
 };
 
 // Retrieve all ClassYears from the database.
 exports.findAll = (req, res) => {
   
   ClassYear.findAll()
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while retrieving ClassYears."
       });
     });
 };
 
 // Find a ClassYear with an id
 exports.findOne = (req, res) => {
   const id = req.params.id;
 
   ClassYear.findByPk(id)
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message: "Error retrieving ClassYear with id=" + id
       });
     });
 };
 
 // Update a ClassYear by the id in the request
 exports.update = (req, res) => {
   const id = req.params.id;
   ClassYear.update(req.body, {
     where: { id: id }
   })
     .then(num => {
       if (num == 1) {
         res.send({
           message: "ClassYear details  updated successfully."
         });
       } else {
         res.send({
           message: `Cannot update ClassYear with id=${id}. Maybe ClassYear was not found or req.body is empty!`
         });
       }
     })
     .catch(err => {
       res.status(500).send({
         message: "Error updating ClassYear with id=" + id
       });
     });
 };
 
 // Delete a ClassYear with the specified id in the request
 exports.delete = (req, res) => {
   const id = req.params.id;
 
   ClassYear.destroy({
     where: { id: id }
   })
     .then(num => {
       if (num == 1) {
         res.send({
           message: "ClassYear was deleted successfully!"
         });
       } else {
         res.send({
           message: `Cannot delete ClassYear with id=${id}. Maybe ClassYear was not found!`
         });
       }
     })
     .catch(err => {
       res.status(500).send({
         message: "Could not delete ClassYear with id=" + id
       });
     });
 };
 
 // Delete all ClassYears from the database.
 exports.deleteAll = (req, res) => {
   ClassYear.destroy({
     where: {},
     truncate: false
   })
     .then(nums => {
       res.send({ message: `${nums} ClassYears were deleted successfully!` });
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while removing all ClassYears."
       });
     });
 };
 
 