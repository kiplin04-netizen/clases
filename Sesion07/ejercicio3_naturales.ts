import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const rl = createInterface({ input, output });

const texto: string = await rl.question("Ingrese un entero positivo N: ");
const n: number = Number(texto);
if (!Number.isInteger(n) || n <= 0) console.log("Dato inválido.");
else {
 let suma: number = 0;
 for (let i = 1; i <= n; i++) suma += i;
 console.log(`La suma de 1 a ${n} es ${suma}.`);
}
rl.close();
