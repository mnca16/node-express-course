const studentNames = require('./names.js')
const data = require('./alternative-flavor.js')

const studentCurrClass = (student, currClass) => {
    console.log(`student name: ${student.name1}  current semester:${currClass[0]} ${currClass[1]}`)
} 

studentCurrClass(studentNames, data.classes)