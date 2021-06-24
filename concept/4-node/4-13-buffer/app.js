// 고정된 사이즈의 메모리 덩어리
// 메모리에 있는 데이터(바이트 단위) 자체 : **배열 형태
//Fixed-size chuck of memory
//array of integers, byte of data

const fs = require("fs");

const buf = Buffer.from("Hi");
console.log(buf); //-> <Buffer 48 69> 유니코드 형태
console.log(buf.length); //->2
console.log(buf[0]); //->72 아스키코드형태
console.log(buf[1]); //->105 아스키코드형태
console.log(buf.toString()); //-> 문자형태로 출력(기본값 : 'utf-8' , 옵션 전달 가능)

//create : buffer 생성
const buf2 = Buffer.alloc(2); //-> 사이즈가 2개인 buffer를 만듦. 사용가능한 메모리를 찾아 초기화시켜줌
buf2[0] = 72;
buf2[1] = 105;
console.log(buf2); //-> <Buffer 48 69>
console.log(buf2.toString()); //-> Hi

//alloUnsafe : 초기화하지 않기 때문에 빠름, but 데이터가 들어있을 수 있기 때문에 초기화하는 것이 좋음
const buf3 = Buffer.allocUnsafe(2);

buf2.copy(buf3); //-> buf2에 있는 값을 buf3에 copy

//concat : 여러 버퍼를 모을 수 있다.
const newBuf = Buffer.concat([buf, buf2, buf3]);
