const someFunctionWithArgs = function (
  firstArgument,
  secondArgument,
  thirdArgument,
  fourthArgument
) {
  const test = arguments[4]; //?
  someObject === secondArgument; // -> true
  return "someValue";
};

const test = 4;
const someObject = { a: 1 }; // { a: 1 } - object in the memory at address 1 (ref1)

var v = 5;
someFunction(test, someObject, 34, { a: 2 }, "test"); //?
// someFunctionWithArgs(test, someObject, 34, { a: 2 }, "test"); //?

// const someOtherFunction = function () {
//   return "some value";
// };
function someFunction() {
  var firstArgument = arguments[0]; //?
  var secondArgument = arguments[1]; //?
  var fourthArgument = arguments[3]; //?
  var thirdArgument = arguments[2]; //?
  console.log(firstArgument + fourthArgument);

  someObject === secondArgument; // -> true
  return "someValue";
}

// const anything = someFunction;

// someFunction(someFunctionWithArgs);

// someFunction["newProperty"] = "someValue";

// console.log(test); //? 4

// const someModule = (function () {
//   const variable = "something";
//   // do some logic, define some functions...

//   function doSomeWork() {}

//   return {
//     doSomeWork: doSomeWork,
//   };
// })();
