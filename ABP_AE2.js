let montoEnDolares = 1200.45;
let CambioPesoChilensis = 745;

if (typeof montoEnDolares === "number") {
    let montoEnPesos = parseInt(montoEnDolares * CambioPesoChilensis);
    console.log("Los dólares que tienes a peso chileno es:" + montoEnPesos);
} else {
    console.log("Ingresa un monto válido de dólares");
}

let edad = 25;                     
let tieneCedulaVigente = true;            
let ahorroUF = 5;                  
let porcentajeVulnerabilidad = 65; 

if (
  edad > 18 && 
  tieneCedulaVigente === true &&
  ahorroUF >= 4 &&
  porcentajeVulnerabilidad <= 70
) {
  console.log("Cumples con los requisitos para postular al subsidio.");
} else {
  console.log("No cumples con los requisitos para postular.");
}