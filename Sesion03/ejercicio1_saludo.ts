import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const rl = createInterface({ input, output });

const nombre: string = await rl.question("Nombre completo: ");
const edad: number = Number(await rl.question("Edad: "));
console.log(`Saludos, ${nombre}. Usted tiene ${edad} años.`);
rl.close();
