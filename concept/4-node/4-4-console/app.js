console.log("loadin....");
console.clear();

console.log("log"); //개발
console.info("info"); //정보
console.warn("warn"); //경보
console.error("error"); //에러, 사용자에러, 시스템 에러

//asset 참이 아닐 때만 출력
console.assert(2 === 3, "not some");
console.assert(2 === 2, "some"); // 출력X

//pring object
// table : obeject를 테이블 형태로 출력
const student = { name: "yeji", age: 20, company: { name: "ac", age: 22 } };
console.log(student);
console.table(student);

//dir : 옵션을 통해 다양한 형태로 값 출력
console.dir(student, { showHidden: true, colors: false, depth: 1 });

//measuring time : 성능확인시 유용
console.time("for loop");
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd("for loop");

//counting : 몇번호출되었는지 count
function a() {
  console.count("a function");
}
a();
a();
console.countReset("a function"); // count를 reset
a();

//trace : debugging에 유용 : 해당 함수가 어떻게 호출되었는지 확인 가능
function f1() {
  f2();
}
function f2() {
  f3();
}
function f3() {
  console.log("f3");
  console.trace();
}
