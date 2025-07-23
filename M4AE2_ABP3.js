//Problema 1
let numero = 4;

let numeroIngresado = (numero <15 && numero >5)
    ? "El número ingresado tiene opciones de ganar"
    : (numero === 70)
        ? "El número ingresado tiene opciones de ganar"
        : (numero === 55)
            ? "El número ingresado tiene opciones de ganar"
            : "El número ingresado no es favorable";
console.log(numeroIngresado);

//Problema 2

let annoXD = 2024;

let annoXDBisiesto = (annoXD <=0)
  ? "Ingresa un año correcto"
  :((annoXD % 4 === 0 && annoXD % 100 !== 0) || (annoXD % 400 === 0))
    ? "Este año es bisiesto"
    : "Este año no es bisiesto"
console.log(annoXDBisiesto)

//Problema 3

let juegosJugadorA = 7;
let juegosJugadorB = 6;

let resultado = (juegosJugadorA > 7 || juegosJugadorB > 7)
  ? `Resultado inválido: A: ${juegosJugadorA} - B: ${juegosJugadorB}`
  : (juegosJugadorA === 7 && (juegosJugadorB === 5 || juegosJugadorB === 6))
    ? `A ganó el set con ${juegosJugadorA} juegos contra ${juegosJugadorB}`
    : (juegosJugadorB === 7 && (juegosJugadorA === 5 || juegosJugadorA === 6))
      ? `B ganó el set con ${juegosJugadorB} juegos contra ${juegosJugadorA}`
      : (juegosJugadorA === 6 && juegosJugadorB <= 4)
        ? `A ganó el set con ${juegosJugadorA} juegos contra ${juegosJugadorB}`
        : (juegosJugadorB === 6 && juegosJugadorA <= 4)
          ? `B ganó el set con ${juegosJugadorB} juegos contra ${juegosJugadorA}`
          : (juegosJugadorA === 6 && juegosJugadorB === 6)
            ? `El set todavía no termina: A: ${juegosJugadorA} - B: ${juegosJugadorB}`
            : (juegosJugadorA < 7 && juegosJugadorB < 7)
              ? `El set todavía no termina: A: ${juegosJugadorA} - B: ${juegosJugadorB}`
              : `Resultado inválido: A: ${juegosJugadorA} - B: ${juegosJugadorB}`;
console.log(resultado);
