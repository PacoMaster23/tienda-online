import { Component } from '@angular/core';
import { ProductosComponent } from "./productos/productos.component";
import { Producto } from './productos/producto.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listado-productos',
  imports: [FormsModule],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent {
  TituloListado = 'Listado de Productos';


  ListaProductos: Producto[] = [new Producto('Camisa', 80.0), new Producto('Pantalon', 180.0), new Producto('Zapatos', 250.0)];
  descripcionInput: string = '';
  precioInput: number | null = null;

  Precios: string[] = ['50', '100', '2   0', '200'];

  agregarProducto(): void {
    if (this.descripcionInput.trim() === '' || this.precioInput === null || this.precioInput <= 0) {
      alert('Por favor, ingrese una descripción y un precio válido para el producto.');
      return;
    }
    const producto = new Producto(this.descripcionInput, this.precioInput);
    this.ListaProductos.push(producto);
    this.descripcionInput = '';
    this.precioInput = null;
  }

}
