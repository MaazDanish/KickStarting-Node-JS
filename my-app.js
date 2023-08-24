const http = require('http');
const routes = require('./routes');

// const server = http.createServer(routes);
// const server = http.createServer(routes.handler);
// console.log(routes.someTexts);

const server = http.createServer(routes.handler);
console.log(routes.someText);


const port = 4002;
const hostName = '127.0.0.1';

server.listen(port,hostName,() =>  console.log(`The server is running on the port ${port} and the host ${hostName}`));