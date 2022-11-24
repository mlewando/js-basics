const object1 = {
  test: 4,
  otherValue: "test",
  otherObject: {
    someProperty: "test",
  },
  someFunction: function someFunction() {
    return "result";
  },
};

console.log(object1.test); // 4
const propertyName = "test";
console.log(object1[propertyName]); // 4

object1.newValue = "new";
console.log(object1);
console.log(object1.someFunction());

console.log(object1.notExistingProperty); // undefined

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

(function () {
  const objectForDestruction = { a1: 1, b: 2, c: 3 };
  objectForDestruction.a1; //?
  objectForDestruction.b; //?

  // const a = objectForDestruction.a1;
  // const b = objectForDestruction.b;

  const { b, a1: a } = objectForDestruction;

  a; //?
  b; //?
})();

(function () {
  const objectForDestruction = { a: 1, b: 2, c: 3, test: "test" };

  const { a, ...forJustyna } = objectForDestruction;

  forJustyna; //?

  const otherObject = {
    test2: 54,
    b: 6,
    ...forJustyna,
    c: "new value",
  };

  otherObject; //?
})();

const setAndGetExample = {
  property: "test",
  get otherProp() {
    return "value of other prop";
  },
  set otherProp(ignoreThis) {},
  set anotherProp(newValue) {
    console.log(newValue);
  },
};
console.log(setAndGetExample.property);
console.log(setAndGetExample.otherProp);
console.log(setAndGetExample.anotherProp);
setAndGetExample.otherProp = 45;
console.log(setAndGetExample.otherProp);
