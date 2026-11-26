function saludar(nombre: string, apellido?: string): string {
 return apellido ? `Hola, ${nombre} ${apellido}.` : `Hola, ${nombre}.`;
}
console.log(saludar("Ana", "López"));
console.log(saludar("Carlos"));
