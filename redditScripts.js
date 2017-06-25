const secrets = require('./secrets.js')
const snoowrap = require('snoowrap')

const r = new snoowrap({
	userAgent: secrets.USER_AGENT,
	clientId: secrets.CLIENT_ID,
	clientSecret: secrets.CLIENT_SECRET,
	username: secrets.USERNAME,
	password: secrets.PASSWORD,
})

console.log(r.getHot())
