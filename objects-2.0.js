(function () {
  // this is only for primitives
  let someVariable = 234; // somewhere in the memory we have number 234

  const otherVariable = someVariable; // that's actually a copy of 234

  console.log("someVariable 1:", someVariable); // -> 234
  console.log("otherVariable 1:", otherVariable); // -> 234
  otherVariable === someVariable; // -> true

  someVariable = 23; // the original 234 is not needed anymore, we have 23 somewhere else in the memory, original 234 can be removed from memory, other variable is 234

  console.log("someVariable 2:", someVariable); // -> 23
  console.log("otherVariable 2:", otherVariable); // -> 234
  otherVariable === someVariable; // -> false
})();

(function () {
  // complex types/objects
  let someVariable = {}; // 1. declaring the variable someVariable, 2. creating a new object in memory, 3. assigning the reference to the object to someVariable
  const otherVariable = someVariable; // 1. declaring the new constant otherVariable 2. assigning the same object from previous line to the new variable

  someVariable["lesson"] = "when we are learning new things";
  console.log("someVariable 1:", someVariable); // -> {lesson: 'when we are learning new things'}
  console.log("otherVariable 1:", otherVariable); // -> {lesson: 'when we are learning new things'}

  otherVariable === someVariable; // -> true

  someVariable = {}; // 1. creating a new empty object, 2. assigning the reference to the object to someVariable
  console.log("someVariable 1:", someVariable); // -> {}
  console.log("otherVariable 1:", otherVariable); // -> {lesson: 'when we are learning new things'}

  otherVariable === someVariable; // -> false

  someVariable["lesson"] = "when we are learning new things";

  console.log("someVariable 1:", someVariable); // -> {lesson: 'when we are learning new things'}
  console.log("otherVariable 1:", otherVariable); // -> {lesson: 'when we are learning new things'}

  otherVariable === someVariable; // -> false

  someVariable = otherVariable;

  otherVariable === someVariable; // -> true
})();

(function () {
  const someVariable = {
    ["**-_lesson"]: "when we are learning new things",
    lesson: "when we are learning new things - simple",
  };
  const keyName = "**-_lesson";
  someVariable[keyName]; //?
  someVariable.lesson; //?

  const otherVariable = {};
  otherVariable["lesson"] = "when we are learning new things";
})();

(function () {
  const smallObject = {
    a: 1,
  };
  const someVariable = {
    test: {
      a: 1,
    },
  };

  someVariable.b = someVariable.test;
  someVariable.test["something"] = 2;
  //   someVariable.b["something"] = 2; same as
  //   someVariable.test.something = 2; same as
  //   someVariable.b.something = 2; same as

  console.log(someVariable); // { test: { a:1, something :2}, b:{ a:1,  something :2} }
  someVariable.b === someVariable.test; // -> true
})();

(function () {
  const A = { a: 1 };
  const B = { b: 2 };
  B.c = 3;
  A.b = B;
  A.c = B.c;
  B.d = { a: 4 };

  console.log(A); //?
  console.log(B); //?
})();

(function () {
  const A = { a: 1 };
  const B = { b: { c: A } };
  B.c = { d: 3 };
  A.b = B.c;
  B.b.d = A.b;
  A.b.d = 5;

  console.log(JSON.stringify(A)); //?
  console.log(JSON.stringify(A)); //?
})();

(function () {
  const A = { a: 1 };
  const B = { b: { c: A } };

  B.b.c === A; // -> true
  B.b.c.d = B; // same as A.d = B;
  A.c = 3;

  console.log(A); //?
  console.log(B); //? { b: { c: { a: 1. c: 3, d: {...}}}}
})();
