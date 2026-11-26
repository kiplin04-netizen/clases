import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const rl = createInterface({ input, output });

const departamento: string = (await rl.question("Departamento de destino: ")).trim().toLowerCase();
const tarifas: Record<string, number> = {
 "san miguel": 3.50, usulutan: 3.50, morazan: 3.50, "la union": 3.50,
 "san salvador": 5, "la libertad": 5, cuscatlan: 5, "la paz": 5, "san vicente": 5, cabanas: 5, chalatenango: 5,
 "santa ana": 6.25, sonsonate: 6.25, ahuachapan: 6.25
};
const tarifa: number | undefined = tarifas[departamento.normalize("NFD").replace(/[\u0300-\u036f]/g, "")];
console.log(tarifa === undefined ? "Error: departamento no reconocido." : `Tarifa: $${tarifa.toFixed(2)}`);
rl.close();
