const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url

    if(url === '/write-message'){
        res.write('<html>')
        res.write('<head><title>NodeJs Page</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="writer"/><button type="submit">There you go!</button></form></body>');
        res.write('</html>')
        return res.end();
    }


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