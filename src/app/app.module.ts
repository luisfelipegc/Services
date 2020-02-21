import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Servicio
import { ServicioService } from './services/servicio.service';

// Scroll
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LibrosComponent } from './components/libros/libros.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { CarroComponent } from './components/carro/carro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    NavbarComponent,
    JobsComponent,
    CarroComponent,
    UsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ScrollingModule,
    FormsModule
  ],
  providers: [
    ServicioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
