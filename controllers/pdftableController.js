/**
 * Author:Dawtie
 * Controller for PdfTable
 */
 const model = require("../models");
 const PdfTable = model.db.pdftable;
 
 
 
 // Add or Register a new PdfTable
 exports.create = (req, res) => { 
 
   // Add a PdfTable
   const pdffile = {
    pdf: req.body.pdf,
  
   };
 
   // Save PdfTable in the database
   PdfTable.create(pdffile)
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while adding PdfTable."
       });
     });
 };
 
 // Retrieve all PdfTables from the database.
 exports.findAll = (req, res) => {
   
   PdfTable.findAll()
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while retrieving PdfTables."
       });
     });
 };
 
 // Find a PdfTable with an id
 exports.findOne = (req, res) => {
   const id = req.params.id;
 
   PdfTable.findByPk(id)
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message: "Error retrieving PdfTable with id=" + id
       });
     });
 };
 
 // Update a PdfTable by the id in the request
 exports.update = (req, res) => {
   const id = req.params.id;
   PdfTable.update(req.body, {
     where: { id: id }
   })
     .then(num => {
       if (num == 1) {
         res.send({
           message: "PdfTable details  updated successfully."
         });
       } else {
         res.send({
           message: `Cannot update PdfTable with id=${id}. Maybe PdfTable was not found or req.body is empty!`
         });
       }
     })
     .catch(err => {
       res.status(500).send({
         message: "Error updating PdfTable with id=" + id
       });
     });
 };
 
 // Delete a PdfTable with the specified id in the request
 exports.delete = (req, res) => {
   const id = req.params.id;
 
   PdfTable.destroy({
     where: { id: id }
   })
     .then(num => {
       if (num == 1) {
         res.send({
           message: "PdfTable was deleted successfully!"
         });
       } else {
         res.send({
           message: `Cannot delete PdfTable with id=${id}. Maybe PdfTable was not found!`
         });
       }
     })
     .catch(err => {
       res.status(500).send({
         message: "Could not delete PdfTable with id=" + id
       });
     });
 };
 
 // Delete all PdfTables from the database.
 exports.deleteAll = (req, res) => {
   PdfTable.destroy({
     where: {},
     truncate: false
   })
     .then(nums => {
       res.send({ message: `${nums} PdfTables were deleted successfully!` });
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while removing all PdfTables."
       });
     });
 };
 
 