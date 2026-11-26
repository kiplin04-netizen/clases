import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const rl = createInterface({ input, output });

// El resultado 105 ocurría porque + concatenaba dos cadenas en lugar de sumarlas como números.
const maiz: number = Number.parseInt(await rl.question("Pupusas de maíz: "), 10);
const arroz: number = Number.parseInt(await rl.question("Pupusas de arroz: "), 10);
if (!Number.isInteger(maiz) || !Number.isInteger(arroz) || maiz < 0 || arroz < 0) console.log("Ingrese cantidades enteras válidas.");
else console.log(`Total de pupusas: ${maiz + arroz}`);
rl.close();
