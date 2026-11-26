import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const rl = createInterface({ input, output });

let total: number = 0;
for (let i = 1; i <= 3; i++) {
  const nombre: string = await rl.question(`Nombre del artículo ${i}: `);
  const precio: number = Number(await rl.question(`Precio de ${nombre}: $`));
  if (!Number.isFinite(precio) || precio < 0) {
    console.log("Precio inválido."); rl.close(); process.exit(1);
  }
  total += precio;
}
console.log(`\n========= SUPER SELECTOS =========\nTOTAL A PAGAR: $${total.toFixed(2)}\n==================================`);
rl.close();
