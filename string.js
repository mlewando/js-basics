const a = "sadf 'quotation'";
//prettier-ignore
const a1 = 'sadfs "quotation" \'quotation2\' ad'
const a2 = new String("test");

console.log(a2);

console.log(a2.toUpperCase());
console.log(a.toUpperCase());

console.log("test" === new String("test"));
console.log(new String("test") === new String("test"));

console.log("3" == 3);
console.log("3" === 3);

const template = `It's a test with s
multiline
ome expression ${a1} - ${a2}`;
const concatenation = "It's a test with some expression " + a1 + " - " + a2;

template === concatenation; //?

a.toUpperCase();
"Test".toLowerCase() === "test"; //?
"Test".localeCompare("test"); //?
"Test".toLowerCase().includes("te");

a.length; //?
a.substring(3, 9); //?
"1,2,5,6".split(","); //?
"1,2.5;6".split(/[,\.;]/); //?

"test" === "test"; //?
"test" < "A test"; //?

/**
 * if test < A test -> -1
 * if test === A test -> 0
 * if test > A test -> 1
 */

function parseDate(dateString) {
  // arguments validation
  if (typeof dateString !== "string") {
    // if arguments are not valid then we stop the function
    return;
  }

  // here is the real logic, here we assume that arguments are of valid type
  const dateMatch = dateString.match(
    /([0-9][0-9])-([0-9][0-9])-([0-9][0-9][0-9][0-9])/
  );
  if (dateMatch) {
    const day = dateMatch[1];
    const month = dateMatch[2];
    const year = dateMatch[3];
    return {
      success: true,
      parsedDate: {
        day: day,
        month: month,
        year: year,
      },
    };
  }
  //   return { success: false };
}

parseDate(null); //?
parseDate(undefined);
parseDate("");
parseDate([]);
parseDate("12-12-2022");
