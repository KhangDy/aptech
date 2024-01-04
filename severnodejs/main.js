const http = require('http')
const PORT =4000
const server = http.createServer((req, res) =>{
    res.setHeader('Content-Type', 'application/json')
    res.end('hello world')
})

server.listen(PORT, () => {
    console.log('server is running on $(PORT)')
})