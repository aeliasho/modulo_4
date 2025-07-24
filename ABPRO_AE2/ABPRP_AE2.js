let totalNeto = 0;
let seguirComprando = true;

while (seguirComprando) {
  let opcion = prompt(`
  Lo que tenemos para ofrecer:

  1. Marraqueta unidad ($250 c/u)
  2. Litro de Leche ($1500)
  3. Huevos ($250 c/u)
  4. Ir a pagar
  
  Ingresa el número del producto que deseas comprar:
  `);

  if (opcion === "1") {
    let cantidad = prompt("¿Cuántas marraquetas deseas comprar?");
    totalNeto += 250 * Number(cantidad);

  } else if (opcion === "2") {
    let cantidad = prompt("¿Cuántas leches deseas comprar?");
    totalNeto += 1500 * Number(cantidad);

  } else if (opcion === "3") {
    let cantidad = prompt("¿Cuántos huevos deseas comprar?");
    totalNeto += 250 * Number(cantidad);

  } else if (opcion === "4") {
    seguirComprando = false;
  } else {
    alert("Opción inválida. Por favor, elige una opción del 1 al 4.");
  }
}

let iva = totalNeto * 0.19;
let despacho = (totalNeto > 50000) ? 0 : 3000;
let totalFinal = totalNeto + iva + despacho;

alert(`
Resumen de tu compra:
----------------------------
Total Neto: $${totalNeto}
IVA (19%): $${iva}
Despacho: $${despacho}
----------------------------
TOTAL A PAGAR: $${totalFinal}
¡Gracias por tu compra!
`);
