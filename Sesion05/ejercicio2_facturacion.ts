import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const rl = createInterface({ input, output });

const precio: number = Number(await rl.question("Precio del producto: "));
const cantidad: number = Number(await rl.question("Cantidad: "));
if (!Number.isFinite(precio) || !Number.isFinite(cantidad) || precio < 0 || cantidad < 0) console.log("Datos inválidos.");
else {
 const subtotal: number = precio * cantidad;
 const iva: number = subtotal * 0.13;
 const total: number = subtotal + iva;
 console.log(`Subtotal: $${subtotal.toFixed(2)}\nIVA (13%): $${iva.toFixed(2)}\nTotal: $${total.toFixed(2)}`);
}
rl.close();
