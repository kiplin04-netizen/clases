import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const rl = createInterface({ input, output });

const nombre: string = await rl.question("Nombre completo: ");
const limpio: string = nombre.trim().toUpperCase();
console.log(`Nombre: ${limpio}\nCaracteres: ${limpio.length}`);
rl.close();
