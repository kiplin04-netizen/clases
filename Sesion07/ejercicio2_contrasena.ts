import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const rl = createInterface({ input, output });

const correcta: string = "UNIVO2026";
let intento: string = "";
while (intento !== correcta) {
 intento = await rl.question("Ingrese la contraseña: ");
 if (intento !== correcta) console.log("Contraseña incorrecta. Intente de nuevo.");
}
console.log("Acceso concedido.");
rl.close();
