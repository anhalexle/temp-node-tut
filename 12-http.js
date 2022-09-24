const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req)
    if(req.url === '/') {
        res.write('Welcome to our home page');
        res.end();
        return
    }
    // res.write();
    // res.end()
    if(req.url === '/about') {
        res.write('Here is our short history');
        res.end();
        return
    }
    res.write(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `);
    res.end();
})

server.listen(5000);