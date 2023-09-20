// video

const http = require('http')

// the coolest console ever!
console.log("http", http)

// create server receives a call back function 
const server = http.createServer((req, res) => {
    //  res represents what we're sending back
    // For response we got a lot methods
    // write, end, etc 
    if (req.url === '/'){
       // res.write("This is my first server ever!!!! Welcome mi gente!")
        res.end("This is my first server ever!!!! Welcome mi gente!")
    }
    // req represents object for imcoming request 
    if (req.url === '/about') {
        res.end('Here is the start of a fun journey')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/page">back home </a>  
    `)
})

// What port our server is going to listen to 
server.listen(5000)