import { Cliente } from "./cliente";
import { DetalleVenta } from "./detalleVenta";

export interface Venta {
  cliente: Cliente,
  condicionPago: number,
  detalles: DetalleVenta[]
}
