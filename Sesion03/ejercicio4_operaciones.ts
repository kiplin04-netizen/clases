import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const rl = createInterface({ input, output });

const a: number = Number(await rl.question("Primer número: "));
const b: number = Number(await rl.question("Segundo número: "));
if (!Number.isFinite(a) || !Number.isFinite(b)) console.log("Ingrese valores numéricos válidos.");
else console.log(`Suma: ${a + b}\nResta: ${a - b}\nMultiplicación: ${a * b}\nDivisión: ${b !== 0 ? a / b : "No se puede dividir entre cero"}`);
rl.close();
