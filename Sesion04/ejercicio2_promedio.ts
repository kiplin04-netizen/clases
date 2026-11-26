import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const rl = createInterface({ input, output });

const entradas: string[] = [];
for (let i = 1; i <= 3; i++) entradas.push(await rl.question(`Nota ${i}: `));
const notas: number[] = entradas.map(Number);
if (notas.every(n => Number.isFinite(n))) console.log(`Promedio: ${(notas.reduce((a, b) => a + b, 0) / 3).toFixed(2)}`);
else console.log("Error: todas las notas deben ser numéricas.");
rl.close();
