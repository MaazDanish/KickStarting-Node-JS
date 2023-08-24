const fs = require('fs');
const { buffer } = require('stream/consumers');

const requestHandler = (req, res) => {
	const url = req.url;
	const method = req.method;
	if (url === '/') {
		fs.readFile('message.txt', (err, data) => {
			if (err) {
				res.writeHead(500, { 'Content-Type': 'text/plan' });
				return res.end('Internal server error');
			}
			res.write('<html>');
			res.write('<head> <title> first page </title> </head>');
			res.write(`<body><p>${data}</p><form action="/message" method="POST"> <input type="text" name="message"><button type="submit">Send</button> </form></body>`);
			res.write('</html>');
			return res.end();  // used to cancel the response  or end the response server
		})
	}
	if (url === '/message' && method === 'POST') {
		const body = [];
		req.on('data', (chunk) => {
			console.log(chunk);
			body.push(chunk);
		})
		return req.on('end', () => {
			const parsedBody = Buffer.concat(body).toString();  // will catch data from chunk which is going on
			const message = parsedBody.split('=')[1];  // will store data in it 
			fs.writeFile('message.txt', message, err => {
				res.statusCode = 302;
				res.setHeader('Location', '/');
				return res.end();
			});  // will sent data to new file to store 
		});
	}
}

//  how to connect to js files together - there three way 

// First Way to link to files
// module.exports = requestHandler;

//  Second way to link two js files
// module.exports = {
// 	handler : requestHandler,
// 	someTexts:'Hey I am linking the two js files together so that code looks clean and neat'
// }

// Third way to link
exports.handler = requestHandler;
exports.someText = "HEY I M USING THIRD WAY TO LINK TO TWO JS FILE TOGETHER SO CODE LOOKS CLEAN AND NEAT";