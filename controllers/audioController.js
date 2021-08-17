/**
 * Author:Dawtie
 * Controller for Audio
 */
 const model = require("../models");
 const Audio = model.db.audio;
 
 
 
 // Add or Register a new Audio
 exports.create = (req, res) => { 
 
   // Add a Audio
   const audio = {
    audioFile: req.body.audioFile,
    time: req.body.time,
   
  
   };
 
   // Save Audio in the database
   Audio.create(audio)
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while adding Audio."
       });
     });
 };
 
 // Retrieve all Audios from the database.
 exports.findAll = (req, res) => {
   
   Audio.findAll()
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while retrieving Audios."
       });
     });
 };
 
 // Find a Audio with an id
 exports.findOne = (req, res) => {
   const id = req.params.id;
 
   Audio.findByPk(id)
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message: "Error retrieving Audio with id=" + id
       });
     });
 };
 
 // Update a Audio by the id in the request
 exports.update = (req, res) => {
   const id = req.params.id;
   Audio.update(req.body, {
     where: { id: id }
   })
     .then(num => {
       if (num == 1) {
         res.send({
           message: "Audio details  updated successfully."
         });
       } else {
         res.send({
           message: `Cannot update Audio with id=${id}. Maybe Audio was not found or req.body is empty!`
         });
       }
     })
     .catch(err => {
       res.status(500).send({
         message: "Error updating Audio with id=" + id
       });
     });
 };
 
 // Delete a Audio with the specified id in the request
 exports.delete = (req, res) => {
   const id = req.params.id;
 
   Audio.destroy({
     where: { id: id }
   })
     .then(num => {
       if (num == 1) {
         res.send({
           message: "Audio was deleted successfully!"
         });
       } else {
         res.send({
           message: `Cannot delete Audio with id=${id}. Maybe Audio was not found!`
         });
       }
     })
     .catch(err => {
       res.status(500).send({
         message: "Could not delete Audio with id=" + id
       });
     });
 };
 
 // Delete all Audios from the database.
 exports.deleteAll = (req, res) => {
   Audio.destroy({
     where: {},
     truncate: false
   })
     .then(nums => {
       res.send({ message: `${nums} Audios were deleted successfully!` });
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while removing all Audios."
       });
     });
 };
 
 