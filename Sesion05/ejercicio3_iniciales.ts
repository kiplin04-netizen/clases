import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const rl = createInterface({ input, output });

const nombre: string = (await rl.question("Primer nombre: ")).trim();
const apellido: string = (await rl.question("Primer apellido: ")).trim();
const iniciales: string = `${nombre.charAt(0)}${apellido.charAt(0)}`.toUpperCase();
console.log(`Código: ${iniciales}${apellido.length}`);
rl.close();
