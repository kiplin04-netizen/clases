function precioFinal(precioBase: number, impuesto?: number): number {
 return impuesto === undefined ? precioBase : precioBase * (1 + impuesto / 100);
}
console.log(`Sin impuesto: $${precioFinal(50).toFixed(2)}`);
console.log(`Con impuesto: $${precioFinal(50, 13).toFixed(2)}`);
