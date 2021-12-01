const http = require("http");
const fs = require('fs')

const rqListener = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write(
      '<html><head><title>Enter Message</title></head><body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body></html>'
    );
    return res.end();
  }
  if (url === "/message" && method === "POST"){
      const body = []
      req.on('data', (chunk) => {
          console.log(chunk)
          body.push(chunk)
      })
      req.on('end', () => {
          const parsedBody = Buffer.concat(body).toString()
          const message = parsedBody.split('=')[1]
          fs.writeFileSync('message.txt', message)
          console.log(parsedBody)
      })
      res.statusCode = 302
      res.setHeader('Location', '/')
      return res.end()
  }
  res.setHeader("Content-Type", "text/html");
  res.write(
    "<html><head><title>My First Web Page</title></head><body>Welcome to my first web page.</body></html>"
  );
  res.end();
};

const server = http.createServer(rqListener);

server.listen(3000);