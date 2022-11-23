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
