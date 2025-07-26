//1
const numeroCualquiera = 5;
const arreglo = Array(numeroCualquiera).fill(0);

let primerNumeroLista = 1;

const resultado = arreglo.map(() => {
  const actual = primerNumeroLista;
  primerNumeroLista *= 2;
  return actual;
});

console.log(resultado); 

//2
const arrgloDeDiezNumeros = [10,21,33,45,55,64,72,85,91,15];

const encontrado = arrgloDeDiezNumeros.find(num => num > 90);
console.log(encontrado);

//3
const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

diasSemana.forEach((diasSemana, indice) => {
  console.log(`${indice + 1}: ${diasSemana}`);
});

//4
const arregloX = [23, 34, 56, 78, 79, 30, 10, 34];

const encontrar = arregloX.find(numero => numero === 10);
console.log(encontrar);

//5
const numerosDesordenados = [23, 45, 67, 34, 12, 14];

numerosDesordenados.sort((a,b) => a - b);
console.log(numerosDesordenados)
