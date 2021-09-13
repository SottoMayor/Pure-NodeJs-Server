const http = require('http');

const server = http.createServer((req, res) => {
    // Working with requests
    console.log(req.url, req.method, req.headers);

    // Working with responses
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>NodeJs Page</title></head>')
    res.write('<body><h1>NodeJs says: "Hey Buddy!"</h1></body>')
    res.write('</html>')
    res.end();
})

// To starts up the server, write in the terminal 'node app.js' 
// and go to http://localhost:3000 and hit enter.
server.listen(3000);