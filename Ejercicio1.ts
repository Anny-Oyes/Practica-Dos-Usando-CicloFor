// Imprime la tabla de multiplicar de un numero.

var tablaDeMultiplicar = (numeroAMultiplicar: number = 5, limite: number = 12) => {
    for (var i = 1; i <= limite; i++) {
        console.log(numeroAMultiplicar + " X " + i + " = " + (numeroAMultiplicar * i));
    }

    return tablaDeMultiplicar;
};

tablaDeMultiplicar();
