var count = 0;
var n = 25;
console.log("runnning");
for (var i = 2; i < n; i++) {
  //console.log("i value", i);
  for (var j = 2; j < n; j++) {
    console.log("inner", j, i);
    if (i % j === 0) {
      count++;
    }
    // if (i > j) {
    //   count = 0;

    //   break loop2;
    // }
  }
  //console.log(count, i);
  if (count === 1) {
    count = 0;
    console.log(i);
  }
}
