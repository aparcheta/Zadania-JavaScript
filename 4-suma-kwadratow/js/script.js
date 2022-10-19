var array = [0,1,2,3,4,5];

function addSquares(arrayNumber){
  
  var addSquaresResult = 0;
  
  for(var i = 0 ; i < arrayNumber.length ; i++){
    addSquaresResult += Math.pow(arrayNumber[i],2);
  }
  
  return addSquaresResult;
}

var result = addSquares(array);
console.log(result);