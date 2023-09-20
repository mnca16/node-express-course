const studentNames = require('./names.js')

// Alternative way, also called export as you go

const numStudents = 3 

module.exports.classes = ["react", "node", "ruby on rails"]

module.exports.studentsCurrentClasses = [
    {
        name: studentNames.name1,
        classes: ["node", "react"],
        semester: 'fall'
    },
    {
        name: studentNames.name2,
        classes: ["node", "ruby on rails"],
        semester: "summer"

    },
    {
        name: studentNames.name3,
        classes: ["node", "ruby on rails", "react"],
        semester: "sprint"
    }
]
module.exports.studentData = numStudents
