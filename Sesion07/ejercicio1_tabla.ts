import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const rl = createInterface({ input, output });

const numero: number = Number(await rl.question("Número entero: "));
if (!Number.isInteger(numero)) console.log("Debe ingresar un entero.");
else for (let i = 1; i <= 10; i++) console.log(`${numero} x ${i} = ${numero * i}`);
rl.close();
