// var romanNums = {
//   I: 1,
//   V: 5,
//   X: 10,
//   L: 50,
//   C: 100,
//   D: 500,
//   M: 1000
// };

var numberArr = [1000, 100, 10, 1];
var romanArr = ["M", "D", "C", "L", "X", "V", "I"];

var typeChecker = function(userNum){
  if(!isNaN(userNum)){
    return true;
  } else {
    return false;
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

var romanReturn =  function(num, pos){
  var roman = [["D","M"],["C","D","M"],["X","L","C"],["I","V","X"]];
  var char = "";
  if(num > 0 && num < 4){
    for (var i = 0; i < num; i++) {
      char += roman[pos][0];
    }
  } else if (num === 4){
    char += roman[pos][0]+roman[pos][1];
  } else if (num > 4 && num < 9 ){
    char += roman[pos][1];
    for (var i = 5; i < num; i++) {
      char += roman[pos][0];
    }
  } else if (num === 9){
    char += roman[pos][0]+roman[pos][2];
  }
  return char;
}



var convertToRoman = function(userNum){
  var retString = "";
  if (typeChecker(userNum)) {
    var arr = createArray(userNum);
    for (var i = 0; i < arr.length; i++) {
      retString += romanReturn(arr[i],i);
    }
    return retString;
  }else{
    alert("That wasn't a real number!");
    return false;
  }
};


$(function(){
  $("form#romanNums").submit(function(event) {
    var result = convertToRoman(parseInt($("#userNum").val()));
    $("#result").text(result);
    event.preventDefault();
  });
});
