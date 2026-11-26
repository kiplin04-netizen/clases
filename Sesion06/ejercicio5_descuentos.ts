import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const rl = createInterface({ input, output });

const tipo: string = (await rl.question("Tipo de cliente (Regular, VIP, Empleado, Mayorista): ")).trim().toLowerCase();
const compra: number = Number(await rl.question("Total de compra: $"));
const descuentos: Record<string, number> = { regular: 0, vip: 0.10, empleado: 0.15, mayorista: 0.20 };
if (!(tipo in descuentos) || !Number.isFinite(compra) || compra < 0) console.log("Datos inválidos.");
else console.log(`Descuento: ${(descuentos[tipo] * 100).toFixed(0)}%\nTotal a pagar: $${(compra * (1 - descuentos[tipo])).toFixed(2)}`);
rl.close();
