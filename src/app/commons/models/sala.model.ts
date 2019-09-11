import { Piso } from './piso.model';
import { TipoUbicacion } from './tipo-ubicacion.model';

export class Sala {
  /* constructor(public id: number, public descripcion: string, public piso: Piso, public activo: boolean) {

  } */

  public id = 0;
  public descripcion = '';
  public piso = new Piso();
  public activo = true;
  public tipoUbicacion = new TipoUbicacion();
  public maximoMesas = 0;

  constructor(fields?: { id: number; descripcion: string; piso: Piso; tipoUbicacion: TipoUbicacion; activo: boolean; maximoMesas: number }) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}
