import { Producto } from './producto.model';
import { Menu } from './menu.model';

export class DetalleProductoMenu {

  public id = 0;
  public producto = new Producto();
  public idMenu = 0;

  constructor(fields?: {
    id: number,
    producto: Producto,
    idMenu: number
  }) {
    if (fields) { Object.assign(this, fields); }
  }

}
