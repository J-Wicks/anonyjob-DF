const PythonShell = require('python-shell')
const axios = require('axios')
const fs = require('fs')


const pyTester = new PythonShell('pyTester.py', {mode: 'json'})

let output = ''
pyTester.stdout.on('data', data => {
  output += '' + data
})

axios.get('https://pacific-falls-40871.herokuapp.com/api/allData')
.then(res => res.data)
.then(data => {
  // pyTester.send(data).end(err => {
  //   if (err) console.error(err)
  //   console.log(output)
  data.forEach((user, idx) => {
    if (!fs.existsSync(__dirname + `/Categories/Gender/${user.gender}`)) {
      fs.mkdir(__dirname + `/Categories/Gender/${user.gender}`, (err) => {
        if (err) throw err;
        console.log('Folder created.')
      })
    }
    else {
      console.log('Folder already exists.')
    }
  })
})
.catch(console.error)
