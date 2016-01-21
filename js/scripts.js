var romanNums = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};




var typeChecker = function(userNum){
  if(typeof(userNum) !== "number"){
    return false;
  } else {
    return true;
  }
};

var quotientGreaterThanOne = function(userNum, divisor){
  if((userNum/divisor) >= 1){
    return true;
  } else {
    return false;
  }
};

var returnWholeQuotient =  function(numerator,divisor){
  return parseInt(numerator/divisor);
};

// var numChopper = function(integer){
//
//   for
//
// }
