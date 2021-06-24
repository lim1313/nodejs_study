const os = require("os");

// 운영체제의 정보를 가져온다

console.log(os.EOL === "\r\n");
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.type());
console.log(os.userInfo());
console.log(os.cpus());
console.log(os.homedir());
console.log(os.hostname());
