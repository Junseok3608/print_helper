const n = Number(180);
const arr = Array(n)
  .fill()
  .map((v, i) => i + 1);
const aArr = [];
const bArr = [];

while (arr.length > 5) {
  for (j = 0; j < 8; j++) {
    if (j <= 3) {
      aArr.push(arr.shift());
    } else {
      bArr.push(arr.shift());
    }
  }
}

console.log("A", aArr);
console.log("B", bArr);
console.log("remainder", arr);
