const n = 123;
const nb = 123n;

n == nb; //?
n === nb; //?
BigInt(n) + nb; //?
n + Number(n); //?

const aLot = BigInt(Number.MAX_VALUE) * 2n; //?
Number.MAX_VALUE == aLot; //?
const aLotNumber = Number(aLot); //?
BigInt(Number.MAX_SAFE_INTEGER) + 2n; //?
BigInt(Number.MAX_SAFE_INTEGER + 2); //?
Number(BigInt(Number.MAX_SAFE_INTEGER) + 2n); //?
BigInt(Number.MAX_SAFE_INTEGER) + 2n == Number.MAX_SAFE_INTEGER + 2; //?
