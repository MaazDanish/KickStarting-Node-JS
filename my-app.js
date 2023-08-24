const http = require('http');

const server = http.createServer((req, res) => {
	const url = req.url;
	if(url === '/home'){
		return res.end(`<h1> welcome home </h1>`);
	}else if(url === '/about'){
		return res.end(`<h1> welcome about us page </h1>`);
	}else if(url === '/node'){
		return res.end(`<h1> welcome Node js server </h1>`);
	}
	res.setHeader('Content-Type', 'text/html');
	// res.write('<html>');
	// res.write('<head> <title> first page </title> </head>');
	// res.write('<body><h1> THIS IS MAAZ DANISH KA FIRST RESPONSE SERVER FROM NODE JS SERVER</h1></body>');
	// res.write('</html>');
	res.end(`
	<html>
	<head> <title> first page </title> </head>
	<body><h1> THIS IS MAAZ DANISH KA FIRST RESPONSE SERVER FROM NODE JS SERVER</h1></body>
	</html>');
	`);
});

const port = 4000;
const hostName =  '127.0.0.1';
server.listen(port,hostName, () => {
	console.log(`Server running at http://${hostName}:${port}/`);
});