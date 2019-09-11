import { EstadoReserva } from "./estado-reserva.model";
import { Sala } from "./sala.model";
import { DetalleReservaMenu } from "./detalle-reserva-menu-model";
import { TipoReserva } from "./tipo-reserva.model";

export class Reserva {


  public id = 0;
  public usuarioId = '';
  public cantidadPersonas = 0;
  public fechaHoraInicio = new Date();
  public fechaHoraTermino = new Date();
  public total = 0;
  public observacion = '';
  public createdAt = new Date();
  public menus = new Array<DetalleReservaMenu>();
  public estado = new EstadoReserva();
  public sala = new Sala();
  public tipoReserva = new TipoReserva();

  constructor(fields?: {
    id: number,
    usuarioId: String,
    cantidadPersonas: number,
    observacion: String,
    fechaHotaInicio: Date,
    fechaHoraTermino: Date,
    total: number,
    createdAt: Date,
    menus: Array<DetalleReservaMenu>,
    estado: EstadoReserva,
    sala: Sala,
    tipoReserva: TipoReserva
  }) {
    if (fields) { Object.assign(this, fields); }
  }
}

