import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const rl = createInterface({ input, output });

const cliente: string = await rl.question("Nombre del cliente: ");
const producto: string = await rl.question("Producto: ");
const cantidad: number = Number(await rl.question("Cantidad: "));
const precio: number = Number(await rl.question("Precio unitario: $"));
const subtotal: number = cantidad * precio;
console.log(`\n========= LA TARTALETA =========\nCliente: ${cliente}\nProducto: ${producto}\nCantidad: ${cantidad}\nPrecio unitario: $${precio.toFixed(2)}\nTOTAL: $${subtotal.toFixed(2)}\n================================`);
rl.close();
