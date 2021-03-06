import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibrosComponent } from './components/libros/libros.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { CarroComponent } from './components/carro/carro.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { SmarttableComponent } from './components/smarttable/smarttable.component';
import { OlimpicsComponent } from './components/olimpics/olimpics.component';
import { PrimengComponent } from './components/primeng/primeng.component';
import { StepperComponent } from './components/stepper/stepper.component';



const routes: Routes = [
  { path: 'books', component: LibrosComponent },
  { path: 'cars', component: JobsComponent },
  { path: 'carro/:codigo', component: CarroComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'smart', component: SmarttableComponent },
  { path: 'olimpics', component: OlimpicsComponent },
  { path: 'primeng', component: PrimengComponent },
  { path: 'stepper', component: StepperComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'cars' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

