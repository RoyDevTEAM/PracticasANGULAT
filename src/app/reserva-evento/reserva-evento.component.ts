import { Component, OnInit } from '@angular/core';
import { ReservaBodaBuilder } from '../builder/reserva-boda.builder';
import { DirectorReserva } from '../builder/director-reserva';
import { ReservaEvento } from '../models/reserva-evento.model';

@Component({
  selector: 'app-reserva-evento',
  templateUrl: './reserva-evento.component.html',
  styleUrls: ['./reserva-evento.component.css']
})
export class ReservaEventoComponent implements OnInit {
  reserva: ReservaEvento | null = null; // Variable para almacenar la última reserva creada
  reservas: ReservaEvento[] = []; // Lista de reservas almacenadas

  // Método que se ejecuta al iniciar el componente
  ngOnInit() {
    this.cargarReservas(); // Carga las reservas almacenadas en localStorage
  }

  // Método para crear una nueva reserva
  crearReserva() {
    const builder = new ReservaBodaBuilder(); // Crea un constructor de reservas de bodas
    const director = new DirectorReserva(builder); // Usa el director para construir la reserva
    this.reserva = director.construirReserva(); // Genera una nueva reserva

    if (this.reserva) { // Si la reserva fue creada correctamente
      this.reservas.push(this.reserva); // La agrega a la lista de reservas
      this.guardarReservas(); // Guarda las reservas en localStorage
    }
  }

  // Método para guardar las reservas en localStorage
  guardarReservas() {
    localStorage.setItem('reservas', JSON.stringify(this.reservas)); // Convierte el array en JSON y lo almacena
  }

  // Método para cargar las reservas almacenadas en localStorage
  cargarReservas() {
    const data = localStorage.getItem('reservas'); // Obtiene los datos guardados
    if (data) { // Si existen datos guardados
      this.reservas = JSON.parse(data); // Convierte el JSON en un array de reservas
    }
  }
}
