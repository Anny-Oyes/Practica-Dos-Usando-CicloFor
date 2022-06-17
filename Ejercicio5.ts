// Sumar todos los elementos de un arreglo de números cuyo valor sean mayor al numero recibido.

const arreglo: [number, number, number, number, number, number] = [1, 2, 3, 4, 5, 6];
const limite: number = 3;
const segundoArreglo: number[] = [];
var suma: number = 0;

for (var i = 0; i < arreglo.length; i++) {
    var valor: number = arreglo[i];

    if (valor > limite) {
        segundoArreglo.push(valor);
    }
}

for (var i = 0; i < segundoArreglo.length; i++) {
    suma += segundoArreglo[i];
}

console.log("El arreglo inicial es: " + "[" + arreglo + "]");
console.log("Se filtran los números mayores a: " + limite);
console.log("El arreglo filtrado es: " + "[" + segundoArreglo + "]");
console.log("La suma del arreglo arreglo ya filtrado es: " + suma);