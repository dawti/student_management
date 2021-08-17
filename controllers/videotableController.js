/**
 * Author:Dawtie
 * Controller for VideoTable
 */
 const model = require("../models");
 const VideoTable = model.db.videotable;
 
 
 
 // Add or Register a new VideoTable
 exports.create = (req, res) => { 
 
   // Add a VideoTable
   const video = {
    video: req.body.video,
  
   };
 
   // Save VideoTable in the database
   VideoTable.create(video)
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while adding VideoTable."
       });
     });
 };
 
 // Retrieve all VideoTables from the database.
 exports.findAll = (req, res) => {
   
   VideoTable.findAll()
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while retrieving VideoTables."
       });
     });
 };
 
 // Find a VideoTable with an id
 exports.findOne = (req, res) => {
   const id = req.params.id;
 
   VideoTable.findByPk(id)
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message: "Error retrieving VideoTable with id=" + id
       });
     });
 };
 
 // Update a VideoTable by the id in the request
 exports.update = (req, res) => {
   const id = req.params.id;
   VideoTable.update(req.body, {
     where: { id: id }
   })
     .then(num => {
       if (num == 1) {
         res.send({
           message: "VideoTable details  updated successfully."
         });
       } else {
         res.send({
           message: `Cannot update VideoTable with id=${id}. Maybe VideoTable was not found or req.body is empty!`
         });
       }
     })
     .catch(err => {
       res.status(500).send({
         message: "Error updating VideoTable with id=" + id
       });
     });
 };
 
 // Delete a VideoTable with the specified id in the request
 exports.delete = (req, res) => {
   const id = req.params.id;
 
   VideoTable.destroy({
     where: { id: id }
   })
     .then(num => {
       if (num == 1) {
         res.send({
           message: "VideoTable was deleted successfully!"
         });
       } else {
         res.send({
           message: `Cannot delete VideoTable with id=${id}. Maybe VideoTable was not found!`
         });
       }
     })
     .catch(err => {
       res.status(500).send({
         message: "Could not delete VideoTable with id=" + id
       });
     });
 };
 
 // Delete all VideoTables from the database.
 exports.deleteAll = (req, res) => {
   VideoTable.destroy({
     where: {},
     truncate: false
   })
     .then(nums => {
       res.send({ message: `${nums} VideoTables were deleted successfully!` });
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while removing all VideoTables."
       });
     });
 };
 
 