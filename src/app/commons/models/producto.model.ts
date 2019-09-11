import { TipoProducto } from './tipo-producto.model';

export class Producto {

  public id = 0;
  public descripcion = '';
  public precio = 0;
  public activo = true;
  public tipo = new TipoProducto();

  constructor(fields?: {
    id?: number,
    descripcion?: string,
    precio?: number,
    activo?: boolean,
    tipo?: TipoProducto
  }) {
    if (fields) { Object.assign(this, fields); }
  }
}
