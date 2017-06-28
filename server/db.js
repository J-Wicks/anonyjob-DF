const Sequelize = require('sequelize')

const writingSamplesDB = new Sequelize( process.env.DATABASE_URL || 'postgres://localhost:5432/writingsamples', {
	logging: false
})


module.exports = {writingSamplesDB}
