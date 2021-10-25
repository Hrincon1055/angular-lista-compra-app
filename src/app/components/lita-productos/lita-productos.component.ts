import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-lita-productos',
  templateUrl: './lita-productos.component.html',
  styleUrls: ['./lita-productos.component.css'],
})
export class LitaProductosComponent implements OnInit {
  @Output() productoSelecionado: EventEmitter<number>;
  @Input() productos!: Producto[];
  constructor() {
    this.productoSelecionado = new EventEmitter();
  }

  ngOnInit(): void {}
  onClick(i: number) {
    this.productoSelecionado.emit(i);
  }
}
