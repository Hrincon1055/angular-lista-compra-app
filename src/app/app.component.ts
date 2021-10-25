import { Component } from '@angular/core';
import { Producto } from './models/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public productosSeleccionados: Producto[];
  public productosComprados: Producto[];

  constructor() {
    this.productosSeleccionados = [];
    this.productosComprados = [];
  }
  onProductoCreado($event: Producto) {
    this.productosSeleccionados.push($event);
  }
  onProductoSelecionado($event: number) {
    const prod = this.productosSeleccionados.splice($event, 1);
    this.productosComprados.push(prod[0]);
  }
  onProductoNoSelecionado($event: number) {
    const prod = this.productosComprados.splice($event, 1);
    this.productosSeleccionados.push(prod[0]);
  }
}
