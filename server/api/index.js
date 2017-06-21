const router = require('express').Router();
const User = require('../models').User
const Gender = require('../models').Gender
const Orientation = require('../models').Orientation
const Race = require('../models').Race

router.get('/', function(req, res, next){
	res.status(200).send('good job hitting the route, but i\'m not going to send you any of our user data')
})

router.post('/', (req, res, next) => {
	User.create({
		age: req.body.age,
		race: req.body.race,
		writing: req.body.writingSample,
	})
	.then( createdUser => {
		Gender.findOrCreate({where: {name: req.body.gender}})
		.spread( (gender, created) => {
			gender.addUser(createdUser)
		})
		Orientation.findOrCreate({where: {name: req.body.orientation}})
		.spread( (orientation, created) => {
			orientation.addUser(createdUser)
		})
		Race.findOrCreate({where: {name: req.body.race}})
		.spread ((race, created)=>{
			race.addUser(createdUser)
		})
	})
	res.status(200).send('Database Row Added')
})
module.exports = router