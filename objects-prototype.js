const object1 = { a: 1, c: 7 };
const object2 = { b: 2 };
const object3 = { c: 3 };

Object.setPrototypeOf(object1, object2); // = object1.__proto__ = object2;
object2.__proto__ = object3;
object3.__proto__.__proto__; //?

object1.b; //?
object2.b; //?
object1.toString; //?

object2.b = 9;

object1.b; //?

object1.b = 6;

console.log(object1.b); // 6
console.log(object2.b); // 9

console.log(object1.__proto__);
Object.getPrototypeOf(object1); //?

delete object1.a;

// console.log(console);

function Func(arg1) {
  console.log("do stuff", arg1);
  this.someValue = `my argument: ${arg1}`;
}
Func.prototype.hello = function () {
  return `hello ${this.someValue}`;
};

const numberObject = new Number(45);

/*
1. creating new empty object: {}
2. invoking function func with this pointing to the newly created object
3. assigning func.prototype as a prototype of the new object
4. return the newly created object
*/
const someObject = new Func(23);
const otherObject = new Func();
someObject.__proto__ === Func.prototype; //?

someObject.hello(); //?
otherObject.hello(); //?
someObject.hello === otherObject.hello; //?

// someObject.hello = function () {
//   return "??";
// };
Object.getPrototypeOf(someObject).hello = function () {
  return "something";
};

someObject.hello(); //?
otherObject.hello(); //?
