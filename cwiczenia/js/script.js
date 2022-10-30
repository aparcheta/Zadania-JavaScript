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


// tworzysz funkcję "popularity", która ma przyjmowac jeden parametr ->  tablicę.  Funkcja ma dodawac do elementów tablicy (ktore będą obiektami) dodatkowe pole "popularity" , któremu będzie nadawała losową liczbę.
// hciaabym zebyś w kilku console.log'ach które mi przeslesz tutaj dostała się do określonych danych
// 1. imię Marian
// 2. hobby Krystiana (medytacja)
// 3.  wszystkie hobby Łukasza
// 4. ulubione jedzenie Uli( arbuz )
// 5. ulubione jedzenie Uli( czekolada)
// 6. 4. ulubione jedzenie Uli( cytryna)
// tablica zwiera elementy tablicy
// obiekt zawiera pola obiektu/właściwości/pary klucz - wartość




let array = [

  {
      imie: "Ula",
      nazwisko: "Jeziorna",
      plec: "kobieta",
      hobby: ["bieganie", "taniec", "malowanie"],
      ulubioneJedzenie: {owoce: [{kwasne: ['wiśnie', 'cytryna', 'kiwi'], slodkie: ['melon', 'arbuz', 'truskawki']}], warzywa: ['sałata', 'pomidory', 'marchewka'], slodycze: ['ciasta', 'czekolada']}
  },
  {
      imie: "Krystian",
      nazwisko: "Dziopa",
      plec: "mężczyzna",
      hobby: ["programowanie", "medytacja"]
  },
  {
      imie: "Łukasz",
      nazwisko: "Badocha",
      plec: "mężczyzna",
      hobby: ["rower", "góry", "bieganie"]
  },
  {
      imie: "Marian",
      nazwisko: "Drągalski",
      plec: "mężczyzna",
      hobby: ["wspinanie", "rower", "karate", "gotowanie"]
  },
];

console.log(array[3].imie);
console.log(array[1].hobby[1]);
console.log(array[2].hobby);
console.log(array[0].ulubioneJedzenie.owoce[0].slodkie[1]);
console.log(array[0].ulubioneJedzenie.slodycze[1]);
console.log(array[0].ulubioneJedzenie.owoce[0].kwasne[1]);
