/**
 * Author:Dawtie
 * Controller for Mark
 */
 const model = require("../models");
 const Mark = model.db.exammark;
 
 
 
 // Add or Register a new Mark
 exports.create = (req, res) => { 
 
   // Add a Mark
   const mark = {
    mark: req.body.mark,
  
   };
 
   // Save Mark in the database
   Mark.create(mark)
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while adding Mark."
       });
     });
 };
 
 // Retrieve all Marks from the database.
 exports.findAll = (req, res) => {
   
   Mark.findAll()
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while retrieving Marks."
       });
     });
 };
 
 // Find a Mark with an id
 exports.findOne = (req, res) => {
   const id = req.params.id;
 
   Mark.findByPk(id)
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message: "Error retrieving Mark with id=" + id
       });
     });
 };
 
 // Update a Mark by the id in the request
 exports.update = (req, res) => {
   const id = req.params.id;
   Mark.update(req.body, {
     where: { id: id }
   })
     .then(num => {
       if (num == 1) {
         res.send({
           message: "Mark details  updated successfully."
         });
       } else {
         res.send({
           message: `Cannot update Mark with id=${id}. Maybe Mark was not found or req.body is empty!`
         });
       }
     })
     .catch(err => {
       res.status(500).send({
         message: "Error updating Mark with id=" + id
       });
     });
 };
 
 // Delete a Mark with the specified id in the request
 exports.delete = (req, res) => {
   const id = req.params.id;
 
   Mark.destroy({
     where: { id: id }
   })
     .then(num => {
       if (num == 1) {
         res.send({
           message: "Mark was deleted successfully!"
         });
       } else {
         res.send({
           message: `Cannot delete Mark with id=${id}. Maybe Mark was not found!`
         });
       }
     })
     .catch(err => {
       res.status(500).send({
         message: "Could not delete Mark with id=" + id
       });
     });
 };
 
 // Delete all Marks from the database.
 exports.deleteAll = (req, res) => {
   Mark.destroy({
     where: {},
     truncate: false
   })
     .then(nums => {
       res.send({ message: `${nums} Marks were deleted successfully!` });
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while removing all Marks."
       });
     });
 };
 
 