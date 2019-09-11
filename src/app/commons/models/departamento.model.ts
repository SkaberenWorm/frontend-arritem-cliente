

export class Departamento {

  public id = 0;
  public nombre = '';
  public activo = true;

  constructor(fields?: {
    id: number,
    nombre: string,
    activo: boolean
  }) {
    if (fields) { Object.assign(this, fields); }
  }
}
