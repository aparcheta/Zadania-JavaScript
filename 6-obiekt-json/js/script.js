let json = {
    pracownicy: [
      { firstName: 'Krystian', lastName: 'Dziopa' },
      { firstName: 'Anna', lastName: 'Szapiel' },
      { firstName: 'Piotr', lastName: 'Żmuda' },
    ],
  };
  
  let pracownicy = json.pracownicy;
//   console.log(pracownicy);
  pracownicy.forEach(function(element, index) {
   console.log("Pracownik " + index + element.firstName + element.lastName);
  });
  