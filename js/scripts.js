var romanNums = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var numberArr = [1000, 500, 100, 50, 10, 5, 1];
var romanArr = ["M", "D", "C", "L", "X", "V", "I"]

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

var wholeQuotient =  function(numerator,divisor){
  return parseInt(numerator/divisor);
};

var createArray = function(userNum){
  var Arr = [];
  for (var i = 0; i < numberArr.length; i++) {
    if(quotientGreaterThanOne(userNum,numberArr[i])){
      var ret = wholeQuotient(userNum,numberArr[i]);
      Arr.push(ret);
      userNum = userNum-(numberArr[i]*ret);
    } else{
      Arr.push(0);
    }
  } return Arr;
};


var convertToRoman = function(userNum){
  var retString = "";
  if (typeChecker(userNum)) {
    var arr = createArray(userNum);
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] < 4 && arr[i] !== 0){

        for (var j = 0; j < arr[i]; j++) {
          retString += romanArr[i];
        }
      } else if(arr[i] === 4) {
        retString += romanArr[i];
        retString += romanArr[i-1];
      }
    }
    return retString;
  }else{
    return false;
  }

};
