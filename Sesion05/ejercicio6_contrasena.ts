import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const rl = createInterface({ input, output });

const clave: string = await rl.question("Contraseña: ");
const faltan: number = Math.max(0, 8 - clave.length);
console.log(faltan === 0 ? "Contraseña válida." : `Contraseña no válida. Faltan ${faltan} caracteres.`);
rl.close();
