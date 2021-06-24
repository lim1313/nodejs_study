const path = require("path");

console.log(__dirname);
console.log(__filename);

console.log(path.sep); // 운영체제에 맞게 구분자를 출력
console.log(path.delimiter); // 운영체제에 맞게 환경변수 구분자 출력

// basename : 파일 정보를 읽어올 수 있음
console.log(path.basename(__filename)); // -> app.js
console.log(path.basename(__filename, ".js")); // 확장자 제거 후 파일이름만 출력-> app

// dirname : 디렉토리 이름을 가져온다
console.log(path.dirname(__filename)); // 디렉토리 이름을 가져온다

// extension : 확장자만 출력
console.log(path.extname(__filename));

// parse : object형태로 정보 출력
const parsed = path.parse(__filename);
console.log(parsed);
parsed.root;
parsed.name;

// format : object형태로 이루어진 주소를 다시 string형태로 변환
const str = path.format(parsed);
console.log(str);

//isAbsolute : 절대경로인지 상대경로인지 확인
console.log("isAbsolute?", path.isAbsolute(__dirname)); // true
console.log("isAbsolute?", path.isAbsolute("../")); //false

//normalize : 잘못된 경로를 수정해준다
console.log(path.normalize("./folder///sub"));

//join : 새로운 경로를 만들어 준다.
console.log(__dirname + path.sep + "image");
console.log(path.join(__direname, "image"));
