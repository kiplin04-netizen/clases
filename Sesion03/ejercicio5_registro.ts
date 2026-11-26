import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const rl = createInterface({ input, output });

const nombre: string = await rl.question("Nombre completo: ");
const fecha: string = await rl.question("Fecha de registro: ");
const carrera: string = await rl.question("Carrera: ");
console.log(`\n===== BIENVENIDO A UNIVO =====\nNombre: ${nombre}\nFecha de registro: ${fecha}\nCarrera: ${carrera}\n=============================`);
rl.close();
