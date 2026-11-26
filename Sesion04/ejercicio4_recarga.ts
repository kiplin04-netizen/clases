import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const rl = createInterface({ input, output });

const cliente: string = await rl.question("Nombre del cliente: ");
const textoMonto: string = await rl.question("Monto de recarga: ");
const monto: number = Number(textoMonto);
console.log(`Cliente: ${cliente}\nValor original: ${textoMonto}\nMonto convertido: ${monto}\nTipo antes: ${typeof textoMonto}\nTipo después: ${typeof monto}\n¿Conversión inválida?: ${Number.isNaN(monto)}`);
rl.close();
