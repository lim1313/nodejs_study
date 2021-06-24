const fs = require("fs");

// stream에서 데이터가 조금씩 도착하면 알려줌
const readStream = fs.createReadStream("./file.txt", {
  highWaterMark: 800, // 기본값 : 64 kbyts
  encoding: "utf-8",
});

const data = [];
//on : 데이터가 발생할 때마다 콜백함수 실행, 자기자신을 return
readStream.on("data", chunk => {
  data.push(chunk);
  console.count("data");
});

//once : 한번만 실행
readStream.once("data", chunk => {
  data.push(chunk);
  console.count("data");
});

//-> 모든 데이터가 read되었을 때 실행
readStream.on("end", () => {
  console.log(data.join(""));
  console.log("gooooood");
});

readStream.on("error", error => {
  console.log(error);
});
