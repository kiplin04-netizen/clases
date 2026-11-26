import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const rl = createInterface({ input, output });

const entrada: string = await rl.question("Ingrese un número: ");
const numero: number = Number(entrada);
const texto: string = String(numero);
const verificado: number = Number.parseFloat(texto);
console.log(`Original: ${entrada} (${typeof entrada})\nTexto: ${texto} (${typeof texto})\nNúmero: ${verificado} (${typeof verificado})`);
rl.close();
