function calcularDescuento(precio: number, porcentaje: number = 10): number {
 return precio - precio * (porcentaje / 100);
}
console.log(`Descuento predeterminado: $${calcularDescuento(100).toFixed(2)}`);
console.log(`Descuento especial: $${calcularDescuento(100, 15).toFixed(2)}`);
