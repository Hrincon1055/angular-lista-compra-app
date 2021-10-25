export class Producto {
  public nombre: string;
  public cantidad: number;
  public departamento: string;
  constructor(
    nombre: string = '',
    cantidad: number = 0,
    departamento: string = ''
  ) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.departamento = departamento;
  }
}
