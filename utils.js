const bluebird = require('bluebird')
const fs = require('fs')
const mkdir = bluebird.promisify(fs.mkdir)
const writeFile = bluebird.promisify(fs.writeFile)

const fileByCat = function(user, index, category) {
	console.log(user, index, category)
    let subCategory = user[category].replace(/[ ]/ig, "_");

    	if(!fs.existsSync(__dirname + `/Categories/${category}`)){
    		fs.mkdirSync(__dirname+`/Categories/${category}`)
    	}
    	if (!fs.existsSync(__dirname + `/Categories/${category}/${subCategory}`)){

        mkdir(__dirname + `/Categories/${category}/${subCategory}`)
        .then( result => {
          return writeFile(__dirname+`/Categories/${category}/${subCategory}/${index}`, user.writing)
        })
        .catch(console.error) 

      } else {
        writeFile(__dirname+`/Categories/${category}/${subCategory}/${index}`, user.writing)
		}
	}

module.exports = {fileByCat}