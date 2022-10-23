class Ksiazka {
    constructor(tytul, autor, przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;
    }

    opiszKsiazke() {

        if (this.przeczytana == true) {
            return 'Książka ma tytul ' + this.tytul + ', autorem jest ' + this.autor + ' i została przeczytana'
        } else {
            return ('Książka ma tytul ' + this.tytul + ', autorem jest ' + this.autor + ' i nie została przeczytana')
        }
    }
}

let wiedzmin = new Ksiazka('Wiedzmin', 'Sapkowski' , true);
let dziady = new Ksiazka('Dziady', 'Mickiewicz', false);
let ptasiek = new Ksiazka('Ptasiek', 'Wharton', false);

let tablica = [];
tablica[0] = wiedzmin;
tablica[1] = dziady;
tablica[2] = ptasiek;

function iloscPrzeczytanych(tab) {
    let suma = 0;
    for (let i=0; i<tab.length; i++) {
        if (tab[i].przeczytana == true) { 
            suma = suma + 1;   
        }  
        console.log(tab[i].opiszKsiazke());
    }
    console.log('Ilość przeczytanych książek: ' + suma);
    return suma;
}   

console.log(iloscPrzeczytanych(tablica));

