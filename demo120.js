const http = require('http');
const port =3000;

const server = http.createServer((req, res) => {
	res.writeHead(200, {'Content-type':'text/plain'});
	res.end('Hello World\n');
});

server.listen(port, 'localhost', () => {
	console.log(`Server running a http://localhost:${port}/`);
});