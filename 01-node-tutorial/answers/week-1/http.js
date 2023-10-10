const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.write("This is my first server ever!!!! Welcome mi gente!")
        res.end()
    }
})

server.listen(3000)