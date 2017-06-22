const PythonShell = require('python-shell')
const pyTester = new PythonShell('pyTester.py')

pyTester.on('message', (message) => {
  console.log(message)
})
