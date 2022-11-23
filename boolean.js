const variable = "";

console.log(typeof variable); //?
console.log(typeof !variable); //?
console.log(!variable); //?
console.log(Boolean(variable)); //?
console.log(!!variable); //?

if (!variable) {
  console.log("true");
} else if (true) {
}

function doSomeWork(isLoggedIn) {
  console.log("do some work");
  return isLoggedIn && "some secret data";
}

console.log(doSomeWork(true));
console.log(doSomeWork(false));

function tenary(condition, valueTrue, valueFalse) {
  if (condition) {
    return valueTrue;
  } else {
    return valueFalse;
  }
}

const result = tenary(variable, "true", "false");
// tenary
const tenaryOperator = variable ? "true" : "false";

function switchFunc() {
  switch ("a") {
    case "a":
      console.log("a");
      return "a";
    case "b":
      console.log("b");
    default:
      console.log("default");
  }
}
