// models/reserva-evento.model.ts
export class ReservaEvento {
    public tipoEvento: string;
    public decoracion: string;
    public numAsistentes: number;
    public fecha: string;

    constructor(tipoEvento: string, decoracion: string, numAsistentes: number, fecha: string) {
        this.tipoEvento = tipoEvento;
        this.decoracion = decoracion;
        this.numAsistentes = numAsistentes;
        this.fecha = fecha;
    }
}
