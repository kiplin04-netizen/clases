function buscarCursos(texto: string, maxResultados: number = 5): void {
 console.log(`Búsqueda: "${texto}". Se mostrarán hasta ${maxResultados} resultados.`);
}
buscarCursos("TypeScript");
buscarCursos("Bases de datos", 10);
