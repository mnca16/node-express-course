const studentNames = require('./names.js')
const studentsList = require('./utils.js')
const data = require('./alternative-flavor.js')

console.log("studentNames", studentNames)
studentsList(studentNames)
console.log("data", data)
console.log("students's names", data.studentsCurrentClasses.map((data) => data.name))