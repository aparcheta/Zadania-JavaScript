// //funkcja dodawania w ES5

// function addNumbers(parametr1,  parametr2) {
//     let result = parametr1 + parametr2;    
//     return result;
// }

// let sum = addNumbers(1,2);

// console.log(sum);

// //funkcja dodawanie w ES6

// const mnozenie = (num1, num2) => {
//     let result = num1*num2;
//     return result;
    
// }
// let wynik = mnozenie(8,4);
// console.log(wynik);


//Tablica

let cars = [
   {
      color: ["gray", "blue", "red", "green"],
      brand: "bmw",
      registration: new Date("2017-01-03"),
      model: 'i8',
    },
    {
      color: ["blue", "red", "green"],
      brand: "ford",
      registration: new Date("2018-03-03"),
      model: 'mustang',
    },
    {
      color: ["galaxy-blue", "blue", "red", "green"],
      brand: "audi",
      registration: new Date("2017-01-03"),
      model: 'a7',
    },
    {
      color: ["blue", "red", "green"],
      brand: "dodge",
      registration: new Date("2017-01-03"),
      model: 'charger',
    },
  ]


//odwołanie do całej tablicy
  for (let i=0; i<cars.length; i++) {
    console.log(cars[i]);
  };

//odwołanie do indeksu
  for (let i=0; i<cars.length; i++) {
    console.log('Index:' +i);
  };

//odwołanie do modelu 
for(let auto of cars){
    console.log(auto.model);
};


// odwołanie do modelu 
for(let auto of cars){
    console.log(auto.color[1]);
};

//pętla for in - iteracja po elementach
for(let auto in cars){
    console.log(`Nazwa pola: ${auto}`);
}

//pętla for in - iteracja po wartości
for(let auto in cars){
    console.log(`Nazwa pola: ${cars.model}`);
}