import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const rl = createInterface({ input, output });

const peso: number = Number(await rl.question("Peso en kg: "));
const estatura: number = Number(await rl.question("Estatura en metros: "));
if (!Number.isFinite(peso) || !Number.isFinite(estatura) || peso <= 0 || estatura <= 0) console.log("Datos inválidos.");
else {
 const imc: number = peso / estatura ** 2;
 const categoria: string = imc < 18.5 ? "Bajo peso" : imc < 25 ? "Peso normal" : imc < 30 ? "Sobrepeso" : "Obesidad";
 console.log(`IMC: ${imc.toFixed(2)}\nCategoría: ${categoria}`);
}
rl.close();
