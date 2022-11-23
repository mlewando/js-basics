const someObject = {
  test: 4,
  otherValue: "test",
  otherObject: {
    someProperty: "test",
  },
  someFunction: function someFunction() {
    return "result";
  },
};

console.log(someObject.test); // 4
const propertyName = "test";
console.log(someObject[propertyName]); // 4

someObject.newValue = "new";
console.log(someObject);
console.log(someObject.someFunction());

console.log(someObject.notExistingProperty); // undefined

const objectA = { a: 1 };
const objectB = { a: 1 };
const objectC = objectA;
console.log({
  objectA,
  objectB,
  objectC,
  "A=B": objectA === objectB,
  "A=C": objectA === objectC,
  "B=C": objectB === objectC,
});
