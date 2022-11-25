
const User = require('../models/User')

const addUser = async (req, res) => {
	
	const username = req.body.username

	const user = new User({
		username: username
	})

	await user.save()
	.then(data => {
		return res.send({username: data.username, _id: data._id})
	})
	.catch(err => {
		res.send(err)
	})
}

const listUsers = async (req, res) => {
	let users = await User.find()

	res.send(users)
}

module.exports = { addUser, listUsers }