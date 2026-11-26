import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const rl = createInterface({ input, output });

const numero: number = Number(await rl.question("Día (1-7): "));
let dia: string;
switch (numero) {
 case 1: dia = "Lunes"; break; case 2: dia = "Martes"; break; case 3: dia = "Miércoles"; break;
 case 4: dia = "Jueves"; break; case 5: dia = "Viernes"; break; case 6: dia = "Sábado"; break;
 case 7: dia = "Domingo"; break; default: dia = "Día inválido";
}
console.log(dia);
rl.close();
