let tablica = [12,  67,  34,  23.01,  24,  2,  56,  8,  0x10,  23.02,  78,  34,  1e2,  45,  67,  98,  1];



  // function sortNum (a, b) {
  //     return a - b;
  //   }
  
  //   tablica.sort(sortNum);
  
  //   console.log(tablica);
  
  function bubleSort(array) {
  
    for (let i = 0; i < array.length; i++) {
      for (let k = 0; k < array.length; k++) {
        if (array[k] > array[k + 1]) {
          const temp = array[k + 1];
          array[k + 1] = array[k];
          array[k] = temp;
        }
  
      }
  
    }
    console.log(array);
    return array;
  }
  bubleSort;
  console.log(bubleSort(tablica));
  
