import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibrosComponent } from './components/libros/libros.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { CarroComponent } from './components/carro/carro.component';
import { UsuarioComponent } from './components/usuario/usuario.component';



const routes: Routes = [
  { path: 'books', component: LibrosComponent },
  { path: 'cars', component: JobsComponent },
  { path: 'carro/:codigo', component: CarroComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'cars' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

