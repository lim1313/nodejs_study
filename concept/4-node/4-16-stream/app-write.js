const fs = require("fs");

const writeStream = fs.createWriteStream("./file3.txt");
writeStream.on("finish", () => {
  console.log("finised");
});

writeStream.write("hello");
writeStream.write("world");
writeStream.write("!!!!!");

writeStream.end();
