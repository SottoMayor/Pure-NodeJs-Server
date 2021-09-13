const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
})

// To starts up the server, write in the terminal 'node app.js' 
// and go to http://localhost:3000 and hit enter.
server.listen(3000);