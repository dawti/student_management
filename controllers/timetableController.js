/**
 * Author:Dawtie
 * Controller for login
*/
const model = require("../models");
// write modelname 
const TimeTable =model.db.timetable;
//const Op =model.db.Op;

// Create and Save a new useraccount
exports.create = (req, res) => {
 
  // Create a TimeTable
  const timetab = {
    day: req.body.day,
    time:req.body.time,
    duration: req.body.duration,
    // teacherId:req.body.teacher,
    // courseId:req.body.course,
    // classId:req.body.class
  };

  // Save User Account in the database
  TimeTable.create(timetab)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Account."
      });
    });
};

// Retrieve all given Account Info from the database.
exports.findAll = (req, res) => {
  const id = req.params.id;

  TimeTable.findAll( {  where: { id: id } } )
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving User account."
      });
    });
};


// Update an account by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  TimeTable.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Account was updated successfully."
        });
      } else {
        res.send({
          message: "Cannot update Account with id=${id}. "
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Account with id=" + id
      });
    });
};

// Delete an Account with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  TimeTable.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Account was deleted successfully!"
        });
      } else {
        res.send({
          message: "Cannot delete Account with id=${id}. Maybe Account was not found!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Account with id=" + id
      });
    });
};