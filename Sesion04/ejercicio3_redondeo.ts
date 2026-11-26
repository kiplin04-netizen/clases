import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const rl = createInterface({ input, output });

const texto: string = await rl.question("Promedio: ");
const promedio: number = Number(texto);
if (!Number.isFinite(promedio)) console.log("Promedio inválido.");
else console.log(`Valor convertido: ${promedio}; redondeado: ${Math.round(promedio)}`);
rl.close();
