import { Departamento } from './departamento.model';

export class Piso {

  public id = 0;
  public descripcion = '';
  public departamento = new Departamento();
  public activo = true;

  constructor(fields?: {
    id: number,
    descripcion: string,
    departamento: Departamento,
    activo: boolean
  }) {
    if (fields) { Object.assign(this, fields); }
  }
}
