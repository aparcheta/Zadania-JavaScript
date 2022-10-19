var array = [1, 2, 3, 4, 5, 6] ;

function addAndMultiply(arrayNumber){
  
  let multiplyResult = 1;
  let addResult = 0;
  
  for(var i = 0 ; i < arrayNumber.length ; i++){
    multiplyResult *= arrayNumber[i];
    // multiplyResult = multiplyResult * arrayNumber[i];
    addResult += arrayNumber[i];
  }
  
  console.log('Suma elementów tablicy = ' + addResult);
  console.log('Iloczyn elementów tablicy = ' + multiplyResult );
  
}

addAndMultiply(array);