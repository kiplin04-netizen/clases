const esNumeroPar = (numero: number): boolean => numero % 2 === 0;
for (const n of [2, 5, 8, 11]) console.log(`${n} es ${esNumeroPar(n) ? "par" : "impar"}.`);
