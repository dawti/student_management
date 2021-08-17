/**
 * Author:Dawtie
 * Controller for ExamType
 */
 const model = require("../models");
 const ExamType = model.db.examtype;
 
 
 
 // Add or Register a new ExamType
 exports.create = (req, res) => { 
 
   // Add a ExamType
   const exmtype = {
    examType: req.body.examType,
    totalMark: req.body.totalMark,
   };
 
   // Save ExamType in the database
   ExamType.create(exmtype)
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while adding ExamType."
       });
     });
 };
 
 // Retrieve all ExamTypes from the database.
 exports.findAll = (req, res) => {
   
   ExamType.findAll()
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while retrieving ExamTypes."
       });
     });
 };
 
 // Find a ExamType with an id
 exports.findOne = (req, res) => {
   const id = req.params.id;
 
   ExamType.findByPk(id)
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message: "Error retrieving ExamType with id=" + id
       });
     });
 };
 
 // Update a ExamType by the id in the request
 exports.update = (req, res) => {
   const id = req.params.id;
   ExamType.update(req.body, {
     where: { id: id }
   })
     .then(num => {
       if (num == 1) {
         res.send({
           message: "ExamType details  updated successfully."
         });
       } else {
         res.send({
           message: `Cannot update ExamType with id=${id}. Maybe ExamType was not found or req.body is empty!`
         });
       }
     })
     .catch(err => {
       res.status(500).send({
         message: "Error updating ExamType with id=" + id
       });
     });
 };
 
 // Delete a ExamType with the specified id in the request
 exports.delete = (req, res) => {
   const id = req.params.id;
 
   ExamType.destroy({
     where: { id: id }
   })
     .then(num => {
       if (num == 1) {
         res.send({
           message: "ExamType was deleted successfully!"
         });
       } else {
         res.send({
           message: `Cannot delete ExamType with id=${id}. Maybe ExamType was not found!`
         });
       }
     })
     .catch(err => {
       res.status(500).send({
         message: "Could not delete ExamType with id=" + id
       });
     });
 };
 
 // Delete all ExamTypes from the database.
 exports.deleteAll = (req, res) => {
   ExamType.destroy({
     where: {},
     truncate: false
   })
     .then(nums => {
       res.send({ message: `${nums} ExamTypes were deleted successfully!` });
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while removing all ExamTypes."
       });
     });
 };
 
 