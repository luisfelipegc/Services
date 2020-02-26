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
import { FormsModule } from '@angular/forms';
import { SmarttableComponent } from './components/smarttable/smarttable.component';

// Smart Tables
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { OlimpicsComponent } from './components/olimpics/olimpics.component';

// Angular Material
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';


// PrimeNG
import { PrimengComponent } from './components/primeng/primeng.component';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    NavbarComponent,
    JobsComponent,
    CarroComponent,
    UsuarioComponent,
    SmarttableComponent,
    OlimpicsComponent,
    PrimengComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ScrollingModule,
    FormsModule,
    Ng2SmartTableModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    TableModule
  ],
  providers: [
    ServicioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
