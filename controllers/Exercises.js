const Exercise = require('../models/Exercise')

const addExercise = (req, res) => {
  const { description, duration, date } = req.body
  console.log(req.params._id);
  console.log(description);
}

module.exports = { addExersise }