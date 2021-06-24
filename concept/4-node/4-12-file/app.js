const fs = require("fs");

// try{renameSync(....)} catch(e){} : 동기적으로 수행(blocking)
//동기적 수행이므로 사용 권장X
// 에러를 잡기위해 try catch를 함께 작성해야 한다.
try {
  fs.renameSync("./text.txt", "./text-new.txt"); //-> 없는 파일이기 때문에 error
} catch (error) {
  console.error(error);
}

console.log("hello");

// rename(...., callback(error,data)) : 비동기 실행
//-> callback : 에러발생할 때만 실행 / 에러가 없다면 nul 반환
fs.rename("./text-new.txt", "./text-file.txt", error => {
  console.log(error);
});

console.log("hello");

//promises.rename().then().catch(0) : 비동기 실행
fs.promises
  .rename("./text2.txt", "./text2-new.txt")
  .then(() => console.log("done"))
  .catch(console.error);
