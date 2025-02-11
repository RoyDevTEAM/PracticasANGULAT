// builders/reserva-boda.builder.ts
import { BuilderReserva } from './reserva-evento.builder';
import { ReservaEvento } from '../models/reserva-evento.model';

export class ReservaBodaBuilder implements BuilderReserva {
    private reserva: ReservaEvento;

    constructor() {
        this.reserva = new ReservaEvento("", "", 0, "");
    }

    establecerTipoEvento(): void {
        this.reserva.tipoEvento = "Boda";
    }

    establecerDecoracion(): void {
        this.reserva.decoracion = "Decoración floral, mesas elegantes";
    }

    establecerNumAsistentes(): void {
        this.reserva.numAsistentes = 150;
    }

    establecerFecha(): void {
        this.reserva.fecha = "2025-12-20";
    }

    obtenerReserva(): ReservaEvento {
        return this.reserva;
    }
}
