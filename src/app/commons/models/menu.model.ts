import { CategoriaMenu } from './categoria-menu.model';
import { Producto } from './producto.model';
import { DetalleProductoMenu } from './detalle-producto-menu-model';

export class Menu {
  constructor(
    public id: number,
    public descripcion: String,
    public total: number,
    public activo: boolean,
    public categoriaMenu: CategoriaMenu,
    public menu: Menu,
    public productos: Array<DetalleProductoMenu>,
    public subMenu: Array<Menu>
  ) {

  }

  /* public id = 0;
  public descripcion = '';
  public total = 0;
  public activo = true;
  public categoriaMenu = new CategoriaMenu();
  public menu = new Menu();
  public productos = new Array<DetalleProductoMenu>();
  public subMenu = Array<Menu>();

  constructor(fields?: {
    id: number,
    descripcion: String,
    total: number;
    activo: boolean;
    categoriaMenu: CategoriaMenu,
    menu: Menu,
    productos: Array<DetalleProductoMenu>,
    subMenu: Array<Menu>
  }) {
    if (fields) { Object.assign(this, fields); }
  } */
}
