function someFunction() {
  console.log(this); // someObject
}

const someObject = {
  propertyA: function () {
    return this.a;
  },
  a: 3,
};
const otherObject = {
  a: 4,
};
otherObject.propertyA = someObject.propertyA;
const propertyA = someObject.propertyA;

(otherObject.propertyA === someObject.propertyA) === propertyA; // -> true

someFunction();
console.log(someObject.propertyA()); // - someObject
console.log(otherObject.propertyA()); // - otherObject
console.log(propertyA()); // - global

someObject.someFunction = someFunction;
someObject.someFunction();

function invokeSomeAction(action) {
  console.log(action());
}

function doSomething() {
  return "action done";
}
someObject.propertyA(); //?
invokeSomeAction(someObject.propertyA);
