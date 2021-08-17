/**
 * Author:Dawtie
 * Controller for QuestionPaper
 */
 const model = require("../models");
 const QuestionPaper = model.db.questionpaper;
 
 
 
 // Add or Register a new QuestionPaper
 exports.create = (req, res) => { 
 
   // Add a QuestionPaper
   const qpaper = {
    qstPaperPdf: req.body.qstPaperPdf,
    dateTime: req.body.dateTime,
  
   };
 
   // Save QuestionPaper in the database
   QuestionPaper.create(qpaper)
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while adding QuestionPaper."
       });
     });
 };
 
 // Retrieve all QuestionPapers from the database.
 exports.findAll = (req, res) => {
   
   QuestionPaper.findAll()
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while retrieving QuestionPapers."
       });
     });
 };
 
 // Find a QuestionPaper with an id
 exports.findOne = (req, res) => {
   const id = req.params.id;
 
   QuestionPaper.findByPk(id)
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message: "Error retrieving QuestionPaper with id=" + id
       });
     });
 };
 
 // Update a QuestionPaper by the id in the request
 exports.update = (req, res) => {
   const id = req.params.id;
   QuestionPaper.update(req.body, {
     where: { id: id }
   })
     .then(num => {
       if (num == 1) {
         res.send({
           message: "QuestionPaper details  updated successfully."
         });
       } else {
         res.send({
           message: `Cannot update QuestionPaper with id=${id}. Maybe QuestionPaper was not found or req.body is empty!`
         });
       }
     })
     .catch(err => {
       res.status(500).send({
         message: "Error updating QuestionPaper with id=" + id
       });
     });
 };
 
 // Delete a QuestionPaper with the specified id in the request
 exports.delete = (req, res) => {
   const id = req.params.id;
 
   QuestionPaper.destroy({
     where: { id: id }
   })
     .then(num => {
       if (num == 1) {
         res.send({
           message: "QuestionPaper was deleted successfully!"
         });
       } else {
         res.send({
           message: `Cannot delete QuestionPaper with id=${id}. Maybe QuestionPaper was not found!`
         });
       }
     })
     .catch(err => {
       res.status(500).send({
         message: "Could not delete QuestionPaper with id=" + id
       });
     });
 };
 
 // Delete all QuestionPapers from the database.
 exports.deleteAll = (req, res) => {
   QuestionPaper.destroy({
     where: {},
     truncate: false
   })
     .then(nums => {
       res.send({ message: `${nums} QuestionPapers were deleted successfully!` });
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while removing all QuestionPapers."
       });
     });
 };
 
 