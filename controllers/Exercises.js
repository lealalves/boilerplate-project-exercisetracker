const Exercise = require('../models/Exercise')
const User = require('../models/User')

const addExercise = async (req, res) => {
	const { description, duration, date } = req.body
	
	const idUser = req.params._id

	User.findById(idUser)
	.then(user => {
		if(!user) return res.send({message: 'User not found'})    

		const exercise = new Exercise({
			userId: idUser,
			username: user.username,
			duration: Number(duration),
			description: description,
			date: date.length > 0 ? date : Date.now()
		})

		exercise.save()
		.then(({username, description, date, duration, userId}) => {
			res.send({
				username: username,
				description: description,
				duration: duration,
				date: date.toDateString(),
				_id: userId
			})
		})
		.catch(err => res.send(err))

	})
	.catch(err => res.send(err))  
}

const listExercise = (req, res) => {
	const userId = req.params._id

	User.findById(userId)
	.then(user => {
		if(!user) return res.send({message: 'User not found'})

		Exercise.find({userId: userId})
		.then(data => {
			let exercises = data.map(({description, duration, date}) => {
				return {
					description: description,
					duration: duration,
					date: date.toDateString()
				}
			})
			
			res.send({
				_id: userId,
				username: user.username,
				count: exercises.length,
				log: exercises
			})

		})
		.catch(err => console.log(err))

	})
}

module.exports = { addExercise, listExercise }