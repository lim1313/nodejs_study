const fs = require("fs").promises;

// promises 이므로 모든것이 비동기로 처리가 되기 때문에, 주의!
// 비동기는 순차적으로 실행될 수도, 아닐 수도있기 때문에 유의해야 한다!

//read a file : readFile('file', 옵션(읽기모드))
fs.readFile("./text.txt", "utf8")
  .then(data => console.log(data))
  .catch(console.error);

// writing a file : 아무것도 return되지 않음
fs.writeFile("./file.txt", "hello dream coder") //
  .catch(console.error);
//--> 새로운 값으로 덮어씌워짐
fs.writeFile("./file.txt", "YO! hello dream coder") //
  .catch(console.error);

//appendFile-> 새로운 값을 추가할 경우
fs.appendFile("./file.txt", "HI! hello dream coder") //
  .then(() => {
    fs.copyFile("./file.txt", "./file2.txt").catch(console.error);
  })
  .catch(console.error);

//copy : 복사 , return되는 값 없음.
//-> 모든 것들이 비동기적으로 실행되기 때문에 file2안에 아무값도 없을 수 있음
//-> appendFile에서 then으로 추가하면 동기적 처리가능
fs.copyFile("./file.txt", "./file2.txt") //
  .catch(console.error);

//folder : return 값 없음
fs.mkdir("sub-folder") //
  .catch(console.error);

//readir : 해당 경로의 파일명들을 배열의 형태로 return
fs.readdir("./") //
  .then(console.log)
  .catch(console.error);
