const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema({
	_id: {
		required: true,
		type: mongoose.Types.ObjectId,
		ref: 'User'
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
		default: Date.now()
	}
})

const Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = Exercise