//Suma de los números
function calcularSumatoria(x) {
  let suma = 0;
  for (let i = 1; i <= x; i++) {
    suma += i;
  }
  return suma;
}

console.log(calcularSumatoria(5));

//Números Primos
numeroPrimo(7);

function numeroPrimo(numero = 3) {
  if (numero <= 1) {
    console.log(`${numero} no es primo`);
    return;
  }

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      console.log(`${numero} no es primo`);
      return;
    }
  }

  console.log(`${numero} es primo`);
}

//Cuenta regresiva

function cuentaRegresiva(x) {
  if (x >= 100) {
    console.log("El número debe ser menor que 100.");
    return;
  }

  for (let i = x; i >= 1; i--) {
    console.log(i);
  }
}

console.log (cuentaRegresiva(8));

//Sumar los pares 

const sumarPares = (x) => {
  if (x <= 10 || x >= 1000) {
    console.log("Debe ser un número mayor a 10 y menor que mil");
    return;
  }

  let suma = 0;

  for (let i = 1; i <= x; i++) {
    if (i % 2 === 0) {
      suma += i;
    }
  }
  console.log(suma);
};

sumarPares(50);

//Multiplicar el 12
const tablaMultiplicar12 = (x) => {
  for (let i = 1; i <= 12; i++) {
    console.log(`${x} x ${i} = ${x * i}`);
  }
};
tablaMultiplicar12(7);

//Ordenar número usando sort, aunque sea para string, no supe cómo hacerlo de otra forma, jeje

const ordenarAscendente = (arr) => {
  arr.sort((a, b) => a - b);
  console.log(arr);
};
ordenarAscendente([25, 3, 8, 1, 50, 14]);  

