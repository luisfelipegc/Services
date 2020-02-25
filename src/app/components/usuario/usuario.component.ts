import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {
  users: any[];
  filteredUsers: any[];

  constructor(private userService: UsuarioService) {
  }

  ngOnInit() {
    this.users = this.userService.getData();
    this.filteredUsers = this.users;
  }

  filtrarNombre(formulario: NgForm) {
    console.log(formulario.value);
  }

  filtrar(formulario: NgForm) {

    const position = formulario.value.position;
    const country = formulario.value.country;
    const experience = formulario.value.experience;
    console.log(position);
    console.log(country);
    console.log(experience);

    console.log('====');

    this.filteredUsers = this.users.filter((filterArray) => {
      console.log(filterArray.position);
      console.log(position);
      console.log('=======');
      console.log(filterArray.country);
      console.log(country);
      console.log('=======');
      console.log(filterArray.yearsExperience);
      console.log(experience);
      console.log('=======');
      console.log('==FIN DE RECORRIDO==');
      return (filterArray.position === position && filterArray.country === country && filterArray.yearsExperience <= experience);
    });
    console.log(this.filteredUsers);
  }

  limpiar() {
    this.ngOnInit();
  }
}


