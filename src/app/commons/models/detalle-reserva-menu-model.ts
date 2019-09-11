import { Menu } from './menu.model';
import { CategoriaMenu } from './categoria-menu.model';
import { Producto } from './producto.model';
import { Reserva } from './reserva-model';

export class DetalleReservaMenu {

  public id = 0;
  public menu = null;
  public producto = null;
  public reserva = new Reserva();
  public tipo = 'M';
  public cantidad = 1;
  public valorMenu = 0;
  public total = 0;

  constructor(fields?: {
    id: number,
    menu: Menu,
    producto: Producto,
    reserva: number,
    cantidad: number,
    tipo: any,
    valorMenu: number,
    total: number
  }) {
    if (fields) { Object.assign(this, fields); }
  }

}
