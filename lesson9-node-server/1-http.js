const http = require("http");

//console.log(http.STATUS_CODES);
//console.log(http.METHODS);

const server = http.createServer((req, res) => {
  console.log("incoming..");
  console.log(req.headers);
  console.log(req.httpVersion);
  console.log(req.method);
  console.log(req.url);
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Academy</title></head>");
    res.write("<body><h1>Hello!</h1></body>");
    res.write("</html>");
  } else if (url === "/course") {
    res.write("course");
  } else {
    res.write("notFound");
  }
  res.end();
});

server.listen(8080);
