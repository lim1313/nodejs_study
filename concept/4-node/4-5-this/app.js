// class 외부에서의 this는 global을 의미
function hello() {
  console.log(this);
  console.log(this === global); //true : 함수안에서 this는 global
}

hello();

//class 안에서의 this는 class를 의미
class A {
  constructor(num) {
    this.num = num;
  }
  memberFunction() {
    console.log("-------class--------");
    console.log(this);
    console.log(this === global); // false
  }
}

const a = new A(1);
a.memberFunction();

console.log(this === module.exports); //여기서의 this는 moduel.export를 의미
