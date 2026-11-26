function mostrarEncabezado(): void { console.log("=== SISTEMA DE VENTAS ==="); }
function convertirPrecio(texto: string): number | null {
 const valor: number = Number(texto);
 return Number.isFinite(valor) && valor >= 0 ? valor : null;
}
function clasificarCliente(tipo: string): number {
 const tasas: Record<string, number> = { regular: 0, vip: 0.10, empleado: 0.15, mayorista: 0.20 };
 return tasas[tipo.toLowerCase()] ?? -1;
}
function calcularTotal(precio: number, descuento: number): number { return precio * (1 - descuento); }
function mostrarResumen(precio: number, descuento: number, total: number): void {
 console.log(`Precio: $${precio.toFixed(2)}\nDescuento: ${(descuento * 100).toFixed(0)}%\nTotal: $${total.toFixed(2)}`);
}
mostrarEncabezado();
const precio: number | null = convertirPrecio("100");
const descuento: number = clasificarCliente("VIP");
if (precio === null || descuento < 0) console.log("Datos no válidos.");
else mostrarResumen(precio, descuento, calcularTotal(precio, descuento));
