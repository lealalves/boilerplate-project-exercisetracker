require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

const userController = require('./controllers/Users')
const exerciseController = require('./controllers/Exercises')

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.catch(err => console.log(err))

app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

app.route('/api/users')
.post((req, res) => userController.addUser(req, res))
.get((req, res) => userController.listUsers(req, res))

app.route('/api/users/:_id/exercises')
.post((req, res) => exerciseController.addExercise(req, res))


const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
