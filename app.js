// Variable
const a = 5;   // 값을 변경할 수 없는 상수
const b = 2;
let myName = "ohjiwoo";  // 값을 변경할 수 있는 변수
// 기본으로 const를 쓰고 변경할 필요가 있을 때에만 let을 사용함

console.log(a + b);    // 콘솔에 출력
console.log(a * b);
console.log(a / b);
console.log("hi, my name is " + myName);

myName = "nicolas"
console.log("your name is " + myName);

// Boolean
const amIFat = true;
const amIBig = false;
const amISmall = null;  // defined 되었지만 아무 의미도 없음
let something;   // undefined
console.log(amIFat);
console.log(amIBig);
console.log(amISmall);
console.log(something);