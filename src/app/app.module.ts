import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // ✅ Importa FormsModule y ReactiveFormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservaEventoComponent } from './reserva-evento/reserva-evento.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservaEventoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,          // ✅ Necesario para [(ngModel)]
    ReactiveFormsModule   // ✅ Necesario para FormGroup y validaciones reactivas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
