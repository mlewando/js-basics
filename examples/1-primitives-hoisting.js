// "use strict";
console.log(test);

var test;
test = false;
console.log(test);

// var typo = Symbol("sd");
typo = Symbol("sd");
console.log(typo);

let mutableVar = 3;
console.log(mutableVar);

const immutableVar = "immutable";
console.log(immutableVar);

authorize();

function authorize() {
  console.log("authorizing");
}

const auth = authorize;
auth();
