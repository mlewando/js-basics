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

console.log(someObject);
someObject.newValue = "new";
console.log(someObject);
console.log(someObject.someFunction());
