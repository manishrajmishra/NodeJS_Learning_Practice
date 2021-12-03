const http = require("http");
const routes = require('./routes')

// const rqListener = (req, res) => {

// };

const server = http.createServer(routes);

server.listen(3000);
