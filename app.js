const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method;

    if(url === '/write-message'){
        res.write('<html>')
        res.write('<head><title>NodeJs Page</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="writer"/><button type="submit">There you go!</button></form></body>');
        res.write('</html>')
        return res.end();
    }

    if(url === '/message' && method === 'POST') {
        fs.writeFileSync('message.txt', 'Some dummy text here!!!');
        res.statusCode = 302;
        res.setHeader('Location', '/write-message');
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>NodeJs Page</title></head>');
    res.write('<body><h1>NodeJs says: "Hey Buddy!"</h1><a href="/write-message">Write some message!</a></body>');
    res.write('</html>');
    res.end();
})

// To starts up the server, write in the terminal 'node app.js' 
// and go to http://localhost:3000 and hit enter.
server.listen(3000);