const a1 = "VALUE";

function func1(strings, firstVariable, nextVariable) {
  console.log(strings);
  console.log(firstVariable);
  console.log(nextVariable);
  return strings[0] + firstVariable + strings[1] + nextVariable + strings[2];
}

const t1 = `test1${a1}test2 ${45}-`; // -> 'test1VALUEtest2 45-'
const t2 = "test1" + a1 + "test2 " + "45" + "-";
const t3 = func1`test1${a1}test2 ${45}-`;

t1 === t3;

func1(["test1", "test2 ", "-"], a1, 45);
