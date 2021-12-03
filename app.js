const http = require("http");
const routes = require('./routes')

// const rqListener = (req, res) => {

// };

const server = http.createServer(routes.handler);

console.log(routes.someText)

server.listen(3000);
