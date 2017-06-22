const PythonShell = require('python-shell')
const axios = require('axios')


const pyTester = new PythonShell('pyTester.py', {mode: 'json'})

let output = ''
pyTester.stdout.on('data', data => {
  output += '' + data
})

axios.get('https://pacific-falls-40871.herokuapp.com/api/allData')
.then(res => res.data)
.then(data => {
  pyTester.send(data).end(err => {
    if (err) console.error(err)
    console.log(output)
  })
})
.catch(console.error)
