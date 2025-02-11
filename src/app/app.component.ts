import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PracticasAngular';

  estudiantes = [
    {
      nombre: 'Juan Ruben Heredia',
      edad: 20,
      correo: 'juan.heredia@example.com',
      puesto: 'Frontend Developer',
      foto: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      nombre: 'Carlos Guzman',
      edad: 23,
      correo: 'carlos.guzman@example.com',
      puesto: 'Backend Developer',
      foto: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
      nombre: 'Raul Padilla',
      edad: 20,
      correo: 'raul.padilla@example.com',
      puesto: 'Full Stack Developer',
      foto: 'https://randomuser.me/api/portraits/men/3.jpg'
    }
  ];
}
