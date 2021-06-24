const process = require("process");

// 현재 동작하는 node process 정보를 얻음

console.log(process.execPath); //현재 실행되고 있는 node 위치
console.log(process.version); //node version
console.log(process.pid); // process id
console.log(process.ppid); // process 부모의 id
console.log(process.platform);
console.log(process.env);
console.log(process.uptime()); //얼마동안 실행되었는지
console.log(process.cwd());
console.log(process.cpuUsage());

// setTimeout ,0 : 현재 모든 수행이 완료된 다음, 0 초 후에 실행
setTimeout(() => {
  console.log("setTimeout");
}, 0);

//nextTick : 현재 수행되고 있는 코드 완료된 다음, 테스크큐의 **가장 앞으로** 넣도록 함
process.nextTick(() => {
  console.log("nextTick", process.uptime());
});

for (let i = 0; i < 10; i++) {
  console.log("for loop");
}
