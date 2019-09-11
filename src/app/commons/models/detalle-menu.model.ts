export class DetalleMenu {

  public id = 0;
  public valorMenu = 0;
  public cantidad = 0;
  public total = 0;

  constructor(fields?: {
    id: number,
    valorMenu: number,
    cantidad: number,
    total: number
  }) {
    if (fields) { Object.assign(this, fields); }
  }
}
