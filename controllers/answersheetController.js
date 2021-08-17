/**
 * Author:Dawtie
 * Controller for AnswerSheet
 */
 const model = require("../models");
 const AnswerSheet = model.db.answersheet;
 
 
 
 // Add or Register a new AnswerSheet
 exports.create = (req, res) => { 
 
   // Add a AnswerSheet
   const sheet = {
    answer_sheet: req.body.answer_sheet,
  
   };
 
   // Save AnswerSheet in the database
   AnswerSheet.create(sheet)
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while adding AnswerSheet."
       });
     });
 };
 
 // Retrieve all AnswerSheets from the database.
 exports.findAll = (req, res) => {
   
   AnswerSheet.findAll()
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while retrieving AnswerSheets."
       });
     });
 };
 
 // Find a AnswerSheet with an id
 exports.findOne = (req, res) => {
   const id = req.params.id;
 
   AnswerSheet.findByPk(id)
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message: "Error retrieving AnswerSheet with id=" + id
       });
     });
 };
 
 // Update a AnswerSheet by the id in the request
 exports.update = (req, res) => {
   const id = req.params.id;
   AnswerSheet.update(req.body, {
     where: { id: id }
   })
     .then(num => {
       if (num == 1) {
         res.send({
           message: "AnswerSheet details  updated successfully."
         });
       } else {
         res.send({
           message: `Cannot update AnswerSheet with id=${id}. Maybe AnswerSheet was not found or req.body is empty!`
         });
       }
     })
     .catch(err => {
       res.status(500).send({
         message: "Error updating AnswerSheet with id=" + id
       });
     });
 };
 
 // Delete a AnswerSheet with the specified id in the request
 exports.delete = (req, res) => {
   const id = req.params.id;
 
   AnswerSheet.destroy({
     where: { id: id }
   })
     .then(num => {
       if (num == 1) {
         res.send({
           message: "AnswerSheet was deleted successfully!"
         });
       } else {
         res.send({
           message: `Cannot delete AnswerSheet with id=${id}. Maybe AnswerSheet was not found!`
         });
       }
     })
     .catch(err => {
       res.status(500).send({
         message: "Could not delete AnswerSheet with id=" + id
       });
     });
 };
 
 // Delete all AnswerSheets from the database.
 exports.deleteAll = (req, res) => {
   AnswerSheet.destroy({
     where: {},
     truncate: false
   })
     .then(nums => {
       res.send({ message: `${nums} AnswerSheets were deleted successfully!` });
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while removing all AnswerSheets."
       });
     });
 };
 
 