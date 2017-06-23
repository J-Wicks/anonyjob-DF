const PythonShell = require('python-shell')
const bluebird = require('bluebird')
const axios = require('axios')
const fs = require('fs')
// const mkdir = bluebird.promisify(fs.mkdir)
// const writeFile = bluebird.promisify(fs.writeFile)
const fileByCat = require('./utils').fileByCat

const pyTester = new PythonShell('pyTester.py', {mode: 'json'})

let output = ''
pyTester.stdout.on('data', data => {
  output += '' + data
})

axios.get('https://pacific-falls-40871.herokuapp.com/api/allData')
.then(res => res.data)
.then(data => {
  data.forEach((user, idx) => {
    fileByCat(user, idx, 'race')
    fileByCat(user, idx, 'orientation')
    fileByCat(user, idx, 'gender')
  })
})