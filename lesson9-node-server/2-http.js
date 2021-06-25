const http = require("http");
const fs = require("fs");
//console.log(http.STATUS_CODES);
//console.log(http.METHODS);

const server = http.createServer((req, res) => {
  console.log("incoming..");
  console.log(req.headers);
  console.log(req.httpVersion);
  console.log(req.method);
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream("./head.html").pipe(res);
  } else if (url === "/course") {
    res.write("course");
  } else {
    res.write("notFound");
  }
});

server.listen(8090);
