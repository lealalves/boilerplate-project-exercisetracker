const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema({
	userId: {
		required: true,
		type: mongoose.Types.ObjectId,
		ref: 'User'
	},
  username:{
    type: String,
    required: true
  },
	description: {
		required: true,
		type: String
	},
	duration: {
		required: true,
		type: Number
	},
	date: {
		type: Date,
		required: true
	}
})

const Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = Exercise