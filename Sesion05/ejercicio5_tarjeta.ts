import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const rl = createInterface({ input, output });

const nombre: string = (await rl.question("Nombre completo: ")).trim().replace(/\s+/g, " ");
const carrera: string = (await rl.question("Carrera: ")).trim().toUpperCase();
const codigo: string = (await rl.question("Código estudiantil: ")).trim();
console.log(`\n===== FICHA INSTITUCIONAL =====\nNombre: ${nombre}\nCarrera: ${carrera}\nFacultad: ${codigo.substring(0, 2).toUpperCase()}\nCódigo: ${codigo}\n===============================`);
rl.close();
