import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const rl = createInterface({ input, output });

const nota: number = Number(await rl.question("Nota (0 a 10): "));
if (!Number.isFinite(nota) || nota < 0 || nota > 10) console.log("Nota fuera del rango permitido.");
else {
 const letra: string = nota >= 9 ? "A (Excelente)" : nota >= 8 ? "B (Muy Bueno)" : nota >= 7 ? "C (Bueno)" : nota >= 6 ? "D (Aprobado)" : "F (Reprobado)";
 console.log(`Resultado: ${letra}`);
}
rl.close();
