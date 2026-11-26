import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const rl = createInterface({ input, output });

let suma: number = 0;
let cantidad: number = 0;
while (true) {
 const texto: string = await rl.question("Ingrese una nota (negativo para terminar): ");
 const nota: number = Number(texto);
 if (!Number.isFinite(nota)) { console.log("Ingrese un valor numérico."); continue; }
 if (nota < 0) break;
 suma += nota; cantidad++;
}
console.log(cantidad > 0 ? `Promedio: ${(suma / cantidad).toFixed(2)} (${cantidad} notas)` : "No se registraron notas.");
rl.close();
