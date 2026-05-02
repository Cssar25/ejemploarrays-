


let productos = ["mouse", "teclado", "monitor", "audifnos"];

for (let i = 0; i < productos.length ; i++){
console.log([productos[i]]);


}

let autos = ["BMW", "AUDI", "VOLVO", "KIA", "MERCEDES"];

for (let i = 0; i < autos.length ; i++){
    console.log([autos[i]]);
}

////

let numeros = [2,4,6,8]; //*2
let duplicados = [];

for (let i = 0; i < numeros.length; i++) 
    duplicados.push(numeros[i]*2);

console.log(duplicados)

/////

let numeros1 = [5,10,15,20];
let suma = 0; 

for (let i = 0; i < numeros1.length; i++){
    suma = suma +numeros1[i];
}
console.log("la suma es : ", suma);

// un array de números mezclados. Tu tarea es recorrer ese array usando un for y, si el número es par, agrégalo a un nuevo array llamado pares usando el método .push()"

let numeros2 = [2,4,6,10,15,25,35,57];
let pares = []

for (let i = 0; i < numeros2.length; i++){
    let numero = numeros2[i];

    if(numero % 2 === 0){
        //si es par 
        pares.push(numero);

    } else{
        // si es impar 
        console.log(numero + "es impar");

    }
}

console.log("numeros pares:", pares);

let carros 
