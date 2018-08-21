/*
var conditionalSum = function(values, condition) {
  var sum = 0;
  if (condition === "odd") {
    for (i = 0; i < values.length; i++) {
      var a = values[i];
      if (a % 2 !== 0) {
        sum += a;
      }
    }
  } else if (condition === "even") {
    for (i = 0; i < values.length; i++){
      var b = values[i];
      if (b % 2 === 0) {
        sum += b;
      }
    }
  }
  return sum
};
*/

var conditionalSum = function(values, condition) {
  var sum = 0;
  if (condition === "odd") {
    for (i = 0; i < values.length; i++) {
      if (values[i] % 2 !== 0) {
        sum += values[i];
      }
    }
  } else if (condition === "even") {
    for (i = 0; i < values.length; i++){
      if (values[i] % 2 === 0) {
        sum += values[i];
      }
    }
  }
  return sum
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"))
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

/*
6
9
144
0


*/