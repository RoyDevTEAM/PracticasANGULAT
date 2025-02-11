// builders/director-reserva.ts
import { BuilderReserva } from './reserva-evento.builder';
import { ReservaEvento } from '../models/reserva-evento.model';

export class DirectorReserva {
    private builder: BuilderReserva;

    constructor(builder: BuilderReserva) {
        this.builder = builder;
    }

    construirReserva(): ReservaEvento {
        this.builder.establecerTipoEvento();
        this.builder.establecerDecoracion();
        this.builder.establecerNumAsistentes();
        this.builder.establecerFecha();
        return this.builder.obtenerReserva();
    }
}
