//잘 모르겠음...

const fs = require("fs");
const zlib = require("zlib");

const readStream = fs.createReadStream("./file.txt");
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream("./file4.zip");
const pining = readStream.pipe(zlibStream).pipe(writeStream);
piping.on("finish", () => {
  console.log("done!!");
});
