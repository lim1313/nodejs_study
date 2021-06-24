const EventEmitter = require("events");
const emitter = new EventEmitter();

const callback1 = args => {
  console.log("hello1", args);
};

emitter.on("hello", callback1);

emitter.on("hello", ages => {
  console.log("hello2", ages);
});

// emit : 이벤트 발생
emitter.emit("hello", { message: 1 });
emitter.emit("hello", { message: 2 });
emitter.removeListener("hello", callback1);
emitter.emit("hello", { message: 3 });

/* 결과
hello1 { message: 1 }
hello2 { message: 1 }
hello1 { message: 2 }
hello2 { message: 2 }
hello2 { message: 3 } // remove를 통해 첫번째 callback1 함수 미처리
*/
