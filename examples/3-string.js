//prettier-ignore
const s1 = 'It\'is a test';
const s2 = "It's a test";
const s3 = String("It's a test");
const s4 = new String("It's a test");

eval("2+2"); //?
eval(new String("2+2")); //?

const template = `It's a test with some expression ${4 ** 2}`; //?

template.toUpperCase(); //?
template.toLowerCase(); //?
"á".localeCompare("a", "en-GB", { sensitivity: "base" }); //?

template.match(/([a-z]+)\s{4,}([a-z]+)/gi); //?

function tag(stringsArray, value1, value2) {
  return [value1 + value2, stringsArray.join("")];
}

tag`test ${3} whatever ${5}`; //?
