const producto1 = "Gorro";
const precio1 = 5000;
const producto2 = "Jarro";
const precio2 = 3000;

let comprarGorro = true; 
let comprarJarro = false; 

let subtotal = 0;
const iva = 0.19; 
const despacho = 2000;

if (comprarGorro) {
    subtotal += precio1;
}

if (comprarJarro) {
    subtotal += precio2;
}

const valorIva = subtotal * iva;
const totalFinal = subtotal + valorIva + despacho;

console.log("Valor neto: $" + subtotal);
console.log("IVA (19%): $" + valorIva);
console.log("Despacho: $" + despacho);
console.log("TOTAL FINAL: $" + totalFinal);