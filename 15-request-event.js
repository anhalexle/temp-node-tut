const http = require('http');

//C1:

// const server = http.createServer((req, res) =>{
//     res.end('Welcome');
// })


// Using Event Emitter API
//C2

const server = http.createServer()
//emits request event
// subcribe to it / listen for it / respond to it

server.on('request', (req, res) => {
    res.end('welcome');
})

server.listen(5000);