// builders/reserva-evento.builder.ts
import { ReservaEvento } from '../models/reserva-evento.model';

export interface BuilderReserva {
    establecerTipoEvento(): void;
    establecerDecoracion(): void;
    establecerNumAsistentes(): void;
    establecerFecha(): void;
    obtenerReserva(): ReservaEvento;
}
