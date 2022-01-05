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

// Array(배열)
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";

const daysOfWeek = [mon, tue, wed, thu, fri, sat];
const nonsense = [1, 2, "hello", false, null, true, undefined];  // 다양한 데이터 타입이 들어갈 수 있다.
console.log(daysOfWeek);

// Get Item from Array
console.log(daysOfWeek[4]);
// Add one more day to the Array
daysOfWeek.push("sun");
console.log(daysOfWeek);

// Objects(구조체)
const player = {
    name: "giwoo",
    points: 1212,
    hansome: false,
    fat: true,
};
console.log(player);
console.log(player.name);
player.name = "jiwoo";  // object가 const 더라도 object의 속성은 변경 가능
console.log(player.name);
player.lastName = "potato";  // 새로운 속성 추가
console.log(player);