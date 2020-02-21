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

  filtrar(formulario: NgForm) {
    this.filteredUsers = this.users.filter((el) => {
      return (el.position === formulario.value.position);
    });
    console.log(this.filteredUsers);
  }


  limpiar() {
    this.ngOnInit();
  }
}


